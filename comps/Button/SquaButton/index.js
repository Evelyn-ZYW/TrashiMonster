import React from 'react';
import './squa.css';

const SquaImg = require('../../../imgs/organic.png');

const SquaButton = ({ className, text, img, color, onClick, width, height, fontSize }) =>
  <div
    className={"default_class " + className}
    style={{ backgroundColor: color, boxShadow: "1px 1px 5px" + color, width: width, height: height, fontSize: fontSize }}
    onClick={onClick}
  >
    {/* <img className="button_img" src={SquaImg} /> */}
    <span>
      {text}
    </span>
  </div>;

SquaButton.defaultProps = {
  className: "",
  width: "100px",
  height: "100px",
  fontSize: "30px",
}

export default SquaButton;

{/* <SquaButton 
className="without_image"
color="#e847a1"
text="1 week"
 />;

<SquaButton
  className="with_image"
  color="#3b27ba"
  img="SquaImg"
  text="Organic"
/>; */}
