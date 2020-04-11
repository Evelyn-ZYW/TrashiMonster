import React from 'react';
import './squa.css';

const MySquaButton = () =>
<div
    className="button_squa"
    style={{backgroundColor:color3, boxShadow: "1px 1px 5px" + color3 }}
    onClick={onClick}
  >
    <div>
      {text}
    </div>
  </div>;

MyButton3.defaultProps = {
  text: "I'm a square button",
  color: "#3b27ba"
}

export default MySquaButton;