import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1B0536',
    height: '100%'
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 28,
    lineHeight: 34,
    color: '#FFFFFF',
    marginBottom: 15
  },
  text: {
    fontFamily: 'Montserrat-Light',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: '#D3D3D3',
    marginBottom: 0
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 50,
    width: '100%'
  },
  icon: {
    marginBottom: 20
  }
});