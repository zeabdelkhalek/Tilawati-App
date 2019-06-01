import * as React from 'react';
import { Drawer, Avatar } from 'react-native-paper';
import { View , Text} from 'react-native';
import styles from './Styles/DrawerStyle';
import { connect } from 'react-redux';
import { authwarnout, authGetUser } from '../Redux/actions/auth';

class DrawerContainer extends React.Component {
	state = {
		
	};
	componentWillMount() {
		this.props
			.onTryGetUser()
			.then(() => {
				alert('sucess')
			})
			.catch(() => {
			});
	}
	logoutHandler = () => {
		this.props.onTryLogOut();
		this.props.navigation.navigate('Login');
	};
	render() {
		const { name, photo } = this.props;
		const { active } = this.state;

		return (
			<View>
				<View style={styles.container}>
					{photo && (
						<Avatar.Image
							size={80}
							source={{ uri: photo }}
							theme={{
								colors: {
									primary: '#BDBDBD'
								}
							}}
						/>
					)}
				</View>
				<Drawer.Section >
					<Drawer.Item active={true} icon="person" label={name} />
					<Drawer.Item onPress={this.logoutHandler} icon="arrow-back" label="تسجيل الخروج" />

					{/* <Drawer.Item label="Second Item" active={active === 'second'} /> */}
				</Drawer.Section>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryLogOut: () => dispatch(authwarnout()),
		onTryGetUser: () => dispatch(authGetUser())
	};
};

const mapStateToProps = (state) => {
	return {
		name : state.auth.name ,
		photo : state.auth.photo
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
