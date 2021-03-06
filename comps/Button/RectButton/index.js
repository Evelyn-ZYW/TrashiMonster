import React from 'react';
import './rect.css';

const RectButton = ({ text, color, backgroundColor, fontSize, width, height, right, onClick, opcity }) =>
  <div
    className="button_rect"
    style={{ backgroundColor: backgroundColor, color: color, width: width, height: height, right: right, fontSize: fontSize, opcity:opcity }}
    onClick={onClick}
  >
    {text}
  </div>;

RectButton.defaultProps = {
  text: "rectangle",
  color: "#FFFFFF",
  backgroundColor: "#3b27ba",
}

export default RectButton;