import React, { Component } from 'react';
import Picture from './Picture';

export default function PictureList(props) {
  const pictures = props.pictures || [];
  return (
    <ul>
      {pictures.map(p =>
        <Picture
          key={p.uuid}
          data={p}
        />,
      )}
    </ul>
  );
}
