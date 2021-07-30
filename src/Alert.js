import React, { Component } from 'react'

class Alert extends Component {
  constructor(props) {
    super(props);
      this.color = null;
    }

    getStyle = () => {
      return {
        color: this.color,
      };
    }

    render() {
      return (
        <div className="Alert">
          <p style={this.getStyle()}>{this.props.text}</p>
        </div>
      );
    }
}

//Alert for no city match
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'goldenrod';
  }
  getStyle = () => {
    return {
      color: this.color,
      background: '#fff',
      margin: '0px',
      padding: '0px 10px',
    };
  }
}

//Alert for incorrect number input
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

//Alert for no network connection
class NetworkAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#f8a01f';
  }
}

export { InfoAlert, ErrorAlert, NetworkAlert };