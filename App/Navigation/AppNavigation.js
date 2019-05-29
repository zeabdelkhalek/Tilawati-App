import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import configureStore from '../Redux/configureStore';
import styles from './Styles/NavigationStyles';
import { Provider } from 'react-redux';
import { LoginScreen, RegisterScreen, IntroSliderScreen, MainScreen } from '../Screens';
import Header from '../Components/Header';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const store = configureStore();

// Manifest of possible screens
const AppNavigator = createStackNavigator(
	{
		Intro: { screen: IntroSliderScreen },
		Login: { screen: LoginScreen },
		Register: { screen: RegisterScreen },
		Main: {
			screen: MainScreen , 
			navigationOptions: {
				header: Header
			}
		}
	},
	{
		// Default config for all screens
		headerMode: 'none',
		initialRouteName: 'Intro'
	}
);

let Navigation = createAppContainer(AppNavigator);

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#009688'
	}
};
export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}
	render() {
		return (
			<Provider store={store}>
				<PaperProvider theme={theme}>
					<Navigation />
				</PaperProvider>
			</Provider>
		);
	}
}
