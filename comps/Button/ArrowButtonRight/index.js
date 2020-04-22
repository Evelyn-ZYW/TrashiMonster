import React from 'react';
import './arrow.css';

const ArrowRight = require('../../../imgs/arrow_right.svg');

const ArrowButtonRight = ({onClick, src }) => <div
  id="button_arrow"
  onClick={onClick}>
  <img src={src} />
</div>;

ArrowButtonLeft.defaultProps = {
  src: ArrowRight
}

export default ArrowButtonRight;
