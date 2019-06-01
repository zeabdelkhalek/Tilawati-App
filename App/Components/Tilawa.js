import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, FlatList } from 'react-native';
import styles from './Styles/TilawaStyle';
import { Chip, Card, Divider, Button, Avatar, IconButton, Colors as MaterialColors, Appbar } from 'react-native-paper';
import AudioPlayer from './AudioPlayer';
import { connect } from 'react-redux';
import { tryLike } from '../Redux/actions/tilawas';
import Comment from './Comment';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from "../Themes";
class Tilawa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			like: false,
			comment: '',
			// comments : this.props.comments
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
	_keyExtractor = (item, index) => item.id;

	_renderItem = ({ item }) => (
		<Comment key={item.id} photo={item.user.photo} statement={item.statement} author={item.author} />
	);
	addCommentHandler = () => {};
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
		let comments = (
			<FlatList keyExtractor={this._keyExtractor} data={this.props.comments} renderItem={this._renderItem} />
		);

		let LikeButton = (
			<IconButton color={MaterialColors.accent} onPress={this.likeTilawaHandler} icon="favorite-border" />
		);

		if (this.state.like) {
			LikeButton = (
				<IconButton color={MaterialColors.red500} onPress={this.unLikeTilawaHandler} icon="favorite" />
			);
		}

		return (
			<Card style={styles.container}>
				<Card.Content>
					<Modal style={{
						height : "100%"
					}} visible={visible} onRequestClose={this._hideModal} animationType="slide">
						<View>
							<Appbar style={styles.header}>
								<Appbar.Action icon="close" onPress={this._hideModal} />
								<Appbar.Content title="اضافة تعليق جديد" />
							</Appbar>

							{comments}
							{/* <View style={styles.postComment}>
								<Card>
									<Card.Content>
										<View style={styles.commentContainer}>
											 <Avatar.Image source={{ uri: photo }} /> 
											<View style={styles.textContainer}>
												<TextInput
													style={styles.input}
													value={this.state.comment}
													onChangeText={(text) => this.setState({ comment: text })}
													placeholder="أكتب تعليقك"
												/>{' '}
											</View>
											<IconButton
												onPress={this.addCommentHandler}
												icon="arrow"
												color={Colors.primary}
												size={20}
											/>
										</View>
									</Card.Content>
								</Card>
							</View> */}
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
								{this.props.user.first_name} قام بنشر تلاوة جديدة من سورة {this.props.title}
							</Text>
						</View>
						<Avatar.Image
							size={60}
							source={{ uri: this.props.user.photo }}
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
