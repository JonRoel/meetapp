import React, { Component } from 'react';
import Event from './Event';
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row className="mt-3">
        <Col md={12}>
          <ul className="EventList">
            {events && events.map(event =>
              <li key={event.id} className="EventItem">
                <Event event={event} />
              </li>
            )}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default EventList;