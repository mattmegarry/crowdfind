import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Map from "./components/Map.js";
import Welcome from "./components/Welcome.js";

export default function App() {
  const [findSessionName, setFindSessionName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CrowdFind MVP</Text>
      </View>
      {findSessionName ? (
        <Map findSessionName={findSessionName}></Map>
      ) : (
        <Welcome setFindSessionName={setFindSessionName}></Welcome>
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
