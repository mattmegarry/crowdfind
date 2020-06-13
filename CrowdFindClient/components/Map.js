import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
//https://stackoverflow.com/questions/57598520/react-native-maps-with-expo
//https://docs.expo.io/versions/latest/sdk/map-view/
import MapView from "react-native-maps";

export default function Map(props) {
  const { findSessionName } = props;
  return (
    <View style={styles.main}>
      <Text>{findSessionName} Woo</Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -192.4324,
          latitudeDelta: 6.1922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 10,
    backgroundColor: "grey",
    alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 1
  }
});
