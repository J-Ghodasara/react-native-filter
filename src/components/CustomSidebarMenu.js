import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScreenList from "../utils/ScreenList";
import Toast from "react-native-toast-message";
const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        text2Style={{
          fontSize: 15,
          fontWeight: "400",
          height: 50,
        }}
        style={{ height: 100, overflow: "scroll" }}
      />
      {/*Top Large Image */}
      <Image
        source={require("../assets/profile.png")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenList.HOME_SCREEN);
          }}
          style={styles.customItem}
        >
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.colorLightGray,
              marginBottom: 10,
              marginTop: 50,
            }}
          />
          <Text style={{ paddingHorizontal: 16, color: colors.colorBlack }}>
            My Roster
          </Text>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.colorLightGray,
              marginTop: 15,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenList.UNAVAILABILITY_STACK);
          }}
          style={styles.customItem}
        >
         
          <Text style={{ paddingHorizontal: 16, color: colors.colorBlack,marginTop:10 }}>
            Submit Unavailability / Leave
          </Text>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.colorLightGray,
              marginTop: 15,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenList.SUBMIT_TIME_SHEET);
          }}
          style={styles.customItem}
        >
          <Text style={{ paddingHorizontal: 16, color: colors.colorBlack,marginTop:10 }}>
            Submit Timesheet
          </Text>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.colorLightGray,
              marginTop: 15,
            }}
          />
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginTop: 20,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    flexDirection: "column",
  },
});

export default CustomSidebarMenu;
