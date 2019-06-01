import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/AddTilawaModalStyle';
import { Appbar, TextInput, Button, ActivityIndicator, Dialog, Portal, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Themes';
import { connect } from 'react-redux';
import { tryAddTilawa } from '../Redux/actions/tilawas';
import RNFileSelector from 'react-native-file-selector';



class AddTilawaModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			surah_dialog: false,
			title: '',
			tarik: '',
			kiraa: '',
			riwaya: '',
			fileURI: '' ,
			checked: '',
			loading: false
		};
	}
	// pickFile = () => {
	// 	RNFileSelector.Show(
	// 		{
	// 			title: 'إرفع ملف صوتي ',
	// 			onDone: (path) => {
	// 				console.warn('file selected: ' + path) 
	// 				this.setState({
	// 					fileURI : path
	// 				})
	// 			},
	// 			onCancel: () => {
	// 				console.warn('cancelled')
	// 			}
	// 		}
	// 	)
	// }
	_showDialog = () => {
		console.warn('hello');

		this.setState({ surah_dialog: true });
	};

	_hideDialog = () => this.setState({ surah_dialog: false });
	createFormData = (file, body) => {
		const data = new FormData();
		if (file != null) {
			data.append('file', {
				name: 'name' , 
				type: 'mp3' ,
				uri: file
			});
		}

		Object.keys(body).forEach((key) => {
			data.append(key, body[key]);
		});

		return data;
	};
	adaTilawaHandler = () => {
		this.setState({
			loading: true
		});
		const tilawaData = {
			title: this.state.title,
			description: this.state.description,
			surah_id : 1 
		};
		const data = this.createFormData(this.state.fileURI, tilawaData);

		console.warn(data);
		this.props
			.onTryAddNewTilawa(data)
			.then(() => {
				this.setState({
					loading: false
				});
				this.props.onPress();
			})
			.catch(() => {
				this.setState({
					loading: false
				});
			});
	};
	render() {
		const { checked, description, title, tarik, kiraa, surah_dialog, riwaya, fileURI, loading } = this.state;
		let buttonOrNot = (
			<Button onPress={this.adaTilawaHandler} style={styles.button} mode="contained">
				نشر
			</Button>
		);
		if (loading) {
			buttonOrNot = <ActivityIndicator animating={true} color={Colors.primary} />;
		}
		return (
			<View>
				<Appbar style={styles.header}>
					<Appbar.Action icon="close" onPress={this.props.onPress} />
					<Appbar.Content title="اضافة تلاوة جديدة" />
				</Appbar>

				<View style={styles.container}>
					<TextInput
						multiline={true}
						style={[ styles.input, { height: 60 } ]}
						value={description}
						onChangeText={(text) => this.setState({ description: text })}
						placeholder="نص المنشور "
					/>
					<TextInput
						style={styles.input}
						onFocus={this._showDialog}
						value={title}
						onChangeText={(text) => this.setState({ title: text })}
						placeholder="إختر سورة"
					/>
					<View style={styles.secondContainer}>
						<TouchableOpacity onPress={this.pickFile} >
							<Text style={styles.uploadText}> رفع ملف </Text>
						</TouchableOpacity>
						<TextInput
							style={[ styles.input, { width: '60%' } ]}
							value={fileURI}
							placeholder="لم يتم رفع ملف بعد "
						/>
						<Icon style={styles.icon} name="close" color="#009688" size={20} />
					</View>
					{/* <View
						style={{
							textAlign: 'right'
						}}
					>
						<Text> الفراغات التالية اختيارية </Text>
					</View> */}
					<View style={styles.secondContainer}>
						<TextInput
							style={styles.smallInput}
							value={kiraa}
							onChangeText={(text) => this.setState({ kiraa: text })}
							placeholder=" القراءة "
						/>
						<TextInput
							style={styles.smallInput}
							value={riwaya}
							onChangeText={(text) => this.setState({ riwaya: text })}
							placeholder=" الرواية "
						/>
						<TextInput
							style={styles.smallInput}
							value={tarik}
							onChangeText={(text) => this.setState({ tarik: text })}
							placeholder=" الطريق "
						/>
					</View>
					{buttonOrNot}
				</View>
				{/* <Portal>
					<Dialog visible={this.state.surah_dialog} onDismiss={this._hideDialog}>
						<Dialog.Title>إختر سورة</Dialog.Title>
						<Dialog.Content>
							<RadioButton
								value="الأعراف"
								status={checked === 'الأعراف' ? 'checked' : 'unchecked'}
								onPress={() => {
									this.setState({ checked: 'الأعراف' });
								}}
							/>
						</Dialog.Content>
						<Dialog.Actions>
							<Button onPress={this._hideDialog}>تم</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal> */}
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAddNewTilawa: (body) => dispatch(tryAddTilawa(body))
	};
};

const mapStateToProps = (state) => {
	return {};
};
export default connect()(AddTilawaModal);
