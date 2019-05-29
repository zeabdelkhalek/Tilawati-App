import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = () => (
	<Appbar style={styles.right} >
		<Appbar.Action icon="dehaze" onPress={() => console.warn('Pressed drawer')} />
	</Appbar>
);

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  right : {
    flexDirection : 'row-reverse' 
  },
});

export default Header;
