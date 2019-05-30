import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/TilawaStyle';
import { Chip, Card, Divider, Button, Avatar, IconButton } from 'react-native-paper';
import AudioPlayer from './AudioPlayer';
class Tilawa extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Card style={styles.container}>
				<Card.Content>
					<View style={styles.tagContainer}>
						<Chip
							theme={{
								colors: {
									text: '#fff'
								}
							}}
							style={styles.chip}
						>
							حفص
						</Chip>
					</View>
					<View style={styles.headerContainer}>
						<View
							style={{
								width: '60%',
								marginRight: 20
							}}
						>
							<Text style={styles.text}>أحمد قام بنشر تلاوة جديدة من سورة الأعراف</Text>
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
						<Text style={styles.statuContainerText}>
							تلاوة لمقطع يعجبني من سورة الأعراف، أنشر من فضلك لتعم الفائدة
						</Text>
						<AudioPlayer />
					</View>

					<Divider style={styles.divider} />
					<View style={styles.actionContainer}>
						<View style={styles.oneAction}>
							<IconButton icon="favorite" />
							<Text>أعجبني</Text>
						</View>
						<View style={styles.oneAction}>
							<IconButton icon="comment" />
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
