import React from 'react';
import firebase from 'firebase';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login, getUser, facebookLogin } from '../actions/user';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from './Loading';
import styles from '../styles';

const keyboardVerticalOffset = 100;

class Login extends React.Component {
  
  // check if user is already logged in
  // if so direct them to the 'Home' page
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.getUser(user.uid)
        if(this.props.user ){
          <Loading/>
          this.props.navigation.navigate('Home')
        }
      }
    })
  }

  render () {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style = {styles.border}
          value = {this.props.user.email}
          onChangeText = {(input) => this.props.updateEmail(input)}
          placeholder = 'Email'
          keyboardType = 'email-address'
        />
        <TextInput
          style = {styles.border}
          value = {this.props.user.password}
          onChangeText = {(input) => this.props.updatePassword(input)}
          placeholder = 'Password'
          secureTextEntry = {true}
        />
        <TouchableOpacity style = {styles.loginButton} onPress = {() => this.props.login()}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.facebookButton} onPress = {() => this.props.facebookLogin()}>
          <Text>Facebook Login</Text>
        </TouchableOpacity>

        <Text style = {{marginTop: 20}}>or</Text>

        <TouchableOpacity style = {styles.loginButton} 
        onPress = {() => this.props.navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser, facebookLogin }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
