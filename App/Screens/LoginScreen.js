import React, { Component } from 'react';
import { View, Text, TextInput, Button , TouchableOpacity } from 'react-native';
// import { Input, Button } from 'react-native-elements';
import Styles from './Styles/LoginStyle';
import { connect } from 'react-redux';
import { tryAuth } from '../Redux/actions/auth';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	componentDidMount() {}
	submitLogin = () => {
		const authData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.onTryAuth(authData)
			.then(() => this.props.navigation.navigate('Main'))
			.catch(() => alert('Authentification failed ! please try again '))
	};
	registerNavigate = () => {
		this.props.navigation.navigate('Register')
	}
	render() {
		let Error = null;
		if (this.props.loginError) {
			Error = <Text styles={Styles.errorMessage}>{this.props.loginError}</Text>;
		}
		return (
			<View styles={Styles.container}>
				<Text> ادخل الأن </Text>
				<TextInput
					value={this.state.email}
					onChangeText={(text) => this.setState({ email: text })}
					placeholder="البريد الالكتروني "
				/>
				<TextInput
					value={this.state.password}
					onChangeText={(text) => this.setState({ password: text })}
					secureTextEntry={true}
					placeholder="كلمة السر "
				/>
				<Button onPress={this.submitLogin} title="تسجيل الدخول" />
				{Error}
				<TouchableOpacity onPress={this.registerNavigate} >
					<Text> سجل الآن </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAuth: (authData) => dispatch(tryAuth(authData))
	};
};

const mapStateToProps = (state) => {
	return {
		loginError: state.auth.error
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
