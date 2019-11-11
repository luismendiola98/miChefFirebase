import React from 'react';
import { Text, View} from 'react-native';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { add, subtract } from '../actions/index';
// import { updateEmail, updatePassword } from '../actions/user';
import styles from '../styles';

class Upload extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Upload Page {this.props.user.email}</Text>
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
export default connect(mapStateToProps)(Upload);