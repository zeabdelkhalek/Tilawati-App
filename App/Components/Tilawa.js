import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import styles from './Styles/TilawaStyle';
import { Chip, Card, Divider, Button, Avatar, IconButton } from 'react-native-paper';
import AudioPlayer from './AudioPlayer';
class Tilawa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}
	_showModal = () => this.setState({ visible: true });
	_hideModal = () => this.setState({ visible: false });

	showCommentsModel = () => {};
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

		return (
			<Card style={styles.container}>
				<Card.Content>
					<Modal visible={visible} animationType="slide">
						<View style={{ marginTop: 22 }}>
							<View>
								<Text>Hello World!</Text>
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
							<IconButton icon="favorite" />
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

export default Tilawa;
