import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import QueueScreen from './src/screens/QueueScreen';
import NewQueueScreen from './src/screens/NewQueueScreen';
import EditQueueScreen from './src/screens/EditQueueScreen';
import { Provider } from './src/context/QueueContext';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Queue: QueueScreen,
        NewQueue: NewQueueScreen,
        EditQueue: EditQueueScreen
    }, 
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'SignMeUp'
      }
    }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>  
      <App/>
    </Provider>
  );
};

// font for signmeup
// -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;