import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export default function GenreLabel({text}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={require('../../../assets/edm.png')}
      />
      <View style={styles.label}>
        <Text style={styles.labelText}>{text}</Text>
      </View>
    </View>
  );
}
