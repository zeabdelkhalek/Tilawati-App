import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <Appbar >
        <Appbar.Action icon="archive" onPress={() => console.warn('Pressed archive')} />
        <Appbar.Action icon="mail" onPress={() => console.warn('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.warn('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.warn('Pressed delete')} />
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  // bottom: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  // },
});