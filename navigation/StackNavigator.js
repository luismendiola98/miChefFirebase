import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import PostScreen from '../screens/Post';
import ActivityScreen from '../screens/Activity';
import ProfileScreen from '../screens/Profile';
import CameraScreen from '../screens/Camera';
import MapScreen from '../screens/Map';
import EditScreen from '../screens/SignUp';
import CommentScreen from '../screens/Comment';
import ChatScreen from '../screens/Chat';
import MessagesScreen from '../screens/Messages';
import styles from '../styles';

export const HomeNavigator = createAppContainer(createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'miChef',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.navigate('Camera')}>
                        <Ionicons style= {{marginLeft: 10}} name= 'ios-camera' size={30} />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity onPress = {() => navigation.navigate('Messages')}>
                        <Ionicons style= {{marginRight: 10}} name= 'ios-send' size={30} />
                    </TouchableOpacity>
                )
            })
        },
        Map: {
            screen: MapScreen,
            navigationOptions : ({navigation}) => ({
                title: 'Map View',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                header: null
            }
        },
        Comment: {
            screen: CommentScreen,
            navigationOptions : ({navigation}) => ({
                title: 'Comments',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        MyProfile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'My Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        Messages: {
            screen: MessagesScreen,
            navigationOptions: ({ navigation }) => ({
              title: 'Messages',
              headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                  <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
                </TouchableOpacity>
              )
            })
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Chat',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
    }
));
HomeNavigator.navigationOptions = ({navigation}) => {
    let tabBarVisible = true
    if(navigation.state.routes.some(route => route.routeName === 'Camera')) {
        tabBarVisible = false
    }
    if(navigation.state.routes.some(route => route.routeName === 'Map')) {
        tabBarVisible = false
    }
    if(navigation.state.routes.some(route => route.routeName === 'Comment')) {
        tabBarVisible = false
    }
    return {
        tabBarVisible
    }
}
export const SearchNavigator = createAppContainer(createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                header: null
            }
        },

        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        MyProfile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'My Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
    }
));
export const PostNavigator = createAppContainer(createStackNavigator(
    {
        Post: {
            screen: PostScreen,
            navigationOptions: {
                title: 'Post'
            }
        },

    }
));
export const ActivityNavigator = createAppContainer(createStackNavigator(
    {
        Activity: {
            screen: ActivityScreen,
            navigationOptions: {
                title: 'Activity'
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },
        MyProfile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                title: 'My Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        },

    }
));
export const ProfileNavigator = createAppContainer(createStackNavigator(
    {
        MyProfile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'My Profile'
            }
        },
        Edit: {
            screen: EditScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Edit Profile',
                headerLeft: (
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons style = {styles.icon} name= 'ios-arrow-back' size={25} />
                    </TouchableOpacity>
                )
            })
        }

    }
));