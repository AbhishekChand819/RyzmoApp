import React from 'react'
import { View, Text } from 'react-native';

import { styles } from './styles';

function Home() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Welcome to Ryzmo</Text>
      <Text style={styles.text}>This home component will show first 3 screens designed on figma</Text>
    </View>
  )
}

export default Home;
