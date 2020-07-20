import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import {styles} from './styles';

function Button({text, type}) {
  return type === 'primary' ? (
    <TouchableHighlight style={styles.primaryButton}>
      <Text style={styles.primaryText}>{text}</Text>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight style={styles.secondaryButton}>
      <Text style={styles.secondaryText}>{text}</Text>
    </TouchableHighlight>
  );
}

export default Button;
