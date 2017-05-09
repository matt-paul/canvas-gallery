import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.mouseX = '';
    this.mouseY = '';
    this.ctx = '';
    this.rect = '';
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.updateCanvas();
  }

  onMouseDown(event) {
    console.log('mouse is down, whataya gonna do?')
    console.log(this.rect)
    this.mouseX = event.clientX - this.rect.left;
    this.mouseY = event.clientY - this.rect.top;
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    document.body.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove(event) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPicker.value;
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(this.mouseX, this.mouseY); // Start at the mouse position where mouse started to move
    this.mouseX = event.clientX - this.rect.left;
    this.mouseY = event.clientY - this.rect.top;
    this.ctx.lineTo(this.mouseX, this.mouseY);
    this.ctx.stroke();
  }

  onMouseUp(event) {
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    document.body.removeEventListener('mouseup', this.onMouseUp)
  }

  updateCanvas() {
    this.rect = this.canvas.getBoundingClientRect(); // this is used to counter the offset, ie the circle now appears with its center exactly at mouse position.
  }
  render() {
    const url = `picture/${this.props.uuid}`;

    return (
        <li>
          <canvas
            onMouseDown={this.onMouseDown}
            ref={(canvas) => { this.canvas = canvas; }}
            className={this.props.className}
            width={this.props.width}
            height={this.props.height}/>
          <input
            ref={(colorPicker) => { this.colorPicker = colorPicker; }}
            type="color"/>
      </li>
    );
  }
}

Picture.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
}

export default styled(Picture)`
  box-style: border-box;
  background-color:#ddc;
  border:solid 20px #eee;
  border-bottom-color:#fff;
  border-left-color:#eee;
  border-radius:2px;
  border-right-color:#eee;
  border-top-color:#ddd;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
`;
