import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';
import { Colors } from '../Themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Header />
				<View style={{
					justifyContent : 'center' ,
					flexDirection: 'column',
					alignItems: 'center',
					height : '100%'
				}} >
					<Icon name="report-problem" size={60} color={Colors.seconday} />
					<Text style={{
						fontSize : 30 
					}} > هذه الصفحة غير متوفرة </Text>
				</View>
			</View>
		);
	}
}

export default SettingsScreen;
