import React from 'react';
import './arrowleft.css';

const ArrowLeft = require("../../../imgs/arrow_left.svg")

const ArrowButtonLeft = ({ src, onClick }) => <div
  className="arrow_button" id="arrow_left" onClick={onClick}>
  <img src={src} />
</div>;

ArrowButtonLeft.defaultProps = {
  src: ArrowLeft
}

export default ArrowButtonLeft;