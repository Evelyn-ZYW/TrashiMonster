import React from 'react'
import './tips.css'

import Router from 'next/router'

function goSummary() {
  setTimeout(function () {
    Router.push('/Summary')
  }, 200)
}

function goBack_plastic() {
  setTimeout(function () {
    Router.push('/Result/Result_plastic')
  }, 200)
}

import Header from '../../../comps/Header'
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft'
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight'
import SquaButton from '../../../comps/Button/SquaButton'

const Plastic = require('../../../imgs/plastic.png')

const Tips = ({ color, text1, text2, text3, text4, text5 }) => (
  <div className="body_page">
    <Header />
    <SquaButton
      width="150px"
      height="150px"
      color={color}
      text={text1}
      src={Plastic}
    />
    <div id="texts">
      <p id="heading">{text2}</p>
      <p id="tips_subtitle">Tips</p>
      <p className="body_texts">{text3}</p>
      <p className="body_texts">{text4}</p>
    </div>
    <p>
      Proceed to see other <b>Tips!</b>
    </p>
    <div className="the_footer">
      <ArrowButtonLeft onClick={goBack_plastic} />
      <ArrowButtonRight onClick={goSummary} />
    </div>
  </div>
)

Tips.defaultProps = {
  color: '#0090ff',
  text1: 'Plastic',
  text2: 'Use reusable containers, avoid food and drink wrapped in plastic',
  text3:
    'Invest in some quality containers for things that can stale quickly. ',
  text4: "Bring your own cups and straws for outside drinks.'",
}

export default Tips
