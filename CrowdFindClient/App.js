import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BASE_URL } from "react-native-dotenv";

import Map from "./components/Map.js";
import Welcome from "./components/Welcome.js";
import CustomButton from "./components/Button.js";

export default function App() {
  const [findSessionName, setFindSessionName] = useState("");

  function resetJustForDevelopment() {
    setFindSessionName("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CrowdFinnd MVP</Text>
        <CustomButton
          style={{ position: "absolute", left: 200, top: 200 }}
          onPress={resetJustForDevelopment}
          buttonMessage="resetJustForDevelopment"
        />
        <Text>{BASE_URL}</Text>
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
