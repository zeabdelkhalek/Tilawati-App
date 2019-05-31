import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

class NotificationsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Header />
				<Text> Notifications </Text>
			</View>
		);
	}
}

export default NotificationsScreen;
