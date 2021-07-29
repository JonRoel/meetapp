import React, { Component } from 'react';
import moment from 'moment';
import { Button, Card } from 'react-bootstrap';
import { mockData } from './mockData';

class Event extends Component {
  constructor(props) {
		super(props);
		this.state = {
			opened: false,
      mockData: '',
      event: {}
		};
		this.toggleBox = this.toggleBox.bind(this);
  }
  
  toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

  mockData = JSON.parse(JSON.stringify(mockData));

  render() {
    var { btnText, event } = this.props;
		const { opened } = this.state;
    const eventStart = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a');

		if (opened) {
			btnText ='Hide Details';
		} else {
			btnText ='View Details';
		}
    return (
      <Card>
        <Card.Body>
          <Card.Title>{event.summary} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`${eventStart}`}</Card.Subtitle>
          <Card.Text>{event.location}</Card.Text>
          <div className="ToggleButtonWrapper">
            <Button variant="link" className="ToggleButton" onClick={this.toggleBox}>{btnText}</Button>
          </div>
          {opened && (					
            <Card.Text className="eventDetails">
              {event.description}
            </Card.Text>
            )}
        </Card.Body>
      </Card>
    );
  }
}

export default Event;