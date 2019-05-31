import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from './Styles/SearchStyle';
import { connect } from 'react-redux';
import { trySearch } from '../Redux/actions/tilawas';

class SearchScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstQuery: ''
		};
	}
	componentDidMount() {
		this.props
			.onTrySearch(this.state.firstQuery)
			.then(() => {
				// this.setState({
				// 	loading: false
				// });
			})
			.catch(() => {
				// this.setState({
				// 	loading: true
				// });
				alert('failed');
			});
	}

	render() {
		const { firstQuery } = this.state;

		return (
			<View>
				<View style={styles.searchBarContainer}>
					<Searchbar
						// placeholder="البحث"
						onChangeText={(query) => {
							this.setState({ firstQuery: query });
						}}
						value={firstQuery}
						inputStyle={styles.inputStyle}
						style={styles.searchStyle}
					/>
				</View>
			</View>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTrySearch: (query) => dispatch(trySearch(query))
	};
};

const mapStateToProps = (state) => {
	return {
		tilawas: state.tilawas.search
	};
};
// export default SearchScreen;
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
