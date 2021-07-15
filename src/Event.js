import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';



class Event extends Component {
  constructor(props) {
		super(props);
		this.state = {
			opened: false,
      mockData: '',
		};
		this.toggleBox = this.toggleBox.bind(this);
  }
  
  toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

  render() {
    var { btnText } = this.props;
    //const { summary, location, start, htmlLink, description } = this.props.events;
		const { opened } = this.state;

		if (opened){
			btnText ='Hide Details';
		}else{
			btnText ='View Details';
		}
    return (
      <Card>
        <Card.Body>
          <Card.Title>Event Title: </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Event Location</Card.Subtitle>
          <Card.Text>Event date and Time</Card.Text>
          <div className="ToggleButtonWrapper">
          <Button variant="link" className="ToggleButton" onClick={this.toggleBox}>{btnText}</Button>
          </div>
          {opened && (					
            <Card.Text className="extraDetails">
              This is the text that should show
            </Card.Text>
            )}
          </Card.Body>
      </Card>
    );
  }
}

export default Event;