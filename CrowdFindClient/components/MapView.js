import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapView(props) {
  const { findSessionName } = props;
  return (
    <View style={styles.main}>
      <Text>MAP</Text>
      <Text>{findSessionName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 10,
    backgroundColor: "grey",
    alignItems: "center"
  }
});
