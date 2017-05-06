import React from 'react';

export default function Button (props) {
  return (
    <button
      onClick={props.handleClickEvent}
      onDoubleClick={props.handleClickEvent}
    >
      Click me!
      </button>
  )
}
