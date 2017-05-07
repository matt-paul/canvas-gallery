import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    // this.updateCanvas = this.updateCanvas.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.mouseX = '';
    this.mouseY = '';
    this.ctx = '';
    this.rect = '';
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    // this.updateCanvas();
  }

  // updateCanvas() {
  //   console.log(this.ctx)
  //   this.rect = this.ctx.getBoundingClientRect(); // this is used to counter the offset, ie the circle now appears with its center exactly at mouse position.
  // }
  //
  onMouseDown(event) {
    this.mouseX = event.clientX - this.rect.left;
    this.mouseY = event.clientY - this.rect.top;
    // canvas.addEventListener('mousemove', this.onMouseMove);
    // document.body.addEventListener('mouseup', this.onMouseUp); //this is on the document body in case the mouse up event happens off the canvas!

  }
  onMouseMove(event) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.refs.colorPicker.value;
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(this.mouseX, this.mouseY); // Start at the mouse position where mouse started to move
    this.mouseX = event.clientX - this.rect.left;
    this.mouseY = event.clientY - this.rect.top;
    this.ctx.lineTo(this.mouseX, this.mouseY);
    this.ctx.stroke();
  }

  onMouseUp(event) {
    this.ctx.removeEventListener('mousemove', this.onMouseMove);
    document.body.removeEventListener('mouseup', this.onMouseUp)
  }

  render() {
    const url = `picture/${this.props.uuid}`;

    return (
      <div>
        <a href={url}>
          <canvas
            ref="canvas"
            className="picture"
            width={this.props.width}
            height={this.props.height}/>
          <input ref="colorpicker" type="color"/>
        </a>

      </div>
    );
  }

}


export default styled(Picture)`
  display: inline-block;
  border: 1px solid green;
  background-color: black;
  height: 1000px;
`
;

Picture.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
}
// window.onload = () => {
//   const canvas = document.querySelector('#canvas');
//   const this.ctx = canvas.getthis.ctx('2d');
//
//   let colorPicker = document.querySelector('#colorpicker');
//   let color;
//
//   colorPicker.addEventListener('onchange', () => {
//     color = colorPicker.value;
//   })
//
//
//   canvas.addEventListener('mousedown', onMouseDown)
//
// }
