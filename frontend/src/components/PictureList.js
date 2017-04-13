import React, { Component } from 'react';
import Picture from './Picture';

export default class PictureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    }
  }
  componentWillMount() {
    fetch('http://localhost:8000/pictures')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then((data) => {
          this.setState({
            pictures: data,
          })
        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
  render() {
    return (
      <ul>
        {this.state.pictures.map(p =>
        <Picture
           data={p}
        />
        )}

      </ul>
    )
  }
}
