import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
// import Loading from '../screens/Loading';


const AuthNavigator = createStackNavigator({
    // Loading: Loading,
    Login: { 
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Signup',
            headerLeft: (
                <TouchableOpacity onPress = {() => navigation.goBack()}>
                    <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                </TouchableOpacity>
            )
        })
    },
});

export default createAppContainer(AuthNavigator);