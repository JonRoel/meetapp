import React, { Component } from 'react';


class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 12,
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({ 
      numberOfEvents: number,
    });
    this.props.updateEventCount(event.target.value);
  };

  render() {
    return (
      <div>
        <p>Input number of events </p><input type="number" id="numberInput" value={this.state.numberOfEvents} className="numberInput" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}


export default NumberOfEvents;