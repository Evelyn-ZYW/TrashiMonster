import React from 'react';
import './tips.css';

import Header from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../comps/Button/ArrowButtonRight';
import SquaButton from '../../comps/Button/SquaButton';

const Organic = require('../../imgs/organic.png');

const Tips = ({ color, text1, text2, text3, text4, text5, }) => <div className="body_page">
  <Header />
  <SquaButton
    color={color}
    text={text1} />
  <p id="heading">{text2}</p>
  <div id="tips_body_cont1">
    <p id="tips_subtitle">Tips</p>
    <p>{text3}</p>
    <p>{text4}</p>
    <p>{text5}</p>
  </div>
  <div className="the_footer">
    <ArrowButtonLeft />
    <ArrowButtonRight />
  </div>
</div>;

Tips.defaultProps = {
  color: "#13ca91",
  text1: "Organic",
  text2: "Only take what you can eat",
  text3: "You can still drink the milk in 2-3 days after the expiration date.",
  text4: "Bread past its expiration date can be safely eaten as long as it smells fine. So don't toss it out because it's 'too old.'",
  text5: "Frozen foods can be eaten long after their expiration date. Freezing food is the easiest way to extend its shelf life, whether it be vegetables or pastries.",
}

export default Tips;