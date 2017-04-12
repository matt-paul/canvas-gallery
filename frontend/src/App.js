import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Sketching out required components.  Doing these all as class based components now, but once am sure that I will not requie lifecycle methods, will refactor into functional stateless components
class PictureList extends Component {
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

// class Picture extends Componet {
//   render() {
//     return (
//
//     )
//   }
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <PictureList />
      </div>
    );
  }
}

export default App;
