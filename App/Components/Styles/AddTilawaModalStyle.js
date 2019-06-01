import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20, 
        width: '100%'
	},
	header: {
		padding: 30
	},
	input: {
		fontSize: 13,
		backgroundColor: 'transparent',
		textAlign: 'right',
		width: '85%',
		height: 45 , 
		fontFamily : 'Janna LT-Regular',

    },
	smallInput: {
		fontSize: 13,
		backgroundColor: 'transparent',
		textAlign: 'right',
		width : 'auto' , 
		flex : 1 , 
		marginHorizontal:6,
		height: 45
	},
	button: {
		width: '100%' , 
		marginVertical: 20,
	},
	uploadText: {
		fontWeight: 'bold',
		color: Colors.primary ,
		marginBottom: 5,
	},
	icon : {
		marginBottom: 5,
	},
	secondContainer: {
		marginTop: 10,
		marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
		alignItems : 'flex-end' , 
		height : 60 
	}
});
