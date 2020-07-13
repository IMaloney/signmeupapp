import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import QueueScreen from './src/screens/QueueScreen';
import NewQueueScreen from './src/screens/NewQueueScreen';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Queue: QueueScreen,
        NewQueue: NewQueueScreen
    }, 
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'SignMeUp'
      }
    }
);

export default createAppContainer(navigator);

// font for signmeup
// -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;