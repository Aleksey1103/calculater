import React, {Component} from 'react';
import Button from "../Button/Button";
import './Numpad.css';


class Numpad extends React.Component {

    constructor(props) {
        super(props);
        this.buttons = [7,8,9,'+',4,5,6,'-',1,2,3,'/','C',0,'.','*','='];
    }

    render() {
        return(
            <div className="numpad">
                {this.buttons.map(button=> {
                    return <Button key={button} sign={button} handler={this.props.handler}/>;
                })}
            </div>
        )
    }
}

export default Numpad;