import React from 'react';
import './rect.css';

const MyRectButton = ({text, color, onClick}) =>
  <div
    className="button_rect"
    style={{ backgroundColor: color2, boxShadow: "1px 1px 5px" + color2 }}
    onClick={onClick}
  >
    <div>
      {text}
    </div>
  </div>;

MyRectButton.defaultProps = {
  text: "I'm a rectangle button",
  color: "#3b27ba"
}

export default MyRectButton;