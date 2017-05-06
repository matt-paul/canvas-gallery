import React from 'react';

export default function Picture(props) {
  const url = `picture/${props.data.uuid}`;
  return (
    <li>
      <a href={url}>
        <h3>The name is ... {props.data.name}</h3>
        <h3>The height is ... {props.data.height}</h3>
        <h3>The width is ... {props.data.width}</h3>
      </a>
    </li>
  );
}
