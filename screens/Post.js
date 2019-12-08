import React from 'react';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Text, TextInput, Image, KeyboardAvoidingView, Modal, SafeAreaView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { updateRecipeName, updateDescription, updateLocation, updatePhoto, sharePost } from '../actions/post';
import { uploadPhoto } from '../actions/index';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import ENV from '../env';
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

class Post extends React.Component {
  state = {
    showModal : false,
    locations : []
  }

  componentDidMount(){
    this.getLocations()
  }

  post = () => {
    this.props.sharePost()
    this.props.navigation.navigate('Home')
  }

  onWillFocus = () => {
    // console.log('focusing')
    if(!this.props.post.photo) {
      // console.log('no photo')
      this.openLibrary()
    }
  }

  openLibrary = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(status === 'granted'){
      const image = await ImagePicker.launchImageLibraryAsync()
      if(!image.cancelled){
        const url = await this.props.uploadPhoto(image)
        this.props.updatePhoto(url)
        // console.log(url)
      }
    }
  }
  
  setLocation = (location) => {
    const place = {
      name: location.name,
      coords: {
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
      } 
    }
    this.setState({showModal: false})
    this.props.updateLocation(place)
  }

  getLocations = async () => {
    // this.setState({showModal:true})
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    if(permission.status === 'granted'){
      const location = await Location.getCurrentPositionAsync()
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=${ENV.googleApiKey}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({locations: data.results})
    }
  }

  render () {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={[styles.container, styles.center]}>
        <NavigationEvents onWillFocus = {this.onWillFocus}/>
        <Modal animationType = 'slide' transparent = {false} visible = {this.state.showModal}>
          <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress = {() => this.setState({showModal:false})}>
            <Ionicons style = {[styles.icon, styles.left]} name= 'ios-arrow-back' size={25} />
          </TouchableOpacity>
            <FlatList style = {styles.center}
              keyExtractor = {(item) => item.id}
              data = {this.state.locations}
              renderItem = {({item}) => (
              <TouchableOpacity style = {styles.border} onPress = {() => this.setLocation(item)}>
                <Text>{item.name}</Text>
                <Text>{item.vicinity}</Text>
              </TouchableOpacity>
              )}/>
          </SafeAreaView>
        </Modal>
        <Image style = {styles.postPhoto} source = {{uri: this.props.post.photo}}/>
        <TextInput
          style = {styles.border}
          value = {this.props.post.recipeName }
          onChangeText = {(text) => this.props.updateRecipeName(text)}
          placeholder = 'Recipe Name'/>
        <TextInput
          style = {styles.border}
          value = {this.props.post.description }
          onChangeText = {(text) => this.props.updateDescription(text)}
          placeholder = 'Steps'/>
        {
          this.state.locations.length > 0 ?        
          <TouchableOpacity style={styles.border} onPress={() => this.setState({showModal:true})}>
            <Text style = {styles.gray}>{this.props.post.location ? this.props.post.location.name : 'Add a Location'}</Text>
          </TouchableOpacity> : null
        }
        <TouchableOpacity style = {styles.button} onPress = {this.post}>
          <Text>Post</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateRecipeName, updateDescription, updateLocation, updatePhoto, uploadPhoto, sharePost }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user  
  }
} 
export default connect(mapStateToProps, mapDispatchToProps )(Post);