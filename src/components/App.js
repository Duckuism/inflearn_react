import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
 
class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: 'react'
		};
	}


    render(){
 
        return (
        	<div>
        		<button onClick={()=> {this.setState({name:'Velopert'});}}>Click me</button>
                <h1>Hello {this.state.name}</h1>
            </div>
        );
    }
}
 


export default hot(module)(App);