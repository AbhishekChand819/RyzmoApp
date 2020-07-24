import React from 'react'
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import Button from '../shared/Button';

function Initial({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Image
          style={styles.banner}
          source={require('../../assets/home-banner.png')}
        />

        <Image
          style={styles.icon}
          source={require('../../assets/home-icon-2.png')}
        />
        <Text style={styles.heading}>Ryzmo</Text>
        <Text style={styles.text}>
          Listen to a huge {'\n'}collection of songs based on {'\n'}your choices
          and taste.
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button type="primary" text="Sign Up" onPress={() => navigation.navigate("Register")} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button type="secondary" text="Login" onPress={() => navigation.navigate("Login")} />
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}

export default Initial;
