import React from 'react';
import './squa.css';

const SquaImg = require('../../../imgs/organic.png');

const SquaButton = ({ text, img, color, onClick }) =>
  <div
    className="button_squa"
    style={{ backgroundColor: color, boxShadow: "1px 1px 5px" + color }}
    onClick={onClick}
  >
    <img className="button_img" src={img} />
    <span>
      {text}
    </span>
  </div>;

SquaButton.defaultProps = {
  img: SquaImg,
  text: "Square",
  color: "#13ca91"
}

export default SquaButton;