import React from 'react';
import './tips.css';

import Router from 'next/router';

function goSummary() {

  setTimeout(function () {
    Router.push("/Summary");
  }, 1000)
}

function goBack_waste() {

  setTimeout(function () {
    Router.push("/Result/Result_waste");
  }, 1000)
}

import Header from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../comps/Button/ArrowButtonRight';
import SquaButton from '../../comps/Button/SquaButton';
import RectButton from '../../comps/Button/RectButton';

const Waste = require('../../../imgs/waste.png');

const Tips = ({ color, text1, text2, text3, text4, text5}) => <div className="body_page">
  <Header />
  <SquaButton
    width="120px"
    height="120px"
    color={color}
    text={text1}
    src={Waste}
  />
  <p id="heading">{text2}</p>
  <div id="tips_body_cont1">
    <p id="tips_subtitle">Tips</p>
    <p className="body_texts">{text3}</p>
    <p className="body_texts">{text4}</p>
  </div>
  <p>Click on right arrow to see more <b>Tips!</b></p>
  <div className="the_footer">
    <ArrowButtonLeft onClick={goBack_waste}/>
    <ArrowButtonRight onClick={goSummary}/>
  </div>
</div>;

Tips.defaultProps = {
  color: "#9D9D9D",
  text1: "Waste",
  text2: "Learn to repair rather than discard, and use up the items you already have.",
  text3: "Before you buy something new to replace that item that has broken, see if you can mend it.",
  text4: "Sew up that hole, buy new screws for that gadget, paint that table.",
}

export default Tips;