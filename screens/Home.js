import React from 'react';
import { Text, View, Button } from 'react-native';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { updateEmail, updatePassword } from '../actions/user';
import styles from '../styles';

class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.bio}</Text>
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
export default connect(mapStateToProps)(Home);