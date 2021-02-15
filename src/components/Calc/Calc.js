import React from 'react';
import Display from "../Display/Display";
import Numpad from "../Numpad/Numpad";
import './Calc.css';

class Calc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            stringVal: '0',
            mathVal: 0,
            firstArg: 0,
            action: false,
        };
        this.getSign = this.getSign.bind(this);
        this.displayNumber = this.displayNumber.bind(this);
        this.checkResult = this.checkResult.bind(this);
        this.addPoint = this.addPoint.bind(this);
        this.setAction = this.setAction.bind(this);
        this.calcIt = this.calcIt.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    getSign(sign) {
        switch (true) {
            case !isNaN(+sign):
                this.displayNumber(sign);
                break;
            case (sign === '.'):
                this.addPoint(sign);
                break;
            case (sign === '='):
                this.calcIt(this.state.action);
                break;
            case (sign === 'C'):
                this.clearAll();
                break;
            default:
                this.setAction(sign);
        }
    }

    displayNumber(digit) {
        let result = '';

        if((this.state.mathVal || ~this.state.stringVal.indexOf('.')))
            result = (+this.state.stringVal).toString() + digit.toString();
        else
            result = digit.toString();

        this.setState(({
            stringVal: this.checkResult(result),
            mathVal: parseFloat(result),
        }));
    }

    checkResult(str) {
        return (str.length >= 16) ? (+str).toExponential() : str;
    }

    addPoint(point) {
        this.setState({
            stringVal: this.state.stringVal + point,
        })
    }

    setAction(sign) {
        const firstArg = this.state.mathVal;

        this.setState({
            stringVal: '0',
            mathVal: 0,
            firstArg: firstArg,
            action: sign,
        })
    }

    calcIt(action) {
        if(!action) return;

        let arg1 = this.state.firstArg,
            arg2 = this.state.mathVal,
            result = 0;

        switch (true) {
            case (action === '+'):
                result = arg1 + arg2;
                break;
            case (action === '-'):
                result = arg1 - arg2;
                break;
            case (action === '/'):
                result = arg1 / arg2;
                break;
            case (action === '*'):
                result = arg1 * arg2;
                break;
        }

        this.setState({
            stringVal: this.checkResult(result.toString()),
            mathVal: result,
            firstArg: 0,
            action: false,
        })

    }

    clearAll() {
        this.setState({
            stringVal: '0',
            mathVal: 0,
            firstArg: 0,
            action: false,
        });
    }

    render() {
        return (
            <div className="calc">
                <Display number={this.state.stringVal} />
                <Numpad handler={this.getSign}/>
            </div>
        )
    }
}

export default Calc;