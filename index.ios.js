/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = '@AsyncStorageExample:someKey';

export default class AsyncStorage extends Component {
  constructor() {
    super();

    this.state = {
      messages: '',
      textInputMessage: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => this.addMessage(value))
      .done();
  }

  addMessage(message) {
    this.setState({
      messages: message,
    });
  }

  updateStorage() {
    AsyncStorage.setItem(STORAGE_KEY, this.state.textInputMessage);
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => this.addMessage(value))
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={textField}
            onChangeText={textInputMessage => this.setState({textInputMessage})}
            value={this.state.textInputMessage}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.updateStorage}
          >
            <Text> Update Storage </Text>
          </TouchableHighlight>
        </View>
        <View
          style={styles.message}
        >
          <Text> Text from local storage:</Text>
          <Text>{this.state.messages}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    width: 180,
  },
  message: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#05A5D1',
    marginTop: 10,
    height: 40,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('AsyncStorage', () => AsyncStorage);
