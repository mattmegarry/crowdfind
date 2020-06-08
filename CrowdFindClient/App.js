import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./Button.js";

export default function App() {
  const [joinSessionSelection, setJoinSessionSelection] = useState(false);

  function handleJoinSessionSelect() {
    setJoinSessionSelection(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CrowdFind MVP</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.explainerText}>Welcome to CrowdFind!</Text>
        <Text style={styles.explainerText}>
          All data is deleted after 3 hours!
        </Text>
        {joinSessionSelection ? (
          <View style={styles.buttonsContainer}>
            <Text>INPUT FORM GOES HERE.</Text>
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <CustomButton buttonMessage="Create Session"></CustomButton>
            <CustomButton
              onPress={handleJoinSessionSelect}
              buttonMessage="Join Session"
            ></CustomButton>
          </View>
        )}
      </View>
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
  },
  main: {
    flex: 10,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  explainerText: {
    fontSize: 20
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
