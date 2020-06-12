import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import CustomButton from "./Button.js";

import { httpRequest } from "../utils/httpRequestNoAuth";

export default function WelcomeView(props) {
  const [joinSessionSelection, setJoinSessionSelection] = useState(false);
  const [findSessionNameInput, setFindSessionNameInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setFindSessionName } = props;

  function handleJoinSessionSelect() {
    setJoinSessionSelection(true);
  }

  async function joinSessionRequest() {
    try {
      setLoading(true);
      const body = {
        findSessionNameInput: findSessionNameInput
      };
      const res = await httpRequest("/finding/join", "POST", body);

      if (res.status === 404) {
        setErrorMessage(
          "No FindSession with that name was found! Please try check and try again."
        );
        setLoading(false);
      }
      if (res.status === 200) {
        setFindSessionName(res.findSessionName);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.main}>
      {loading ? (
        <Text>LOADING....</Text>
      ) : (
        <>
          <Text style={styles.explainerText}>Welcome to CrowdFind!</Text>
          <Text style={styles.explainerText}>
            All data is deleted after 3 hours!
          </Text>
          {joinSessionSelection ? (
            <>
              <View>
                {errorMessage ? <Text>{errorMessage}</Text> : <Text></Text>}
              </View>
              <View style={styles.buttonsContainer}>
                <TextInput
                  style={{ height: 40 }}
                  placeholder="Enter three word code..."
                  onChangeText={text => setFindSessionNameInput(text)}
                  defaultValue={findSessionNameInput}
                  onSubmitEditing={joinSessionRequest}
                />
              </View>
            </>
          ) : (
            <View style={styles.buttonsContainer}>
              <CustomButton buttonMessage="Create Session"></CustomButton>
              <CustomButton
                onPress={handleJoinSessionSelect}
                buttonMessage="Join Session"
              ></CustomButton>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
