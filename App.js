import * as React from 'react';
import {Platform, StatusBar} from 'react-native';
import {store} from './store/store';
import {Provider} from 'react-redux'
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginScreen from "./screens/Login/LoginScreen";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontIsLoaded: false
    };
  }

  async componentDidMount(): void {
    await Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    });

    this.setState({fontIsLoaded: true});
  }

  render() {
    if (!this.state.fontIsLoaded) {
      return null;
    } else {
      return (
          <Provider store={store}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerLeft: null}}>
                <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Connexion'}}/>
                <Stack.Screen name="Home" component={BottomTabNavigator}/>
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
      );
    }
  }
}

export default App;
