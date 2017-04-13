import React, { Component } from 'react';

export default class Picture extends Component {
  render(props) {
    const url = `picture/${this.props.data.uuid}`
    return (
      <li>
        <a href={url}>
        <h3>{this.props.data.name}</h3>
        </a>
      </li>
    )
  }
}
