import React from 'react';
import './rect.css';

const RectButton = ({ text, color, backgroundColor, fontSize, width, height, right, onClick }) =>
  <div
    className="button_rect"
    style={{ backgroundColor: backgroundColor, color: color, boxShadow: "1px 1px 1px" + backgroundColor, width: width, height: height, right: right, fontSize: fontSize }}
    onClick={onClick}
  >
    {text}
  </div>;

RectButton.defaultProps = {
  text: "rectangle",
  color: "#FFFFFF",
  backgroundColor: "#3b27ba"
}

export default RectButton;