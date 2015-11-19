import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';

export default class App extends Component {
	constructor(props) {
		super();
		this.closePop1=this.closePop1.bind(this);
		this.openPop1=this.openPop1.bind(this);
		this.state = {
			dialog: false
		};
	}

	closePop1() {
	 this.setState({
			dialog: false
		});
 	}

	openPop1() {
	 this.setState({
			dialog: true
		});
	}

  render() {
    return (
      <div>
      	<Header openPop={this.openPop1} />
				<MainSection closePop={this.closePop1} />
      </div>
    );
  }
}
