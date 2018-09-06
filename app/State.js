import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
export default class State extends Component{
	constructor() {
    super();
  
    this.state = {
      number :0,
      text: ""
    };
  }
  componentDidMount(){
    setInterval(()=> {
      this.setState({
        number : this.state.number + 1
      });
    }, 1000);
  }
  handleClick(myName){
    this.setState({
      number : this.state.number + 1,
      text : "Hello React"
    })
  }
	
  render(){
    const myName = "Clicked";
    return(
        <View>
        	<Text>Please Click Button Below</Text>
        	<TouchableOpacity onPress={()=>this.handleClick(myName)}>
        		<Text>{this.state.text}</Text>
            <Text>Click Here</Text>
        	</TouchableOpacity>
        </View>
      )
  }

}