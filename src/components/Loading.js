import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import Loader from "../assets/loader.svg";

const height = Dimensions.get("screen").height;
export class Loading extends Component {
  render() {
    return (
      <>
      <View style={styles.loadingScreen}>
        <View style={styles.loadingContainer}>
          <Animatable.View
            animation={"rotate"}
            iterationCount={"infinite"}
            style={styles.loaderImage}
          >
            <Loader height={40} width={40} />
          </Animatable.View>
        </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  loadingScreen: {
    height: height,
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2FFFFFF",
    zIndex: 1,
    opacity: 0.7,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  loaderImage: {
    width: 40,
    height: 40,
  },
});

export default Loading;
