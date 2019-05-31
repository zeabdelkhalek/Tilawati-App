import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Components/Header';
import Tilawa from '../Components/Tilawa';
import { FAB, ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './Styles/HomeStyle';
import { getTilawas } from '../Redux/actions/tilawas';
import { Colors } from '../Themes';

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
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
					loading: true
				});
				alert('failed');
			});
	}

	_keyExtractor = (item, index) => item.id;

	_renderItem = ({ item }) => (
		<Tilawa
			key={item.id}
			tags={item.tags}
			user={item.user.first_name}
			title={item.title}
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
				<FAB medium style={styles.fab} icon="add" onPress={() => console.warn('Pressed')} />
				<Header />
				{element}
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
