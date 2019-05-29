import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from "../Components/Header";
class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header : Header 
    }
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> hOME </Text>
      </View>
    );
  }
}

export default HomeScreen;
