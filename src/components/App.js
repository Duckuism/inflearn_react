import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Contact from './Contact' ;

class App extends Component {

    render(){
 
        return (
        	<Contact/>
        );
    }
}
 


export default hot(module)(App);