import React, { Component } from 'react';
import { View, Text, FlatList, Modal } from 'react-native';
import Header from '../Components/Header';
import Tilawa from '../Components/Tilawa';
import AddTilawaModal from '../Components/AddTilawaModal';
import { FAB, ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './Styles/HomeStyle';
import { getTilawas } from '../Redux/actions/tilawas';
import { Colors } from '../Themes';

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			visible: false
		};
	}
	componentWillMount() {
		this.props
			.onTryGet()
			.then(() => {
				this.setState({
					loading: false
				});
			})
			.catch(() => {
				this.setState({
					loading: false
				});
				alert('failed');
			});
	}
	addTilawaHandler = () => {
		console.warn('clieck');
		this.setState({
			visible: true
		});
	};
	_keyExtractor = (item, index) => item.id;

	_renderItem = ({ item }) => (
		<Tilawa
			key={item.id}
			id={item.id}
			tags={item.tags}
			user={item.user}
			title={item.title}
			comments={item.comments}
			record={item.record}
			description={item.description}
		/>
	);

	render() {
		let element = (
			<FlatList keyExtractor={this._keyExtractor} data={this.props.tilawas} renderItem={this._renderItem} />
		);
		if (this.state.loading) {
			element = <ActivityIndicator style={styles.loading} animating={true} color={Colors.primary} />;
		}
		return (
			<View style={styles.container}>
				
				<Header openDrawer={this.props.navigation.openDrawer} />
				
				<Modal onRequestClose={() => this.setState({visible : false })} animationType="slide" visible={this.state.visible}>
					<AddTilawaModal onPress={() => this.setState({visible : false })} />
				</Modal>

				{element}
				<FAB
					disabled={false}
					theme={{
						primary: Colors.primary,
						text: Colors.white
					}}
					medium
					style={styles.fab}
					icon="add"
					onPress={this.addTilawaHandler}
				/>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryGet: () => dispatch(getTilawas())
	};
};

const mapStateToProps = (state) => {
	return {
		tilawas: state.tilawas.data
	};
};

// export default HomeScreen ;
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
