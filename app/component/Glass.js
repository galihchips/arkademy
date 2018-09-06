import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Coffe from './Coffe';
export default class Glass extends Component{

	render()
	{
		return(
				<View>
					<Text>Ini adalah Glass</Text>
					<Coffe type = "Espresso" bean = "Arabica" volume = {1}/>
				</View>
			)
	}

}