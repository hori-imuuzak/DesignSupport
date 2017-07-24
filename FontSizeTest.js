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
  renderText(size) {
    return (
      <View
        key={`font${size}`}
        style={{
          flex: 1,
          borderColor: 'grey',
          borderTopWidth: StyleSheet.hairlineWidth,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      >
        <Text>{`font size = ${size}`}</Text>
        <Text
          style={{
            flex: 1,
            fontSize: size,
          }}
        >
          これはテキストです。
        </Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
      >
        {Range(1, 51).toArray().map(i => (
          this.renderText(i)
        ))}
      </ScrollView>
    );
  }
}