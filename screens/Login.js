import React from 'react';
import firebase from 'firebase';
import { Text, View, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
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
        this.props.getUser(user.uid, 'LOGIN')
        if(this.props.user != null){
          this.props.navigation.navigate('Home')
        }
      }
    })
  }

  render () {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={[styles.container, styles.center]}>
        <Text style = {styles.logo}>miChef</Text>
        <TextInput
          style = {styles.border}
          value = {this.props.user.email}
          onChangeText = {(input) => this.props.updateEmail(input)}
          placeholder = 'Email'
          keyboardType = 'email-address'
          autoCapitalize = 'none'
          returnKeyType = 'next'
          onSubmitEditing = {() => this.passwordInput.focus()}
        />
        <TextInput
          style = {styles.border}
          value = {this.props.user.password}
          onChangeText = {(input) => this.props.updatePassword(input)}
          placeholder = 'Password'
          secureTextEntry = {true}
          returnKeyType = 'go'
          ref = {(input) => this.passwordInput = input}
        />
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.login()}>
          <Text style = {styles.bold}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.facebookButton} onPress = {() => this.props.facebookLogin()}>
          <Text style = {[styles.bold, styles.white]}>Facebook Login</Text>
        </TouchableOpacity>

        <Text style = {{marginTop: 20}}>or</Text>

        <TouchableOpacity style = {styles.button} 
        onPress = {() => this.props.navigation.navigate('SignUp')}>
          <Text style = {styles.bold}>Sign Up</Text>
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
