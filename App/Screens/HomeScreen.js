import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from "../Components/Header";
import Tilawa from '../Components/Tilawa' ; 
class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header />
        <Tilawa />
        <Tilawa />
      </View>
    );
  }
}

export default HomeScreen;
