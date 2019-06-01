import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	openDrawerHandler = () => {
		this.props.openDrawer()
	};
	render() {
		return (
			<Appbar style={styles.right}>
				<Appbar.Action icon="dehaze" onPress={this.openDrawerHandler} />
			</Appbar>
		);
	}
}

const styles = StyleSheet.create({
	bottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0
	},
	right: {
		flexDirection: 'row-reverse'
	}
});

export default Header;
