import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateUserName, updateBio, signup } from '../actions/user';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const keyboardVerticalOffset = 150;

class SignUp extends React.Component {
    signup = () => {
        this.props.signup()
        this.props.navigation.navigate('Home')
    } 
    render () {
        return (
        <View style={styles.container}>
            <Text>SignUp</Text>
            {/* <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}> */}
            <TextInput
                style = {styles.border}
                value = {this.props.user.email}
                onChangeText = {(input) => this.props.updateEmail(input)}
                placeholder = 'Email'
            />
            {/* </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}> */}
            <TextInput
                style = {styles.border}
                value = {this.props.user.password}
                onChangeText = {(input) => this.props.updatePassword(input)}
                placeholder = 'Password'
                secureTextEntry = {true}
            />
            {/* </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}> */}
            <TextInput
                style = {styles.border}
                value = {this.props.user.username}
                onChangeText = {(input) => this.props.updateUserName(input)}
                placeholder = 'Username'
            />
            {/* </KeyboardAvoidingView> */}
            <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}>
              <TextInput
                  style = {styles.border}
                  value = {this.props.user.bio}
                  onChangeText = {(input) => this.props.updateBio(input)}
                  placeholder = 'Bio'
              />
            </KeyboardAvoidingView>

            <TouchableOpacity style = {styles.button} 
            onPress = {() => this.signup() }>
              <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
        );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, updateUserName, updateBio, signup }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
