import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import logo from '../assets/logo.png';
import contact from '../assets/contact.png';
import Button from './shared/Button/index';

const styles = StyleSheet.create({
  tinyLogo: {},
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    backgroundColor: '#1B0536',
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.tinyLogo} source={logo} />
        <Text
          style={{
            width: 193,
            height: 25,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 28,
            lineHeight: 25,
            textAlign: 'center',
            color: '#FFFFFF',
          }}>
          Welcome back,
        </Text>
        <Text
          style={{
            width: 193,
            height: 25,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 20,
            lineHeight: 25,
            textAlign: 'center',
            color: '#EE008F',
          }}>
          Sign in to continue
        </Text>
        <Image
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 64,
            top: 360,
          }}
          source={contact}></Image>
        {/* <Image
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 64,
            top: 435,
          }}
          source={contact}></Image> */}
        <TextInput
          style={{
            width: '83%',
            height: 59,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            borderWidth: 2.5,
            borderColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 15,
            lineHeight: 18,
            paddingLeft: 60,
            color: '#FFFFFF',
          }}
          placeholder="Username or email"
          placeholderTextColor="#C4C4C4"></TextInput>

        <TextInput
          secureTextEntry={true}
          style={{
            width: '83%',
            height: 59,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            borderWidth: 2.5,
            borderColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 15,
            lineHeight: 18,
            paddingLeft: 60,
            color: '#FFFFFF',
          }}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"></TextInput>
        {/* <Button text="Sign In" type="secondary"></Button>  */}
        {/* <View
          style={{
            position: 'absolute',
            height: 18,
            left: 115,
            top: 565,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 18,
            flexDirection: 'row',
          }}>
          <Text style={{color: '#FFFFFF'}}>
            Don’t have an account?
            <Text style={{color: '#EE008F'}}> Sign Up</Text>
          </Text>
        </View> */}
        {/* <View
          style={{
            position: 'absolute',
            width: '70%',
            height: 42,
            left: 65,
            top: 768,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 13,
            lineHeight: 25,
          }}>
          <Text style={{color: '#D3D3D3', textAlign: 'center'}}>
            By clicking Sign In, you agree to our{' '}
            <Text style={{color: '#EE008F', textDecorationLine: 'underline'}}>
              Terms
            </Text>{' '}
            and that you have read our{' '}
            <Text style={{color: '#EE008F', textDecorationLine: 'underline'}}>
              Data Use policy
            </Text>
          </Text>
        </View> */}
      </View>
    );
  }
}
