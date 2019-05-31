import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { authGetToken } from '../Redux/actions/auth';
import { Colors } from '../Themes';
import { ActivityIndicator } from 'react-native-paper';

class WaitScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.props
			.getToken()
			.then((token) => {
				this.props.navigation.navigate('Main');
			})
			.catch(() => {
				this.props.navigation.navigate('Intro');
			});
	}
	render() {
		return (
			<View style={{
                    flex: 1,
                    width : '100%' , 
                    height : '100%' ,
					justifyContent: 'center',
					alignContent: 'center'
				}}>
				<ActivityIndicator size="large" animating={true} color={Colors.primary} />
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getToken: () => dispatch(authGetToken())
	};
};

export default connect(null, mapDispatchToProps)(WaitScreen);
