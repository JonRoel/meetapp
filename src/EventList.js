import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
        <Row>
          <div>Current Events</div>
          <ul className="EventList">
            {events && events.map(event =>
              <li key={event.id}>
                <Event event={event} />
              </li>
            )}
          </ul>
        </Row>
    );
  }
}

export default EventList;