import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/LoginStyle';
import { connect } from 'react-redux';
import { tryAuth } from '../Redux/actions/auth';

import { Avatar, Button, TextInput, IconButton } from 'react-native-paper';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	submitLogin = () => {
		const authData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.onTryAuth(authData).then(() => this.props.navigation.navigate('Main')).catch(() => {
			if (this.props.loginError) {
				alert(this.props.loginError);
			}
		});
	};
	registerNavigate = () => {
		this.props.navigation.navigate('Register');
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Avatar.Text size={136} label="XD" />
				</View>
				<View style={styles.loginContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							error={this.props.mailError}
							style={styles.input}
							value={this.state.email}
							onChangeText={(text) => this.setState({ email: text })}
							placeholder="البريد الالكتروني "
						/>
						<IconButton
							style={styles.icon}
							icon="mail"
							color="#009688"
							size={30}
							onPress={() => console.log('Pressed')}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							error={this.props.passError}
							style={styles.input}
							value={this.state.password}
							onChangeText={(text) => this.setState({ password: text })}
							textAlign="right"
							secureTextEntry={true}
							placeholder="كلمة المرور "
						/>
						<IconButton
							style={styles.icon}
							icon="lock"
							color="#009688"
							size={30}
							onPress={() => console.log('Pressed')}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Button style={styles.button} mode="contained" onPress={this.submitLogin}>
							تسجيل الدخول
						</Button>
					</View>
					<View style={styles.forget}>
						<Text>نسيت كلمة المرور ؟</Text>
					</View>
				</View>
				<View style={styles.footerContainer}>
					<View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
						<Text>لا تملك حسابا بعد</Text>
						<TouchableOpacity onPress={this.registerNavigate}>
							<Text
								style={{
									fontWeight: 'bold'
								}}
							>
								{' '}
								اصبح عضوا{' '}
							</Text>
						</TouchableOpacity>
						<Text>الآن</Text>
					</View>
				</View>
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
		loginError: state.auth.error.message,
		mailError: state.auth.error.field === 'email',
		passError: state.auth.error.field === 'password'
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
