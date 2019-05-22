import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import configureStore from '../Redux/configureStore';
import styles from './Styles/NavigationStyles';
import { Provider } from 'react-redux';
import LoginScreen from '../Screens/LoginScreen';
import IntroSliderScreen from '../Screens/IntroSliderScreen';
import MainScreen from '../Screens/MainScreen';

const store = configureStore();

// Manifest of possible screens
const AppNavigator = createStackNavigator(
	{
		Intro: { screen: IntroSliderScreen },
		Login: { screen: LoginScreen },
		Main: { screen: MainScreen }
	},
	{
		// Default config for all screens
		headerMode: 'none',
		initialRouteName: 'Intro',
		navigationOptions: {
			headerStyle: styles.header
		}
	}
);

let Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}
	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}
