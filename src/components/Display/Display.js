import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        return(
          <div className="display">
              {this.props.number.toString()}
          </div>
        );
    }
}

export default Display;