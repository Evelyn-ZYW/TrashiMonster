import React from 'react';
import './arrowright.css';

const ArrowRight = require("../../../imgs/arrow_right.svg")

const ArrowButtonRight = ({ src }) => <div
  className="arrow_button" id="arrow_right">
  <img src={src} />
</div>;

ArrowButtonRight.defaultProps = {
  src: ArrowRight
}

export default ArrowButtonRight;