import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontSize = 15;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: this.fontSize,
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

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

export class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}
