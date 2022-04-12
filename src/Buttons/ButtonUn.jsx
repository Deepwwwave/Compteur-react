import React, { Component } from "react";
import './button.css'

export default class ButtonUn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //compteur
      count: 0,
      // chrono activ ou non
      toggle: false,
      // setInterval
      timer: null,
      // btn reset display ou non
      btnReset: false,
    };
  }

    // start incr count
  start = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // interval methode start
  chrono = () => {
    if (this.state.toggle === false) {
      this.setState({
        timer: setInterval(this.start, 1000),
        btnReset: true,
      });
    }
    this.setState({
      toggle: true,
    });
  };

  // stop > clear Interval > 
  stop = () => {
    clearInterval(this.state.timer);
    this.setState({
      toggle: false,
    });
  };

  // reset states + clearInterval
  reset = () => {
    clearInterval(this.state.timer);
    this.setState({
      toggle: false,
      count: 0,
      btnReset: false,
    });
  };
  

  render() {
    console.log(this.state.btnReset)
    console.log(this.state.toggle);
    return (
      <>
        <button onClick={this.chrono}>Start Count +1</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset} className={this.state.btnReset ? "display" : "displayNone"}>Reset</button>
        <p>{`${this.state.count}`}</p>
      </>
    );
  }
}
