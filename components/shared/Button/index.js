import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { styles } from './styles';

function Button({ text, type, onPress }) {
  return type === 'primary' ? (
    <TouchableHighlight style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryText}>{text}</Text>
    </TouchableHighlight>
  ) : (
      <TouchableHighlight style={styles.secondaryButton} onPress={onPress}>
        <Text style={styles.secondaryText}>{text}</Text>
      </TouchableHighlight>
    );
}

export default Button;
