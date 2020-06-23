import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    flex: 0.3,
    backgroundColor: "orange",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  }
});

export default function Button(props) {
  const { onPress, buttonMessage } = props;
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress && onPress();
        }}
      >
        <Text style={styles.buttonText}>{buttonMessage}</Text>
      </TouchableOpacity>
    </>
  );
}
