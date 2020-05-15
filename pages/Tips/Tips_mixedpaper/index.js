import React from 'react';
import './tips.css';
import Router from 'next/router';

import Header from '../../../comps/Header';
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight';
import SquaButton from '../../../comps/Button/SquaButton';

function goSummary() {

  setTimeout(function () {
    Router.push("/Summary");
  }, 1000)
}

function goBack_paper() {

  setTimeout(function () {
    Router.push("/Result/mixedpaper");
  }, 1000)
}

const MixedPaper = require('../../../imgs/mixedpaper.png');

const Tips = ({ color, text1, text2, text3, text4, text5}) => <div className="body_page">
  <Header />
  <SquaButton
    width="120px"
    height="120px"
    color={color}
    text={text1}
    src={MixedPaper}
  />
  <p id="heading">{text2}</p>
  <div id="tips_body_cont1">
    <p id="tips_subtitle">Tips</p>
    <p className="body_texts">{text3}</p>
    <p className="body_texts">{text4}</p>
  </div>
  <p>Click on right arrow to see more <b>Tips!</b></p>
  <div className="the_footer">
    <ArrowButtonLeft onClick={goBack_paper}/>
    <ArrowButtonRight onClick={goSummary}/>
  </div>
</div>;

Tips.defaultProps = {
  color: "#ffdc00",
  text1: "Mixed Paper",
  text2: "Choose eEditions instead of physical versions. Read e-book instead of physical ones and recycle paper properly.",
  text3: "Cancel your magazine and newspaper subscriptions and read them online or at the library.",
  text4: "Ask for electronic receipt instead of printed receipt.",
}

export default Tips;