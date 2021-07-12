import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations } from './api';
import { mockData } from './mockData';

class App extends Component {
  render() {
    const locations = extractLocations(mockData);
    return (
      <div className="App">
      <h1>This meetup app should render</h1>
        <CitySearch locations={locations} />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;
