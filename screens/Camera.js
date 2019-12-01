import React from 'react';
import styles from '../styles';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import { uploadPhoto } from '../actions/index';
import { updatePhoto } from '../actions/post';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CameraUpload extends React.Component {
    snapPhoto = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        if(status === 'granted'){
            const image = await this.camera.takePictureAsync()
            // console.log(image)
            if(!image.cancelled){
                const resize = await ImageManipulator.manipulateAsync(image.uri, [], {format: ImageManipulator.SaveFormat.JPEG, compress: 0.1})
                // console.log(resize)
                const url = await this.props.dispatch(uploadPhoto(resize))
                this.props.dispatch(updatePhoto(url))
                url ? this.props.navigation.navigate('Post') : null
                console.log(url)
            }
        }
    }

    render () {
        return (
            <Camera style = {{flex: 1}} ref = {ref => {this.camera = ref}} type = {Camera.Constants.Type.back}>
                <SafeAreaView style = {{flex: 1, backgroundColor: 'transparent'}}>
                    <TouchableOpacity style = {{paddingLeft: 30}} onPress = {() => this.props.navigation.goBack()}>
                        <Ionicons color = {'white'} name= 'ios-arrow-back' size={50} />
                    </TouchableOpacity>
                </SafeAreaView>
                <TouchableOpacity style = {styles.cameraButton} onPress = {() => this.snapPhoto()}/>
            </Camera>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ uploadPhoto, updatePhoto }, dispatch)  
}
const mapStateToProps = (state) => {
    return {
        post: state.post
    }
} 
export default connect(mapStateToProps)(CameraUpload);