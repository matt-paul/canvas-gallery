import React, { Component } from 'react';

export default class CreatePictureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      width: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handleWidth = this.handleWidth.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleWidth(event) {
    this.setState({
      width: event.target.value,
    });
  }


  handleHeight(event) {
    this.setState({
      height: event.target.value,
    });
  }

  handleSubmit(event) {
    const data = this.state;
    fetch('http://localhost:8000/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={this.state.name} onChange={this.handleName} />
        </label>
        <label htmlFor="height">
          Height:
          <input id="height" type="number" value={this.state.height} onChange={this.handleHeight} />
        </label>
        <label htmlFor="width">
          Width:
          <input id="width" type="number" value={this.state.width} onChange={this.handleWidth} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
