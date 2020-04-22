import React from 'react';
import './arrow.css';

const arrowLeft = require('../../../imgs/arrow_left.svg');

const ArrowButtonLeft = ({onClick, src }) => <div
  id="button_arrow"
  onClick={onClick}
>
  <img src={src} />
</div>;

ArrowButtonLeft.defaultProps = {
  src: arrowLeft
}

export default ArrowButtonLeft;
