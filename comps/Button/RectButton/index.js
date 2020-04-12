import React from 'react';
import './rect.css';

const RectButton = ({ text, color, onClick }) =>
  <div
    className="button_rect"
    style={{ backgroundColor: color, boxShadow: "1px 1px 5px" + color }}
    onClick={onClick}
  >
      {text}
  </div>;

RectButton.defaultProps = {
  text: "rectangle",
  color: "#3b27ba"
}

export default RectButton;