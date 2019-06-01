import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, IconButton, Colors as MaterialColors, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Themes';
import styles from './Styles/CommentStyle';
class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			like: false
		};
	}
	likeTilawaHandler = () => {
		this.setState({
			like: true
		});
	};
	unLikeTilawaHandler = () => {
		this.setState({
			like: false
		});
	};
	render() {
		const { photo, statement, author } = this.props;
		console.warn(photo);

		let LikeButton = (
			<IconButton color={Colors.primary} onPress={this.likeTilawaHandler} icon="favorite-border" />
		);

		if (this.state.like) {
			LikeButton = (
				<IconButton color={MaterialColors.red500} onPress={this.unLikeTilawaHandler} icon="favorite" />
			);
		}
		return (
			<Card style={styles.cardContainer} >
				<Card.Content>
					<View style={styles.container}>
						<Avatar.Image source={{ uri: photo }} />
						<View style={styles.textContainer}>
							<Text style={styles.author}> {author} </Text>
							<Text> {statement} </Text>
						</View>
						{LikeButton}
					</View>
				</Card.Content>
			</Card>
		);
	}
}

export default Comment;
