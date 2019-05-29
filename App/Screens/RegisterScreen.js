import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/LoginStyle';
import { connect } from 'react-redux';
import { tryRegister } from '../Redux/actions/auth';
import { Avatar, Button, TextInput, IconButton } from 'react-native-paper';

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

	loginNavigate = () => {
		this.props.navigation.navigate('Login');
	};

	submitRegister = () => {
		const authData = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		};
		this.props.onTryRegister(authData).then(() => this.props.navigation.navigate('Main')).catch(() => {
			if (this.props.registerError) {
				alert(this.props.registerError);
			}
		});
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
							style={styles.smallInput}
							value={this.state.first_name}
							onChangeText={(text) => this.setState({ first_name: text })}
							placeholder="اللقب"
						/>
						<TextInput
							style={styles.smallInput}
							value={this.state.last_name}
							onChangeText={(text) => this.setState({ last_name: text })}
							placeholder="الإسم "
						/>
						<IconButton
							style={styles.icon}
							icon="person"
							color="#009688"
							size={30}
							onPress={() => console.log('Pressed')}
						/>
					</View>
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
						<TextInput
							error={this.props.passError}
							style={styles.input}
							value={this.state.password_confirmation}
							onChangeText={(text) => this.setState({ password_confirmation: text })}
							secureTextEntry={true}
							placeholder="تأكيد كلمة السر  "
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
						<Button style={styles.button} mode="contained" onPress={this.submitRegister}>
							فتح حساب
						</Button>
					</View>
				</View>
				<View style={styles.footerContainer}>
					<View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
						<Text> تملك حسابا مسبقا </Text>
						<TouchableOpacity onPress={this.loginNavigate}>
							<Text
								style={{
									fontWeight: 'bold'
								}}
							>
								{' '}
								سجل الدخول {' '}
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
		onTryRegister: (authData) => dispatch(tryRegister(authData))
	};
};

const mapStateToProps = (state) => {
	return {
		registerError: state.auth.error
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
