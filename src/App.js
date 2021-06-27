import React, { Component } from "react";
import Button from './components/Buttons';
import './assets/style.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      minValue: 1,
      maxValue: 1000,
    };
  }

  incrementCount = () => {
    if (this.state.minValue !== this.state.maxValue) {
      this.setState({
        minValue: this.state.minValue + 1
      });
    }
  };

  decrementCount = () => {
    if (this.state.minValue > 1) {
      this.setState({
        minValue: this.state.minValue - 1
      });
    }
  }

  handleInput = (e) => {
    let input = e.target.value
    if (input > 0 || input < this.state.maxValue) {
      this.setState({
        minValue: input
      })
    }
  }


  render() {
    let { minValue } = this.state;
    return (
      <div className="buttons">
        <Button title={"-"} action={this.decrementCount} />
        <input
          type="text"
          value={minValue}
          onChange={e => this.handleInput(e)}></input>
        <Button title={"+"} action={this.incrementCount} />
      </div >
    );
  }
}
export default App;
