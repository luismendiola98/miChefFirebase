import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { updateEmail, updatePassword, updateUserName, updateBio, updatePhoto, updateUser, signup } from '../actions/user';
import { uploadPhoto } from '../actions/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class SignUp extends React.Component {

  onPress = () => {
    const {routeName} = this.props.navigation.state
    if(routeName === 'SignUp'){
      this.props.signup()
      this.props.navigation.navigate('Home')
    } else {
      this.props.updateUser()
      this.props.navigation.goBack()
    }
  }

  openLibrary = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(status === 'granted'){
      // console.log(status)
      const image = await ImagePicker.launchImageLibraryAsync()
      // console.log(image)
      if(!image.cancelled){
        const url = await this.props.uploadPhoto(image)
        this.props.updatePhoto(url)
        // console.log(url)
      }
    }
  }

  render () {
    const {routeName} = this.props.navigation.state
      return (
      <KeyboardAvoidingView behavior = 'padding' style={[styles.container, styles.center]}>
          <TouchableOpacity  styles = {styles.center} onPress = {this.openLibrary}>
            <Image style = {styles.profileImage} source = {{uri: this.props.user.photo}}/> 
          </TouchableOpacity>
          <Text style = {styles.bold}>Upload Photo</Text>
          <TextInput
            editable = {routeName === 'SignUp' ? true : false}
            style = {styles.border}
            value = {this.props.user.email}
            onChangeText = {(input) => this.props.updateEmail(input)}
            placeholder = 'Email'
            returnKeyType = 'next'
            autoCapitalize = 'none'
            keyboardType = 'email-address'
            onSubmitEditing = {() => this.passwordInput.focus()}
          />
          <TextInput
            editable = {routeName === 'SignUp' ? true : false}
            style = {styles.border}
            value = {this.props.user.password}
            onChangeText = {(input) => this.props.updatePassword(input)}
            placeholder = 'Password'
            secureTextEntry = {true}
            returnKeyType = 'next'
            onSubmitEditing = {() => this.usernameInput.focus()}
            ref = {(input) => this.passwordInput = input}
          />
          <TextInput
            style = {styles.border}
            value = {this.props.user.username}
            onChangeText = {(input) => this.props.updateUserName(input)}
            autoCapitalize = 'none'
            placeholder = 'Username'
            returnKeyType = 'next'
            onSubmitEditing = {() => this.bioInput.focus()}
            ref = {(input) => this.usernameInput = input}
          />
          <TextInput
            style = {styles.border}
            value = {this.props.user.bio}
            onChangeText = {(input) => this.props.updateBio(input)}
            autoCapitalize = 'none'
            placeholder = 'Bio'
            returnKeyType = 'go'
            ref = {(input) => this.bioInput = input}
          />
          <TouchableOpacity style = {styles.button} onPress = {this.onPress}>
            <Text style = {styles.bold}>Done</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateEmail, updatePassword, updateUserName, updateBio, updatePhoto, uploadPhoto, updateUser, signup}, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
