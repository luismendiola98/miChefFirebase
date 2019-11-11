import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
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
        screen: SignUp
    },
});

export default createAppContainer(AuthNavigator);