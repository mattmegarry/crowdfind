import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MapView from "./components/MapView.js";
import WelcomeView from "./components/WelcomeView.js";

export default function App() {
  const [findSessionName, setFindSessionName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CrowdFind MVP</Text>
      </View>
      {findSessionName ? (
        <MapView findSessionName={findSessionName}></MapView>
      ) : (
        <WelcomeView setFindSessionName={setFindSessionName}></WelcomeView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center"
  },
  title: {
    color: "#c2c2c2",
    fontSize: 30,
    textAlign: "center"
  }
});
