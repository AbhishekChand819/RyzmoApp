import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import Button from '../shared/Button'
import Input from '../shared/Input'
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import lock from '../../assets/lock.png';
import { styles } from './styles'

function Login({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.view1}>
        <Image style={styles.tinyLogo} source={logo} />
        <Text style={styles.text1}>Welcome back,</Text>
        <Text style={styles.text2}>Sign in to continue</Text>
      </View>

      <View style={styles.view2}>
        <Input placeholder="Email Address" icon={contact} />
        <Input placeholder="Password" icon={lock} type="secure" />
        <Button type="primary" text="Sign In" />
        <View style={styles.view3}>
          <Text style={styles.text3}>
            Don’t have an account?
            <TouchableHighlight onPress={() => navigation.navigate("Register")}>
              <Text style={styles.text5}>{"   "}Sign Up</Text>
            </TouchableHighlight>
          </Text>
        </View>
      </View>

      <Text style={styles.view4}>
        By clicking Sign In, you agree to our
        <Text style={styles.text4}> Terms</Text> and that you have read our
        <Text style={styles.text4}> Data Use policy</Text>
      </Text>
    </View >
  );
}

export default Login;
