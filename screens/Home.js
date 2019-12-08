import React from 'react';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts, likePost, unlikePost } from '../actions/post';
import { getUser } from '../actions/user';
import moment from 'moment';
import styles from '../styles';


class Home extends React.Component {
  
  componentDidMount = () => {
    this.props.getPosts()
  }

  likePost = (post) => {
    const {uid} = this.props.user
    if(post.likes.includes(uid)){
      this.props.unlikePost(post)
    }
    else {
      this.props.likePost(post)
    }
  }
  
  navigateMap = (item) => {
    this.props.navigation.navigate('Map', {location: item.postLocation})
  }

  goToUser = (user) => {
    if(user.uid !== this.props.user.uid) {
      this.props.getUser(user.uid, 'GET_PROFILE')
      this.props.navigation.navigate('Profile')
    } else {
      this.props.navigation.navigate('MyProfile')
    }
    
  }

  render () {
    if(this.props.post === null) return null
    // console.log(this.props.post.feed)
    return (
      <View style={styles.container}>
        {/* FlatList adds more functionality vs ScrollVIew */}
       <FlatList 
        onRefresh={() => this.props.getPosts()}
        refreshing={false}
        data = {this.props.post.feed}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => {
          const liked = item.likes.includes(this.props.user.uid)
          return (
            <View>
              {/* above post */}
              <View style = {[styles.row, styles.space]}>
                <View style = {[styles.row, styles.center]}>
                  <TouchableOpacity style={[styles.row, styles.space]} onPress = {() => this.goToUser(item)}>
                    <Image style = {styles.roundImage} source = {{uri: item.photo}}/> 
                  </TouchableOpacity>
                  <View>
                    <Text style = {styles.bold}>{item.username}</Text>
                    <Text style={[styles.gray, styles.small]}>{moment(item.date).format('ll')}</Text>
                    <TouchableOpacity onPress = { () => this.navigateMap(item) }>
                      <Text style = {[styles.location, styles.small]}>{item.postLocation ? item.postLocation.name : null}</Text>
                    </TouchableOpacity>
                  </View> 
                </View>
                <Ionicons style = {styles.icon} name = 'ios-flag' size={25} />
              </View>
              {/* post */}
              <TouchableOpacity onPress = {() => this.likePost(item)}>
                <Image style = {styles.postPhoto} source = {{uri: item.postPhoto}}/> 
              </TouchableOpacity>
              {/* below post */}
              <View style = {styles.row}>
                <AntDesign style = {styles.icon} color = {liked ? '#0984e3' : '#000'} name= { liked ? 'like1' : 'like2' }size={20} />
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Comment', item)}>
                  <EvilIcons style = {styles.icon} name= 'comment' size={25} />  
                </TouchableOpacity>
                <EvilIcons style = {styles.icon} name= 'share-apple' size={25} />            
              </View>
              <Text>Recipe: {item.recipeName }</Text> 
              <Text>Steps: {item.postDescription }</Text> 
            </View>
          )
          
        }}   
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts, likePost, unlikePost, getUser }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Home);