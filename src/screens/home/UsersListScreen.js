import React, {Component} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {getUsers} from '../../api/ApiMethods';
import {GET_USERS} from '../../api/constants';
import Selection from '../../components/Selection';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import colors from '../../utils/colors';
import Modal from 'react-native-modal';
import ListOfUser from './ListOfUser';

export class UsersListScreen extends Component {
  listener;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mainData: [],
      showingDate: new Date(),
      isLoading: false,
      location: '',
      speciality: '',
      filterModalVisible: false,
      specialityArray: [],
      locationArray: [],
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    this.getUsers();
  }

  getUsers() {
    getUsers(`${GET_USERS}`).then(res => {
      console.log('USERS', res);
      let locationArray = [];
      let specialityArray = [];
      res.users.map(item => {
        if (!specialityArray.includes(item.specialty)) {
          specialityArray.push(item.specialty);
        }
        if (!locationArray.includes(item.location)) {
          locationArray.push(item.location);
        }
      });
      this.setState({
        data: res.users,
        mainData: res.users,
        specialityArray: specialityArray,
        locationArray: locationArray,
      });
    });
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

  filterApplied() {
    let filteredArray = this.state.mainData.filter(item => {
      return this.state.speciality !== '' && this.state.location !== ''
        ? item.specialty === this.state.speciality &&
            item.location === this.state.location
        : this.state.speciality !== ''
        ? item.specialty === this.state.speciality
        : this.state.location !== ''
        ? item.location === this.state.location
        : null;
    });

    this.setState({data: filteredArray});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          style={{
            justifyContent: 'flex-end',
            margin: 0,
            height: Dimensions.get('window').height / 2,
          }}
          propagateSwipe={true}
          backdropOpacity={0.4}
          onBackdropPress={() => this.setState({filterModalVisible: false})}
          animationInTiming={400}
          isVisible={this.state.filterModalVisible}
          onBackButtonPress={() => {
            this.setState({filterModalVisible: false});
          }}
          onModalHide={() => {
            this.setState({filterModalVisible: false});
          }}>
          <View style={styles.modalParentView}>
            <ScrollView scrollEnabled={true} style={{padding: 20}}>
              <View style={styles.modalSubView}>
                <Image
                  source={require('../../assets/holder.png')}
                  style={{width: 48, height: 4}}
                />
              </View>
              <Text allowFontScaling={false} style={styles.locationText}>
                Location
              </Text>

              <Selection
                placeholder={'- Select location -'}
                values={this.state.locationArray}
                isEditable={true}
                containerHeight={250}
                fontSize={14}
                genderToShow={this.state.location}
                selectedGender={location => {
                  console.log('SELECTED location', location);
                  this.setState({location: location});
                }}
              />

              <Text allowFontScaling={false} style={[styles.locationText]}>
                Speciality
              </Text>

              <Selection
                placeholder={'- Select speciality -'}
                values={this.state.specialityArray}
                isEditable={true}
                fontSize={14}
                containerHeight={250}
                genderToShow={this.state.speciality}
                selectedGender={speciality => {
                  console.log('SELECTED GENDER', speciality);
                  this.setState({speciality: speciality});
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  this.setState({filterModalVisible: false});
                  if (
                    this.state.speciality !== '' ||
                    this.state.location !== ''
                  ) {
                    this.filterApplied();
                  }
                }}
                style={styles.applyFilter}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
        <Toast
          ref={ref => Toast.setRef(ref)}
          text2Style={styles.toastTextStyle}
          style={styles.toastStyle}
        />
        <Header
          menu
          title="Users List"
          navigation={this.props.navigation}
          iconColor={colors.colorWhite}
          headerBg={colors.colorBlue}
          right="filter"
          rightFunction={() => {
            this.setState({filterModalVisible: true});
          }}
        />
        {this.state.isLoading ? <Loading /> : null}
        {this.state.data.length > 0 ? (
          <FlatList
            scrollEnabled={true}
            style={{height: Dimensions.get('screen').height - 120}}
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({item, index}) => <ListOfUser data={item} />}
          />
        ) : (
          <View style={styles.noDataView}>
            <Text style={styles.noDataText}>No data available</Text>
          </View>
        )}
      </View>
    );
  }
}

export default UsersListScreen;

let styles = StyleSheet.create({
  modalParentView: {
    backgroundColor: colors.colorWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  modalSubView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: colors.colorBlack,
    fontSize: 16,
    marginTop: 20,
  },
  applyFilter: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.colorBlue,
    alignSelf: 'center',
    marginTop: 30,
  },
  applyText: {fontSize: 14, color: colors.colorWhite},
  toastTextStyle: {
    fontSize: 15,
    fontWeight: '400',
    height: 50,
  },
  toastStyle: {height: 100, overflow: 'scroll'},
  noDataView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  noDataText: {fontSize: 14, color: colors.colorGray},
});
