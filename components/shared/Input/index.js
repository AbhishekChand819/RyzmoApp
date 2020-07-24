import React from 'react'
import { TextInput, Image, View } from 'react-native';

import { styles } from './styles';

function Input({ placeholder, icon }) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.icon}
        source={icon}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#C4C4C4"
      />
    </View>
  )
}

export default Input;
