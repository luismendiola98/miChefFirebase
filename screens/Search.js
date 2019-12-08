import React from 'react';
import styles from '../styles';
import db from '../config/db';
import { Text, View, TextInput, SafeAreaView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/user';

class Search extends React.Component {
	state = {
		search: '',
		query: []
	}

	searchPost = async () => {
  	let search = []
    const postQuery = await db.collection('posts').where('recipeName', '>=', this.state.search).get()
    postQuery.forEach((response) => {
      search.push(response.data())
    })
    const userQuery = await db.collection('users').where('username', '>=', this.state.search).get()
    userQuery.forEach((response) => {
      search.push(response.data())
    })
    this.setState({query: search})
    console.log(query)
	}


  goToUser = (user) => {
    if(user.uid !== this.props.user.uid) {
      this.props.getUser(user.uid, 'GET_PROFILE')
      this.props.navigation.navigate('Profile')
    } else {
      this.props.navigation.navigate('MyProfile')
    }
    
  }

  renderList = (item) => {
    // console.log(item)
    switch(item.type) {
      case 'USER':
        return (         
          <TouchableOpacity style={[styles.row, styles.space]} onPress = {() => this.goToUser(item)}>
            <Image style={styles.roundImage} source={{uri: item.photo}}/>
            <View style={[styles.container, styles.left]}>
              <Text style={styles.bold}>{item.username}</Text>
            </View>
         </TouchableOpacity>
        )
      case 'POST':
        return (         
          <TouchableOpacity onPress={() => this.goToUser(item)} style={[styles.row, styles.space]}>
            <Image style={styles.roundImage} source={{uri: item.photo}}/>
            <View style={[styles.container, styles.left]}>
              <Text style={styles.bold}>{item.username}</Text>
              <Text style={styles.gray}>{item.recipeName}</Text>
            </View>
            <Image style={styles.roundImage} source={{uri: item.postPhoto}}/>
          </TouchableOpacity>
        )
      default: null
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
	      <TextInput
	        style={styles.input}
	        onChangeText={(search) => this.setState({search})}
	        value={this.state.search}
	        returnKeyType='send'
          placeholder='Search'
          onSubmitEditing={this.searchPost}/>
				<FlatList
				  data={this.state.query}
				  keyExtractor={(item) => JSON.stringify(item.uid)}
				  renderItem={({ item }) => this.renderList(item)} />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Search);