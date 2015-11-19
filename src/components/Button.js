import React from 'react';
	class Button extends React.Component {
	  render() {
	        return (
	          <div>
	            <button onClick={this.props.openPop}>Open</button>
	          </div>
	        )
	  };
	}
export default Button;
