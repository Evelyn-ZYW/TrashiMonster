import React from 'react';
import './squa.css';

const SquaImg = require('../../../imgs/organic.png');

const SquaButton = ({text, src, color, onClick, width, height, fontSize }) =>
  <div
    id="square_button"
    style={{ backgroundColor: color, width: width, height: height, fontSize: fontSize }}
    onClick={onClick}
  >
    <img className="button_img" src={src} />
    <span>
      {text}
    </span>
  </div>;

SquaButton.defaultProps = {
  src: SquaImg,
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
