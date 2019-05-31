import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

class SearchScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Header />
				<Text> Search </Text>
			</View>
		);
	}
}

export default SearchScreen;
