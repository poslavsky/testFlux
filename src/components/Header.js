import React from 'react';
import Button from './Button';

	class Header extends React.Component {
		constructor(props) {
			super();
		}
	  render() {
	        return (
	          <div>
	            <Button openPop={this.openPop} />
	          </div>
	        )
	  };
	}
export default Header;
