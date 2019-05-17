import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Hello from '../src/Hello';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};
	}
	render() {
		return (
			<div>
				<Hello {...this.state} />
			</div>
		);
	}
}

export default App;
