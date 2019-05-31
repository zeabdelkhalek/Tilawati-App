import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Header />
				<Text> Settings </Text>
			</View>
		);
	}
}

export default SettingsScreen;
