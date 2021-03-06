import React from 'react'
import { TfImageRecognition } from 'react-native-tensorflow'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    console.warn(TfImageRecognition)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
