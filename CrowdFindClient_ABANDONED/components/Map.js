import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
//https://stackoverflow.com/questions/57598520/react-native-maps-with-expo
//https://docs.expo.io/versions/latest/sdk/map-view/
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

export default function Map(props) {
  const [location, setLocation] = useState({});
  const [locationHistory, setLocationHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMessage("Permission to access location was denied");
        }

        console.log("asking");
        const locationResponse = await Location.getCurrentPositionAsync({});
        console.log("happened");
        const location = locationResponse.coords;
        setLocation(location);
        setLocationHistory(
          locationHistory.concat([
            {
              latitude: locationResponse.coords.latitude,
              longitude: locationResponse.coords.longitude
            }
          ])
        );
      } catch (e) {
        console.log(e);
      }
    })();
  });

  const { findSessionName } = props;

  let text = "Waiting for location...";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
    text === "{}" ? (text = "") : (text = text);
  }

  const { longitude, latitude } = location;

  return (
    <View style={styles.main}>
      <Text>{findSessionName}</Text>
      <Text>{text}</Text>
      <Text>{errorMessage}</Text>
      {longitude && latitude ? (
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.015
          }}
        >
          {/* <Marker coordinate={{ latitude, longitude }} title={"You"} /> */}
          <Polyline
            coordinates={locationHistory}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              "#7F0000",
              "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
              "#B24112",
              "#E5845C",
              "#238C23",
              "#7F0000"
            ]}
            strokeWidth={6}
          />
        </MapView>
      ) : (
        <Text>Loading Map...</Text>
      )}
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
