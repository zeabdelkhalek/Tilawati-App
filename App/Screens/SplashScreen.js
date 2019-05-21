import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'



// @connect(mapStateToProps, actions)
class SplashScreen extends Component {
	componentDidMount() {
		// this.props.initializeApp();
	}

	component() {
		this._navigateTo('ScreenExample');
		//   if (this.props.isAppReady) {
		//     if (this.props.isLoggedIn) {
		//       this._navigateTo('MainNavigator')
		//     } else {
		//       this._navigateTo('AuthScreen')
		//     }
		//   }
	}

	_navigateTo = (routeName) => {  
		const actionToDispatch = NavigationActions.reset({
			index: 0,
			actions: [ NavigationActions.navigate({ routeName }) ]
		});
		this.props.navigation.dispatch(actionToDispatch);
	};
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text> SplashTest </Text>
			</View>
		);
	}
}

export default connect()(SplashScreen);
