import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
export default class Event extends Component{
	handleClick()
	{
		console.log('Button had been clicked');
	} 
  render(){
    return(
        <View>
        	<Text>Please Click Button Below</Text>
        	<TouchableOpacity onPress={()=>this.handleClick()}>
        		<Text>Click Here</Text>
        	</TouchableOpacity>
        </View>
      )
  }

}