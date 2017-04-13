import React, { Component } from 'react';

export default class PictureList extends Component {
  componentWillMount() {
    // fetch the list of pictures
    fetch('http://localhost:8000/pictures')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  render() {
    return (
      <p>These will be my pictures</p>
    )
  }
}
