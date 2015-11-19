import React from 'react';
	class Popup extends React.Component {
	  render() {
			var divStyle = {
			  backgroundColor: '#f2f2f2',
			  height: '50px',
				width: '10%'
};
	        return (
	          <div style={divStyle}>
							<p>Немножко текста</p>
	            <button onClick={this.props.closePop}>Close</button>
	          </div>
	        )
	  };
	}
export default Popup;
