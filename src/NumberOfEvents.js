import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 12,
    errorText: ''
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 99) {
      return this.setState({
        errorText: 'Please enter a number between 0 and 99',
        numberOfEvents:''
      });
    } else {
      this.setState({ 
        numberOfEvents: number,
        errorText: '',
      });
      this.props.updateEventCount(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <p>Limit search results </p>
        
        <input type="number" id="numberInput" value={this.state.numberOfEvents} className="numberInput" onChange={(e) => this.handleInputChanged(e)} />
        <div className="errorText"><ErrorAlert text={this.state.errorText} /></div>
      </div>
    );
  }
}

export default NumberOfEvents;