import React, { Component } from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Range,
} from 'immutable';

export default class SpacingTest extends Component {
  renderSpace(size) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>{`size = ${size}`}</Text>
        <View
          key={`space${size}`}
          style={{
            flex: 1,
            height: size,
            borderColor: 'black',
            backgroundColor: 'grey',
          }}
        />
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
      >
        {Range(1, 101).toArray().map(i => (
          this.renderSpace(i)
        ))}
      </ScrollView>
    );
  }
}