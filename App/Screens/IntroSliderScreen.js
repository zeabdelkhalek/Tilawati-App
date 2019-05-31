import React from 'react';
import { Text , Image ,  View , StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from "react-redux";
import { authGetToken } from '../Redux/actions/auth';

const styles = StyleSheet.create({
    slide : {
      flex : 1 , 
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    title : { 
      fontSize : 40 , 
    } , 
    text : {
      fontSize : 20 
    }
})


const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  _renderItem = (item) => {
    return (
      <View style={[styles.slide , { backgroundColor : item.backgroundColor } ]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  }

  
}
const mapDispatchToProps = (dispatch) => {
  return {
    getToken : () => dispatch(authGetToken())
  }
}
const mapStateToProps = (state) => {
  const authState = state.auth.token ? true : false 
  return {
    auth : authState 
  }
}
export default connect(null , mapDispatchToProps)(Slider)