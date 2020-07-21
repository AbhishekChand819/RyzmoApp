import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from './components/Home';

export default function App() {
  return (
    <NativeRouter>
      <Route path="/" component={Home} />
    </NativeRouter>
  );
}
