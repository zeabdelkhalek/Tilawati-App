import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import styles from './Styles/TilawaStyle';
import { Chip, Card, Divider, Button, Avatar, IconButton, Colors } from 'react-native-paper';
import AudioPlayer from './AudioPlayer';
import { connect } from 'react-redux';
import { tryLike } from '../Redux/actions/tilawas';
class Tilawa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			like: false
		};
	}
	_showModal = () => this.setState({ visible: true });
	_hideModal = () => this.setState({ visible: false });
	likeTilawaHandler = () => {
		this.setState({
			like: true
		});
		this.props
			.onTryLike(this.props.id)
			.catch((err) => {
				this.setState({
					like: false
				});
			})
			.then(() => {
				console.warn('sucess');
			});
	};
	unLikeTilawaHandler = () => {
		this.setState({
			like: false
		});
	};
	render() {
		let tags = this.props.tags.map((tag) => {
			return (
				<Chip
					key={tag.id}
					theme={{
						colors: {
							text: '#fff'
						}
					}}
					style={styles.chip}
				>
					{tag.name}
				</Chip>
			);
		});
		const { visible } = this.state;
		let comments = this.props.comments.map((comment) => {
			return <Text key={comment.id}> {comment.statement} </Text>;
		});
		let LikeButton = <IconButton color={Colors.accent} onPress={this.likeTilawaHandler} icon="favorite" />;
		if (this.state.like) {
			LikeButton = <IconButton color={Colors.red500} onPress={this.unLikeTilawaHandler} icon="favorite" />;
		}

		return (
			<Card style={styles.container}>
				<Card.Content>
					<Modal visible={visible} onRequestClose={this._hideModal} animationType="slide">
						<View style={{ marginTop: 22 }}>
							<View>
								{comments}
								<TouchableHighlight onPress={this._hideModal}>
									<Text>Hide Modal</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Modal>
					<View style={styles.tagContainer}>{tags}</View>
					<View style={styles.headerContainer}>
						<View
							style={{
								width: '60%',
								marginRight: 20
							}}
						>
							<Text style={styles.text}>
								{this.props.user} قام بنشر تلاوة جديدة من سورة {this.props.title}
							</Text>
						</View>
						<Avatar.Icon
							size={60}
							icon="mic"
							theme={{
								colors: {
									primary: '#BDBDBD'
								}
							}}
						/>
					</View>
					<View style={styles.statuContainer}>
						<Text style={styles.statuContainerText}>{this.props.description}</Text>
						<AudioPlayer record={this.props.record} />
					</View>

					<Divider style={styles.divider} />
					<View style={styles.actionContainer}>
						<View style={styles.oneAction}>
							{LikeButton}
							<Text>أعجبني</Text>
						</View>
						<View style={styles.oneAction}>
							<IconButton onPress={this._showModal} icon="comment" />
							<Text>تعليق</Text>
						</View>
						<View style={styles.oneAction}>
							<IconButton icon="share" />
							<Text>نشر</Text>
						</View>
					</View>
				</Card.Content>
			</Card>
		);
	}
}

mapDispatchToProps = (dispatch) => {
	return {
		onTryLike: (id) => dispatch(tryLike(id))
	};
};
export default connect(null, mapDispatchToProps)(Tilawa);
