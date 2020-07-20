import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Login from './components/Login';
import Signup from './screens/SignUp';

export default function App() {
  return (
    <NativeRouter>
      <Route path="/" component={Login} />
    </NativeRouter>
  );
}
