import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 12,
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ 
      numberOfEvents: value,
    });
    this.props.updateEventCount(value);
  };

  render() {
    const numberOfEvents = this.state; 
    return (
      <div>
        <p>Input number of events </p><input type="number" id="numberInput" className="numberInput" value={numberOfEvents} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;