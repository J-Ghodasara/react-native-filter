import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import colors from '../../utils/colors';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import Toast from 'react-native-toast-message';

export default class HomeScreen extends Component {
  listener;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showingDate: new Date(),
      isLoading: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  backAction = () => {
    Alert.alert('Exit app?', 'Are you sure you want to exit from the app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Toast
          ref={ref => Toast.setRef(ref)}
          text2Style={styles.toastTextStyle}
          style={styles.toastStyle}
        />
        <Header
          menu
          title="HomeScreen"
          navigation={this.props.navigation}
          iconColor={colors.colorWhite}
          headerBg={colors.colorBlue}
          rightFunction={() => {}}
        />
        {this.state.isLoading ? <Loading /> : null}
        <View style={styles.container}>
          <Text style={styles.text}>This is Home screen</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  toastTextStyle: {
    fontSize: 15,
    fontWeight: '400',
    height: 50,
  },
  toastStyle: {height: 100, overflow: 'scroll'},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 16, color: colors.colorBlack},
});

