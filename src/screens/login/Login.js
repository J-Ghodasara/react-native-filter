import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import colors from '../../utils/colors.js';
import PasswordVisible from '../../assets/signIn/passwordVisible.png';
import PasswordHidden from '../../assets/signIn/passwordHidden.png';
import Toast from 'react-native-toast-message';
import ScreenList from '../../utils/ScreenList.js';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordVisible: false,
      isLoading: false,
    };
  }

  login() {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var isValid = false;
    if (mailformat.test(this.state.email)) {
      isValid = true;
    } else {
      isValid = false;
    }
    if (this.state.email === '') {
      Toast.show({
        type: 'error',
        text2: 'Please enter email id',
        position: 'bottom',
        autoHide: true,
        visibilityTime: 3000,
      });
    } else if (!isValid) {
      Toast.show({
        type: 'error',
        text2: 'Please enter a valid email id',
        position: 'bottom',
        autoHide: true,
        visibilityTime: 3000,
      });
    } else if (this.state.password === '') {
      Toast.show({
        type: 'error',
        text2: 'Please enter password',
        position: 'bottom',
        autoHide: true,
        visibilityTime: 3000,
      });
    } else {
      this.props.navigation.navigate(ScreenList.HOME_STACK);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.backgroundStyle}
          contentContainerStyle={styles.scrollViewContentContainer}>
          <Text style={styles.signInText}>Sign In</Text>
          <View style={styles.form}>
            <View style={styles.emailSection}>
              <TextInput
                value={this.state.email}
                style={[styles.input]}
                onChangeText={val => {
                  this.setState({email: val});
                }}
                keyboardType="email-address"
                placeholder={'Enter email'}
                autoCapitalize="none"
                placeholderTextColor={colors.colorLightGray}
              />
            </View>
            <View style={[styles.emailSection, {marginTop: 30}]}>
              <TextInput
                value={this.state.password}
                secureTextEntry={this.state.passwordVisible ? false : true}
                style={[styles.passwordInput]}
                onChangeText={val => {
                  this.setState({password: val});
                }}
                keyboardType="default"
                placeholder={'Enter password'}
                autoCapitalize="none"
                placeholderTextColor={colors.colorLightGray}
              />
              {this.state.passwordVisible ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      passwordVisible: !this.state.passwordVisible,
                    });
                  }}
                  style={styles.fishEye}>
                  <Image
                    source={PasswordVisible}
                    style={{width: 24, height: 16}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      passwordVisible: !this.state.passwordVisible,
                    });
                  }}
                  style={styles.fishEye}>
                  <Image
                    source={PasswordHidden}
                    style={{width: 24, height: 17}}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text onPress={() => {}} style={styles.forgotPassword}>
              Forgot password?
            </Text>
            <TouchableOpacity onPress={() => this.login()}>
              <View style={styles.tmBtnYes}>
                <Text style={styles.tmSubmit}>Log In</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.dontHaveAccountText}>
              Don't have an account?
              <Text onPress={() => {}} style={styles.signUpText}>
                {' '}
                Sign up
              </Text>
            </Text>
          </View>
          {this.state.isLoading && (
            <ActivityIndicator
              size="large"
              color="#000"
              style={{marginTop: 20}}
            />
          )}
        </ScrollView>
        <Toast
          ref={ref => Toast.setRef(ref)}
          text2Style={{
            fontSize: 15,
            fontWeight: '400',
            height: 50,
          }}
          style={{height: 100, overflow: 'scroll'}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: Dimensions.get('screen').height < 700 ? 15 : 15,
    height: 60,
    width: '100%',
    paddingStart: 10,
    color: colors.colorBlack,
  },
  passwordInput: {
    fontSize: Dimensions.get('screen').height < 700 ? 15 : 15,
    height: 60,
    width: '100%',
    paddingStart: 10,
    paddingEnd: 40,
    color: colors.colorBlack,
  },
  linkButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navButtons: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#4D4D4D',
    marginTop: 15,
  },
  tmBtnYes: {
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.colorBlue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  tmSubmit: {
    fontSize: 15,
    color: colors.colorWhite,
  },
  emailSection: {
    width: '70%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.colorLightGray,
    padding: 15,
  },
  form: {
    marginTop: Dimensions.get('screen').height < 700 ? 40 : 80,
  },
  scrollViewContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signInText: {
    color: colors.colorBlack,
    fontSize: 30,
    fontWeight: '600',
  },
  passwordIcon: {
    position: 'absolute',
    right: 15,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    color: colors.colorGrey3,
    fontSize: 15,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  dontHaveAccountText: {
    fontSize: 15,
    color: colors.colorBlack,
    alignSelf: 'center',
    marginTop: 80,
  },
  signUpText: {
    color: colors.colorBlack,
    fontSize: 15,
  },
  backgroundStyle: {
    backgroundColor: colors.colorWhite,
    flex: 1,
  },
  fishEye: {
    position: 'absolute',
    right: 15,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
