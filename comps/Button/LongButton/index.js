import React from 'react';
import './long.css';

const Organic = require('../../../imgs/organic.png');
const Plastic = require('../../../imgs/plastic.png');
const MixedPaper = require('../../../imgs/mixedpaper.png');
const GlassCan = require('../../../imgs/glass_can.png');
const Waste = require('../../../imgs/waste.png');

const LongButton = ({ onClick, color, text1, text2, src }) => <div
  id="button_long"
  style={{ backgroundColor: color, boxShadow: "1px 1px 1px" + color}}
  onClick={onClick}
>
  <img id="long_button_img" src={src} />
  <div id="long_button_texts">
    <p id="long_button_text1">{text1}</p>
    <p id="long_button_text2">{text2}</p>
  </div>
</div>;

LongButton.defaultProps = {
  color: "#13ca91",
  text1: "Organic",
  text2: "Only take what you can eat",
  src: Organic
}

export default LongButton;