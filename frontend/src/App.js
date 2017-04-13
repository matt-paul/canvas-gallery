import React, { Component } from 'react';
import CreatePictureForm from './components/CreatePictureForm';
import PictureList from './components/PictureList';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePictureForm />
        <PictureList />
      </div>
    );
  }
}

export default App;
