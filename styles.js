import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    space: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    left: {
      alignItems: 'flex-start',
    },
    right: {
      alignItems: 'flex-end',
    },
    white: {
      color: '#fff',
    },
    gray: {
      color: '#adadad',
    },
    small: {
      fontSize: 10,
    },
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
      margin: 10
    },
    button: {
      marginTop: 20,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
    },
    buttonSmall: {
      marginTop: 10,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 5,
      width: 125,   
    },
    border: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center',
      alignItems: 'center'
    },
    facebookButton: {
      backgroundColor: '#3b5998',
      marginTop: 20,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: '#3b5998',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
    },
    cameraButton: {
      backgroundColor: '#fff',
      width: 80,
      height: 80,
      borderRadius: 40,
      alignSelf: 'center',
      marginBottom: 20
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
      borderRadius: 20,
      margin: 10,
      backgroundColor: '#b2bec3'
    },
    squareLarge: {
      width: width*.33,
      height: 125,
      margin: 1,
      backgroundColor: '#d3d3d3'

    },
    location: {
      color: '#0984e3', 
    },
    icon : {
      margin: 10
    },
    bold : {
      fontWeight: 'bold'
    },
    input: {
      width: width*.90,
      margin: 15,
      padding: 15,
      alignSelf: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 50,
      fontSize: 16,
      marginBottom: 10
    },
    logo: {
      fontSize: 75,
      fontWeight: 'bold',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      margin: 10,
      backgroundColor: '#b2bec3'
    },
});