import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  
  state = {
    query:'',
    suggestions: [],
    showSuggestions: false,
    infoText:''
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    if (suggestions.length === 0){
      this.setState({
        query: value,
        infoText: `There are no matches for ${value}. Try again.`
      });
    } else {
      this.setState({ 
        query: value,
        suggestions,
        infoText:'' 
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion);
  }

  render() { 
    return (
      <div className="CitySearch">
        <p>Search your city</p>
        <input type="text" 
          className="city" 
          value={this.state.query} 
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }} />   
        <div>
          <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
            <b><InfoAlert text={this.state.infoText} /></b>
            {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch