import React, { Component } from 'react';
import { Collapse, Button, Card } from 'react-bootstrap';

class Event extends Component {
  constructor(){
    super();
    this.state = { 
      showText: false
    };
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Event Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Event Location</Card.Subtitle>
          <Card.Text>Event date and Time</Card.Text>
          <Button variant="link" className="displayMore">Show Details</Button>
          <Collapse className="extraDetails" in={this.state.showText}>
            <div>
              <Card.Text>Event Description</Card.Text>
            </div>
          </Collapse>
          </Card.Body>
      </Card>
    );
  }
}

export default Event;