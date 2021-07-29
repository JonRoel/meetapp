import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre'
import { Container, Row, Col } from 'react-bootstrap';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { NetworkAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './nprogress.css';
import logo from './logo.png';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 12,
    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) });
        }
        if (!navigator.onLine) {
          this.setState({networkText: <div className="networkNotification">'Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet'</div>});
          console.log("offline mode");
        } else {
          this.setState({ networkText: '' });
        };
      });
    }
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

  // Retrieve Data for Chart
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, events, numberOfEvents, networkText } = this.state;
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
          <Col><NetworkAlert text={networkText}/></Col>
        </Row>
        <Row>
          <Col md={12}  className="chartWrapper">
            <h4>Events in each city</h4>
            <div className="data-vis-wrapper">
              <EventGenre events={events} />
              <ResponsiveContainer height={400}>
                <ScatterChart
                  margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="City" />
                  <YAxis type="number" dataKey="number" name="Number of events" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={events} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
