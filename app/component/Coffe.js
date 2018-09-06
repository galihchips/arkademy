import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
export default class Coffe extends Component{

	render(){
		const {type, bean, volume} = this.props;
		return(
				<View>
					<Text>Ini adalah Coffe : {type} dari biji {bean} dan berjumlah {volume} liter</Text>
				</View>
			)
	}

}

Coffe.propTypes ={
	type: PropTypes.string.isRequired,
	bean: PropTypes.string.isRequired,
	volume: PropTypes.number
}