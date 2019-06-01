import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';
import { authGetToken } from '../Redux/actions/auth';
import { Colors, Images } from '../Themes';
const styles = StyleSheet.create({
	slide: {
		justifyContent: 'space-around',
		alignItems: 'center',
		height : '100%' , 
	},
	title: {
		flex : 1 ,
		fontSize: 30,
		fontWeight: 'bold',
		color: Colors.primary,
	},
	text: {
		flex : 2,
		fontSize: 15,
		textAlign: 'center',
		color: Colors.primary,
		width: '80%'
	},
	image: {
		flex : 2 ,
		height: 150,
	},
	activeDots: {
		backgroundColor: Colors.primary
	},
	inactiveDots: {
		backgroundColor: Colors.white,
		borderColor: Colors.primary,
		borderWidth: 1
	},
	skip : {
		flex : 1 ,
			alignSelf: 'flex-end' , 
			marginRight: 20,
	}
});

const slides = [
	{
		key: 'somethun',
		title: ' تطبيق تلاوتي ',
		text:
			'تطبيق صنع من طرف حفاظ كتاب الله تعالى ، من أجل المساهمة في تنمية ثقافة التجويد في العالم الإسلامي عبر نشر التلاوات ',
		image: Images.slideOne,
		// image : require('../Images/Slide1.png') ,
		backgroundColor: Colors.white
	},
	{
		key: 'somethun-dos',
		title: 'أنشر تلاوتك و نل ثوابها ',
		text: 'يمكن نشر تلاوتك مع متابعيك و أصدقائك ، نل ثواب كل حرف يستنصت و كل قلب يلين لعذوبة صوتك ',
		image: Images.slideTwo,
		backgroundColor: Colors.white
	}
	// {
	// 	key: 'somethun1',
	// 	title: 'Rocket guy',
	// 	text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
	// 	// image: require('./assets/3.jpg'),
	// 	backgroundColor: Colors.white
	// }
];

class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	_renderItem = (item) => {
		return (
			<View style={[ styles.slide, { backgroundColor: item.backgroundColor } ]}>
				<TouchableOpacity
					style={styles.skip}
					onPress={this._onDone}
				>
					<Text style={[ styles.title , {fontSize : 20 }] }>تخطي</Text>
				</TouchableOpacity>
				<Image resizeMode={'contain'}   style={styles.image} source={item.image} />
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.text}>{item.text}</Text>
			</View>
		);
	};
	_onDone = () => {
		this.props.navigation.navigate('Login');
	};
	render() {
		return (
			<AppIntroSlider
				activeDotStyle={styles.activeDots}
				dotStyle={styles.inactiveDots}
				renderItem={this._renderItem}
				showNextButton={false}
				slides={slides}
				onDone={this._onDone}
			/>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getToken: () => dispatch(authGetToken())
	};
};
const mapStateToProps = (state) => {
	const authState = state.auth.token ? true : false;
	return {
		auth: authState
	};
};
export default connect(null, mapDispatchToProps)(Slider);
