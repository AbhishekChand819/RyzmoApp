import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Home from './components/Home';
import Screen2 from './components/OnBoarding/Screen2';

export default function App() {
  changeNavigationBarColor('#1B0536');
  return (
    <NativeRouter>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={Screen2} />
    </NativeRouter>
  );
}
