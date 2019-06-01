import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
export default StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 10,
		paddingBottom: 10,
		marginTop: 2,
		//   shadowColor: '#000000',
		//   shadowRadius: 3,
		flexDirection: 'column',
		justifyContent: 'flex-start'
		// alignItems : 'flex-end'
	},
	commentContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: Colors.white,
		flexDirection: 'row-reverse'
	},
	textContainer: {
		width: '60%'
	},
	tagContainer: {
		flexDirection: 'row-reverse'
	},
	chip: {
		backgroundColor: Colors.primary,
		color: '#fff',
		marginLeft: 8
	},

	headerContainer: {
		marginTop: 20,
		marginLeft: -20,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	statuContainer: {
		alignSelf: 'flex-end',
		marginTop: 20,
		width: '100%'
	},
	statuContainerText: {
		fontFamily : 'Janna LT Bold',
		fontSize: 20
	},
	text: {
		fontSize: 17
	},
	actionContainer: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-around',
		width: '100%'
	},
	divider: {
		marginTop: 10,
		marginBottom: 10
	},
	oneAction: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		padding: 30
	},
	postComment: {
		position: 'absolute',
		bottom: 0,
		width: '100%'
	},
	input: {
		fontSize: 13,
		backgroundColor: 'transparent',
		textAlign: 'right',
		width: '85%',
		height: 45
	}
});
