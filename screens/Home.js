import React from 'react';
import { Text, View, Button, Image, FlatList } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post';
import styles from '../styles';


class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render () {
    if(this.props.post === null) return null
    return (
      <View style={styles.container}>
        {/* FlatList adds more functionality vs ScrollVIew */}
       <FlatList 
        data = {this.props.post.feed}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <View>
            {/* above post */}
            <View style = {[styles.row, styles.center]}>
              <View style = {[styles.row, styles.center]}>
                <Image style = {styles.roundImage} source = {{uri: item.photo}}/> 
                <Text>{item.username}</Text> 
              </View>
              <Ionicons name= 'ios-flag' size={25} />
            </View>
            <Image style = {styles.postPhoto} source = {{uri: item.postPhoto}}/> 
            {/* below post */}
            <View style = {styles.row}>
              <EvilIcons name= 'like' size={25} />
              <EvilIcons name= 'comment' size={25} />  
              <EvilIcons name= 'share-apple' size={25} />            
            </View>
            <Text>{item.description }</Text> 
          </View>
        )}   
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    post: state.post
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Home);