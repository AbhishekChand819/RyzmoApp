import React from 'react';
import { StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './components/Initial';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();

function App() {
  changeNavigationBarColor('#1B0536');
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
