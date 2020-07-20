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
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';

const styles = StyleSheet.create({
  tinyLogo: {
    position: 'absolute',
    width: 81,
    height: 81,
    left: 38,
    top: 70,
  },
  background: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#1B0536',
    flexDirection: 'row',
  },
});

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.tinyLogo} source={logo}></Image>
        <Text
          style={{
            position: 'absolute',
            width: 193,
            height: 25,
            left: 38,
            top: 178,
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
            position: 'absolute',
            width: 193,
            height: 25,
            left: 28,
            top: 207,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 20,
            lineHeight: 25,
            textAlign: 'center',
            color: '#EE008F',
          }}>
          Sign up to continue
        </Text>
        <Image
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 64,
            top: 295,
          }}
          source={contact}></Image>
        <Image
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 64,
            top: 369,
          }}
          source={mail}></Image>
        <Image
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            left: 64,
            top: 443,
          }}
          source={lock}></Image>
        <TextInput
          style={{
            width: '83%',
            height: 59,
            left: 38,
            top: 275,
            position: 'absolute',
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
          placeholder="Username"
          placeholderTextColor="#C4C4C4"></TextInput>
        <TextInput
          style={{
            width: '83%',
            height: 59,
            left: 38,
            top: 350,
            position: 'absolute',
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
          placeholder="Email Address"
          placeholderTextColor="#C4C4C4"></TextInput>
        <TextInput
          secureTextEntry={true}
          style={{
            width: '83%',
            height: 59,
            left: 38,
            top: 425,
            position: 'absolute',
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
        <TouchableHighlight
          style={{
            position: 'absolute',
            width: '83%',
            height: 59,
            left: 38,
            top: 500,
            backgroundColor: '#EE008F',
            borderRadius: 50,
          }}>
          <Text
            style={{
              position: 'absolute',
              width: 74.99,
              height: 24,
              left: 150,
              top: 16,
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 20,
              lineHeight: 24,
              color: '#FFFFFF',
            }}>
            Sign Up
          </Text>
        </TouchableHighlight>
        <View
          style={{
            position: 'absolute',
            height: 18,
            left: 115,
            top: 570,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 18,
          }}>
          <Text style={{color: '#FFFFFF'}}>
            Already have an account?
            <Text style={{color: '#EE008F'}}> Sign In</Text>
          </Text>
        </View>
        <View
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
        </View>
      </View>
    );
  }
}
