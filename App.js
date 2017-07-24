import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import SpacingTest from './SpacingTest';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SpacingTest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
