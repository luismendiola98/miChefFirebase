import React from 'react';
import { Text, View, FlatList, ActivityIndicator, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUser } from '../actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import db from '../config/db';
import styles from '../styles';
import moment from 'moment';
import _ from 'lodash';

class Activity extends React.Component {
  state = {
    activity: []
  }
  
  componentDidMount = () => {
    this.getActivity()
  }

  getActivity = async () => {
    let activity = []
    const query = await db.collection('activity').where('uid', '==', this.props.user.uid).get()
    query.forEach((response) => {
      activity.push(response.data())
    })
		this.setState({activity: _.orderBy(activity, 'date','desc')})
  }

  goToUser = (user) => {
    console.log(user)
    if(user.type === 'LIKE') {
      this.props.getUser(user.likerId, 'GET_PROFILE')
      this.props.navigation.navigate('Profile')
    } else {
      this.props.getUser(user.commenterId, 'GET_PROFILE')
      this.props.navigation.navigate('Profile')
    }
  }

  renderList = (item) => {
    switch(item.type) {
      case 'LIKE':
        return (         
          <View style={[styles.row, styles.space]}>
            <TouchableOpacity style={[styles.row, styles.space]} onPress = {() => this.goToUser(item)}>
              <Image style={styles.roundImage} source={{uri: item.likerPhoto}}/>
            </TouchableOpacity>
            <View style={[styles.container, styles.left]}>
              <Text style={styles.bold}>{item.likerName}</Text>
              <Text style={styles.gray}>Liked Your Photo</Text>
              <Text style={[styles.gray, styles.small]}>{moment(item.date).format('ll')}</Text>
            </View>
            <Image style={styles.roundImage} source={{uri: item.postPhoto}}/>
          </View>
        )
      case 'COMMENT':
        return (         
          <View style={[styles.row, styles.space]}>
            <TouchableOpacity style={[styles.row, styles.space]} onPress = {() => this.goToUser(item)}>
              <Image style={styles.roundImage} source={{uri: item.commenterPhoto}}/>
            </TouchableOpacity>            
            <View style={[styles.container, styles.left]}>
              <Text style={styles.bold}>{item.commenterName}</Text>
              <Text style={styles.gray}>{item.comment}</Text>
              <Text style={[styles.gray, styles.small]}>{moment(item.date).format('ll')}</Text>
            </View>
            <Image style={styles.roundImage} source={{uri: item.postPhoto}}/>
          </View>
        )
      default: null
    }
  }


  render () {
    if(this.state.activity.length <= 0) return <ActivityIndicator style = {styles.container}/>
    return (
      <View style={styles.container}>
        <FlatList
          onRefresh = {() => this.getActivity()}
          refreshing = {false}
          data = {this.state.activity}
          keyExtractor = {(item) => JSON.stringify(item.date)}
          renderItem = {({item}) => this.renderList(item)}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
