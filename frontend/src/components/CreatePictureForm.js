import React, { Component } from 'react';

export default class CreatePictureFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      height: '',
      width: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
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
      this.props.getPictures();
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    return (
      <CreatePictureForm
        picture={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleClickEvent={this.handleClickEvent}
      />
    )
  }
}


function CreatePictureForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          name="name"
          type="text"
          value={props.name}
          onChange={props.handleChange} />
      </label>
      <label htmlFor="height">
        Height:
        <input
          name="height"
          type="text"
          value={props.height}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="height">
        Width:
        <input
          name="width"
          type="text"
          value={props.width}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
