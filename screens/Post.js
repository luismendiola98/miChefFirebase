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
          'https://firebasestorage.googleapis.com/v0/b/michef-57ce4.appspot.com/o/IMG_3254.jpg?alt=media&token=050f6046-4632-42a4-b46b-6bb2272adea5'}} />
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