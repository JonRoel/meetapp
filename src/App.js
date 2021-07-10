import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This meetup app should render</h1>
        <CitySearch />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;
