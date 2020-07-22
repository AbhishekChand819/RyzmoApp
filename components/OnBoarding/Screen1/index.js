import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import GenreLabel from '../../shared/GenreLabel';

function Screen1() {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>What do you music do you like?</Text>
        <View style={styles.container}>
          <GenreLabel text="EDM"></GenreLabel>
          <GenreLabel text="Indie Rock"></GenreLabel>
          <GenreLabel text="EDM"></GenreLabel>
          <GenreLabel text="Indie Rock"></GenreLabel>
          <GenreLabel text="EDM"></GenreLabel>
          <GenreLabel text="Indie Rock"></GenreLabel>
        </View>
      </View>
    </React.Fragment>
  );
}

export default Screen1;
