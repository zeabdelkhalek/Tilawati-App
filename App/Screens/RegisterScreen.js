import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/LoginStyle';
import { connect } from 'react-redux';
import { tryRegister } from '../Redux/actions/auth';
import { Avatar, Button, TextInput, IconButton, ActivityIndicator } from 'react-native-paper';
import { Colors } from '../Themes';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			password_confirmation: '',
			loading: false,
			// photo: {
			// 	uri: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg'
			// }
			photo: null
		};
	}

	onPickImage = () => {
		const options = {
			noData: true,
			title: 'إختر صورة البروفايل',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = response ;

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					photo: source
				});
			}
		});
	};
	loginNavigate = () => {
		this.props.navigation.navigate('Login');
	};
	createFormData = (photo, body) => {
		const data = new FormData();

		data.append('photo', {
			name: photo.fileName,
			type: photo.type,
			uri: photo.uri
		});

		Object.keys(body).forEach((key) => {
			data.append(key, body[key]);
		});

		return data;
	};
	submitRegister = () => {
		this.setState({ loading: true });

		const authData = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		};
		const data = this.createFormData(this.state.photo, authData);
		console.warn(data);
		
		this.props
			.onTryRegister(data)
			.then(() => {
				this.setState({ loading: false });
				this.props.navigation.navigate('Main');
			})
			.catch(() => {
				this.setState({ loading: false });
				if (this.props.registerError) {
					alert(this.props.registerError);
				}
			});
	};
	render() {
		let buttonOrNot = (
			<Button style={styles.button} mode="contained" onPress={this.submitRegister}>
				فتح حساب
			</Button>
		);
		if (this.state.loading) {
			buttonOrNot = <ActivityIndicator animating={true} color={Colors.primary} />;
		}
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					{this.state.photo && <Avatar.Image size={136} source={this.state.photo} />}

					{!this.state.photo && (
						<Avatar.Image
							size={136}
							source={{
								uri:
									'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg'
							}}
						/>
					)}
					<View style={styles.absoulteCenter}>
						<IconButton color={Colors.white} size={25} icon="camera" onPress={this.onPickImage} />
					</View>
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
						<Icon style={styles.icon} name="person" color="#009688" size={30} />
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							error={this.props.mailError}
							style={styles.input}
							value={this.state.email}
							onChangeText={(text) => this.setState({ email: text })}
							placeholder="البريد الالكتروني "
						/>
						<Icon
							style={styles.icon}
							name="mail"
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
						<Icon
							style={styles.icon}
							name="lock"
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
						<Icon
							style={styles.icon}
							name="lock"
							color="#009688"
							size={30}
							onPress={() => console.log('Pressed')}
						/>
					</View>
					<View style={styles.inputContainer}>{buttonOrNot}</View>
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
