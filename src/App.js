import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import logo from './logo.png';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 12,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <Container className="App">
      <Row className="text-white">
        <Col md={12}>
        <img height="60px" src={logo} alt="Logo" />
        <h4>Your source for local events</h4>
        </Col>
        </Row>
        <Row>
          <Col className="CitySearchWrapper" md={6}>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
          </Col>
          <Col className="NumberInputWrapper" md={6}>
            <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={events} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
