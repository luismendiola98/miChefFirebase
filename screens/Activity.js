import React from 'react';
import { Text, View} from 'react-native';
// import { bindActionCreators } from 'redux';
// import { updateEmail, updatePassword } from '../actions/user';
import { connect } from 'react-redux';
//import { add, subtract } from '../actions/index';
import styles from '../styles';

class Activity extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Activity Page</Text> 
        <Text> {this.props.user.email} </Text>
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
export default connect(mapStateToProps)(Activity);
