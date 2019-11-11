import React from 'react';
import firebase from 'firebase';
import { Text, View, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login, getUser } from '../actions/user';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles';
class Login extends React.Component {
  // check if user is already logged in
  // if so direct them to the 'Home' page
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.getUser(user.uid)
        if(this.props.user ){
          this.props.navigation.navigate('Home')
        }
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style = {styles.border}
          value = {this.props.user.email}
          onChangeText = {(input) => this.props.updateEmail(input)}
          placeholder = 'Email'
        />
        <TextInput
          style = {styles.border}
          value = {this.props.user.password}
          onChangeText = {(input) => this.props.updatePassword(input)}
          placeholder = 'Password'
          secureTextEntry = {true}
        />
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style = {{marginTop: 20}}>OR</Text>
        <TouchableOpacity style = {styles.button} 
        onPress = {() => this.props.navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
