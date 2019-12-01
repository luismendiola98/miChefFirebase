import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      borderColor: 'grey',
      borderWidth: 1,
    },
    loginButton: {
      marginTop: 20,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
    },
    border: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: 'grey',
      borderBottomWidth: 1,
      textAlign: 'center',
      alignItems: 'center'
    },
    facebookButton: {
      backgroundColor: '#3b5998',
      color: '#ffffff',
      marginTop: 20,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: '#3b5998',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
    },
    cameraButton: {
      backgroundColor: '#ffffff',
      width: 80,
      height: 80,
      borderRadius: 40,
      alignSelf: 'center',
      marginBottom: 20
    },
    profileImage: {
      width: 50,
      height: 50,
      resizeMode: 'scale'
    },
    loading: {


    },
    postPhoto: {
      width: width,
      height: 250,

    },
    roundImage: {
      width: 40,
      height: 40,
      borderRadius: 20
    }
});