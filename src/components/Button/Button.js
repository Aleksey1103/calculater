import React from 'react';
import './Button.css';

class Button extends React.Component {

    render() {
        return(
            <button className='btn' onClick={() => this.props.handler(this.props.sign)}>{this.props.sign}</button>
        )
    }
}

export default Button;