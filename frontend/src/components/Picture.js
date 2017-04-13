import React from 'react';

export default function Picture() {
  const url = `picture/${this.props.data.uuid}`;
  return (
    <li>
      <a href={url}>
        <h3>{this.props.data.name}</h3>
      </a>
    </li>
  );
}

Picture.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    uuid: React.PropTypes.string.isRequired,
  }),
};
