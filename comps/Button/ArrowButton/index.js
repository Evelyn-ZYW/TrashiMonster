import React from 'react';
import './arrow.css';

const ArrowButtonRight = require('../../../imgs/arrow_right.svg');
const ArrowButtonLeft = require('../../../imgs/arrow_left.svg');

const MyArrowButton = ({ onClick }) =>
  <div>
    <img className="button_arrow" src={ArrowButtonLeft} />
    <img className="button_arrow" src={ArrowButtonRight} />
  </div>;

export default MyArrowButton;