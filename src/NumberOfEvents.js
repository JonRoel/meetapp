import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    query:'',
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ 
      query: value,
    });
  };

  render() { 
    return (
      <div className="CitySearch">
        
        <input type="text" id="citySearch" className="numberInput" value={this.state.query} onChange={this.handleInputChanged} />

      </div>
    );
  }
}

export default NumberOfEvents;