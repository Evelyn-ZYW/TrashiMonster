import React from 'react';
import './tips.css';

import Router from 'next/router';

function goSummary() {

  setTimeout(function () {
    Router.push("/Summary");
  }, 1000)
}

function goBack_plastic() {

  setTimeout(function () {
    Router.push("/Result/Result_plastic");
  }, 1000)
}

import Header from '../../../comps/Header';
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight';
import SquaButton from '../../../comps/Button/SquaButton';

const Plastic = require('../../../imgs/plastic.png');

const Tips = ({ color, text1, text2, text3, text4, text5}) => <div className="body_page">
  <Header />
  <SquaButton
    width="120px"
    height="120px"
    color={color}
    text={text1}
    src={Plastic}
  />
  <p id="heading">{text2}</p>
  <div id="tips_body_cont1">
    <p id="tips_subtitle">Tips</p>
    <p className="body_texts">{text3}</p>
    <p className="body_texts">{text4}</p>
  </div>
  <p>Click on right arrow to see more <b>Tips!</b></p>
  <div className="the_footer">
    <ArrowButtonLeft onClick={goBack_plastic}/>
    <ArrowButtonRight onClick={goSummary}/>
  </div>
</div>;

Tips.defaultProps = {
  color: "#0090ff",
  text1: "Plastic",
  text2: "Use reusable containers, avoid food and drink wrapped in plastic",
  text3: "Invest in some quality containers for things that can stale quickly. ",
  text4: "Bring your own cups and straws for outside drinks.'",
}

export default Tips;