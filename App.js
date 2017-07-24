import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

import SpacingTest from './SpacingTest';

import FontSizeTest from './FontSizeTest';

import {
  StackNavigator,
} from 'react-navigation';

class Root extends React.Component {
  static navigationOptions = {
    header: null,
  }

  renderItem(text, onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Text
          style={styles.item}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderItem('マージンの確認', () => { this.props.navigation.navigate('spacing'); })}
        {this.renderItem('フォントサイズの確認', () => { this.props.navigation.navigate('fontSize'); })}
      </View>
    );
  }
};

const Route = StackNavigator({
  root: {
    screen: Root,
  },
  spacing: {
    screen: SpacingTest,
    navigationOptions: {
      title: 'マージンの確認',
    },
  },
  fontSize: {
    screen: FontSizeTest,
    navigationOptions: {
      title: 'フォントサイズの確認',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Route />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  item: {
    height: 40,
    padding: 20,
  },
});
