import * as React from 'react';
import { Drawer, Avatar } from 'react-native-paper';
import { View , Text} from 'react-native';
import styles from './Styles/DrawerStyle';
import { connect } from 'react-redux';
import { authwarnout, authGetUser } from '../Redux/actions/auth';

class DrawerContainer extends React.Component {
	state = {
		name: null,
		photo: null
	};
	componentWillMount() {
		this.props
			.onTryGetUser()
			.then((data) => {
				this.setState({
					name: data.name,
					photo: data.photo
				});
			})
			.catch(() => {
			});
	}
	logoutHandler = () => {
		this.props.onTryLogOut();
		this.props.navigation.navigate('Login');
	};
	render() {
		const { active, name, photo } = this.state;

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
					<Drawer.Item onPress={this.logoutHandler} icon="arrow-back" label="Logout" />

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
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
