import React from 'react';
import Popup from './Popup';

	class MainSection extends React.Component {
		constructor(props) {
	    super();

			this.state = {
	      dialog: false
	    };
	  }



	  render() {
			var popup = this.state.dialog ? <Popup closePop={this.closePop} /> : "";
	        return (
	          <div>
	            {popup}
	          </div>
	        )
	  }
	}
export default MainSection;
