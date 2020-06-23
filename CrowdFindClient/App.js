import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';

//import Map from './components/Map.js';
import Welcome from './components/Welcome.js';
import CustomButton from './components/Button.js';

export default function App() {
  const [findSessionName, setFindSessionName] = useState('');

  function resetJustForDevelopment() {
    setFindSessionName('');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>CrowdFind MVP</Text>
          <Text>{BASE_URL}</Text>
        </View>
        {findSessionName ? null : (
          <Welcome setFindSessionName={setFindSessionName}></Welcome>
        )}
        <CustomButton
          onPress={resetJustForDevelopment}
          buttonMessage="resetJustForDevelopment"
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  title: {
    color: '#c2c2c2',
    fontSize: 30,
    textAlign: 'center',
  },
});

/* const App: () => React$Node = () => { */
/* export default App; */
