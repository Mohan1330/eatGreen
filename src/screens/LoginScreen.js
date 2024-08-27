import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const image = require('../assets/images/bgImage.jpeg');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#05A845" barStyle="light-content" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View
            style={{
              backgroundColor: '#ffff',
              width: 59.48,
              height: 86,
            }}></View>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.login}>
          <Text style={styles.loginText}>Log In</Text>
        </View>
        <View style={styles.loginDetails}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={'#C4C4C4'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={'#C4C4C4'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('hello')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text style={styles.forgetPasswordText}>forget password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
          <TouchableOpacity style={styles.submitbutton}>
            <View style={styles.buttonContent}>
              <Image
                style={styles.logo}
                source={require('../assets/icons/google.png')}
              />
              <Text>Log in with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitbutton}>
            <View style={styles.buttonContent}>
              <Image
                style={styles.logo}
                source={require('../assets/icons/facebook.png')}
              />
              <Text>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.signupText}>Don’t have an account? Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#05A845',
    height: 215,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: 30,
    alignItems: 'center',
  },
  login: {
    width: 73,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: '600',
    fontSize: 26,
    color: '#000000',
    // fontFamily: 'Roboto-Regular',
  },
  loginDetails: {
    width: 343,
    height: 203,
    marginTop: 20,
    gap: 20,
  },
  input: {
    width: 343,
    height: 43,
    backgroundColor: '#F6FFFA',
    borderRadius: 20,
    fontFamily: 'Roboto-Bolditalic',
    paddingLeft: 34,
  },
  button: {
    width: 343,
    height: 43,
    backgroundColor: '#05A845',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Bolditalic',
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
  forgetPasswordText: {
    fontFamily: 'Roboto-Bolditalic',
    fontSize: 12,
    color: '#c4c4c4',
  },
  orContainer: {
    marginTop: 13,
    gap: 10,
  },
  orText: {
    fontFamily: 'Roboto-Bolditalic',
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    alignSelf: 'center',
  },
  submitbutton: {
    width: 343,
    height: 43,
    backgroundColor: '#ffff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#05A845',
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  logo: {
    height: 25,
    width: 25,
  },
  signupText: {
    fontFamily: 'Roboto-Bolditalic',
    fontWeight: '500',
    fontSize: 13,
    color: '#05A845',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Shadow with opacity
  },
});
