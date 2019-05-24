import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import { Input, Button } from 'react-native-elements';
import Styles from './Styles/LoginStyle';
import { connect } from 'react-redux';
import { tryRegister } from '../Redux/actions/auth';

class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			password_confirmation: ''
		};
	}
	componentDidMount() {}

	loginNavigate = () => {
		this.props.navigation.navigate('Login');
	};

	submitRegister = () => {
		const authData = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password , 
			password_confirmation: this.state.password_confirmation
		};
		this.props.onTryRegister(authData)
			.then(() => this.props.navigation.navigate('Main'))
			.catch(() => alert('Registration failed ! please try again '))
	};
	render() {
		let Error = null;
		if (this.props.registerError) {
			Error = <Text styles={Styles.errorMessage}>{this.props.registerError}</Text>;
		}
		return (
			<View styles={Styles.container}>
				<Text> ادخل الأن </Text>
				<TextInput
					value={this.state.first_name}
					onChangeText={(text) => this.setState({ first_name: text })}
					placeholder="first name "
				/>
				<TextInput
					value={this.state.last_name}
					onChangeText={(text) => this.setState({ last_name: text })}
					placeholder="last name "
				/>
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
				<TextInput
					value={this.state.password_confirmation}
					onChangeText={(text) => this.setState({ password_confirmation: text })}
					secureTextEntry={true}
					placeholder="كلمة السر confirm  "
				/>
				<Button onPress={this.submitRegister} title="تسجيل " />
				{Error}
				<TouchableOpacity onPress={this.loginNavigate}>
					<Text> سجل الآن </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryRegister: (authData) => dispatch(tryRegister(authData))
	};
};

const mapStateToProps = (state) => {
	return {
		registerError: state.auth.error
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
