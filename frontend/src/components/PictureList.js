import React from 'react';
import Picture from './Picture';
import PropTypes from 'prop-types';

export default function PictureList(props) {
  const pictures = props.pictures || [];
  return (
    <ul>
      {pictures.map(p =>
        <Picture
          key={p.uuid}
          name={p.name}
          height={p.height}
          width={p.width}
          uuid={p.uuid}
        />,
      )}
    </ul>
  );
}

PictureList.propTypes = {
  pictures: PropTypes.array,
}
