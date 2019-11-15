import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { updateDescription, sharePost } from '../actions/post';
import styles from '../styles';

class Post extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Post Page </Text>
        <Image style = {styles.postPhoto} source = {{uri: 
          'https://firebasestorage.googleapis.com/v0/b/michef-57ce4.appspot.com/o/24E25059-1FAC-4A97-9B77-9755F0E99C93.jpeg?alt=media&token=48411799-c11f-4085-954c-b6f4560e913f'}} />
        <TextInput
          style = {styles.border}
          value = {this.props.post.description }
          onChangeText = {(text) => this.props.updateDescription(text)}
          placeholder = 'Description'
        />
        <TouchableOpacity style = {styles.loginButton} onPress = {this.props.sharePost}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, sharePost }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user  
  }
} 
export default connect(mapStateToProps, mapDispatchToProps )(Post);