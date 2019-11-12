import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post';
import styles from '../styles';

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render () {
    if(this.props.post === null) return null
    return (
      <View style={styles.container}>
        <Image style = {styles.postPhoto} source = {{uri: this.props.post.feed[0].postPhoto}}/> 
        <Text>{this.props.post.feed[0].description }</Text> 
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    post: state.post
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Home);