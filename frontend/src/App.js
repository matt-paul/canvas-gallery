import React, { Component } from 'react';
import CreatePictureForm from './components/CreatePictureForm';
import PictureList from './components/PictureList';
import styled from 'styled-components';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.pictures = [];

    this.getPictures = this.getPictures.bind(this);
  }
  componentWillMount() {
    this.state = {
      pictures: this.getPictures(),
    }
  }

  getPictures() {
    fetch('http://localhost:8000/pictures')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          return;
        }

        response.json().then((data) => {
          this.setState({
            pictures: data,
          });
        });
      },
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }


  render() {
    return (
      <div className="App">
        <CreatePictureForm
          getPictures={this.getPictures}
        />
        <PictureList
          pictures={this.state.pictures}
          getPictures={this.getPictures}
        />
      </div>
    );
  }
}

export default styled(App)`
  outline: 1px solid red;
`;
// export default App;
