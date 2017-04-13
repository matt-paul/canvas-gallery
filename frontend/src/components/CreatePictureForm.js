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
      name: event.target.value
    });
  }

  handleWidth(event) {
    this.setState({
      width: event.target.value
    });
  }


  handleHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  handleSubmit(event) {
    const data = this.state;
    console.log(data)

    fetch('http://localhost:8000/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleName} />
        </label>
        <label>
          Height:
          <input type="number" value={this.state.height} onChange={this.handleHeight} />
        </label>
        <label>
          Width:
          <input type="number" value={this.state.width} onChange={this.handleWidth} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}