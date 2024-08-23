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
        <Text style={styles.text}>Inside</Text>
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
          <Text
            style={{
              fontWeight: 600,
              fontSize: 26,
              color: '#000000',
              //   fontFamily: 'Roboto-Regular',
            }}>
            Log In
          </Text>
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
            <Text
              style={{
                fontFamily: 'Roboto-Bolditalic',
                fontWeight: 500,
                fontSize: 16,
                color: '#ffff',
              }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bolditalic',
                fontSize: 12,
                color: '#c4c4c4',
              }}>
              forget password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 13, gap: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Bolditalic',
              fontSize: 24,
              fontWeight: 600,
              color: '#000000',
              alignSelf: 'center',
            }}>
            Or
          </Text>
          <TouchableOpacity style={styles.submitbutton}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}>
              <Image
                style={styles.logo}
                source={require('../assets/icons/google.png')}
              />
              <Text>Log in with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitbutton}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}>
              <Image
                style={styles.logo}
                source={require('../assets/icons/facebook.png')}
              />
              <Text>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontFamily: 'Roboto-Bolditalic',
              fontWeight: 500,
              fontSize: 13,
              color: '#05A845',
            }}>
            Don’t have an account? Sign Up
          </Text>
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
    width: 375,
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
  loginDetails: {
    width: 343,
    height: 203,
    // backgroundColor: 'red',
    marginTop: 20,
    gap: 20,
  },
  input: {
    width: 343,
    height: 43,
    backgroundColor: '#F6FFFA',
    // backgroundColor: 'red',
    borderRadius: 20,
    fontFamily: 'Roboto-Bolditalic',
    paddingLeft: 34,
  },
  button: {
    width: 343,
    height: 43,
    backgroundColor: '#05A845',
    borderRadius: 20,
    fontFamily: 'Roboto-Bolditalic',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitbutton: {
    width: 343,
    height: 43,
    backgroundColor: '#ffff',
    borderRadius: 20,
    fontFamily: 'Roboto-Bolditalic',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#05A845',
  },
  logo: {
    height: 25,
    width: 25,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
