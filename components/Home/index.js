import React from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from './styles';
import Navbar from '../Navbar';

function Home() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <View style={styles.wrapper}></View>
      <Navbar></Navbar>
    </React.Fragment>
  );
}

export default Home;
