import React from 'react';
import firebase from 'firebase';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { add, subtract } from '../actions/index';
// import { updateEmail, updatePassword } from '../actions/user';
import styles from '../styles';

class Profile extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.bio}</Text>
        <Button title = 'Logout' onPress = {() => firebase.auth().signOut()}/>
      </View>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ updateEmail, updatePassword }, dispatch)  
// }
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps)(Profile);
