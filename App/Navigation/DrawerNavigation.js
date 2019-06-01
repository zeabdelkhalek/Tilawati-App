import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import { createDrawerNavigator } from 'react-navigation';
import Drawer from '../Components/Drawer'
const MyDrawerNavigator = createDrawerNavigator(
	{
		HomaDrawer: {
			screen: BottomTabNavigator
		}
	},
	{
    drawerPosition: 'right' , 
    contentComponent : Drawer 
	}
);

export default MyDrawerNavigator;
