import './App.css';
import React from 'react';
import Calc from "./components/Calc/Calc";

class  App extends React.Component {
  render() {
    return (
      <div className="container">
        <Calc />
      </div>
    )
  }
}

export default App;
