import React from 'react'
import './tips.css'

import Router from 'next/router'

function goSummary() {
  setTimeout(function () {
    Router.push('/Summary')
  }, 200)
}

function goBack_organic() {
  setTimeout(function () {
    Router.push('/Result/Result_organic')
  }, 200)
}

import Header from '../../../comps/Header'
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft'
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight'
import SquaButton from '../../../comps/Button/SquaButton'

const Organic = require('../../../imgs/organic.png')

const Tips = ({ color, text1, text2, text3, text4, text5 }) => (
  <div className="body_page">
    <Header />
    <SquaButton
      width="150px"
      height="150px"
      color={color}
      text={text1}
      src={Organic}
      opacity={1}
    />
    <div id="texts">
      <p id="heading">{text2}</p>
      <p id="tips_subtitle">Tips</p>
      <p className="body_texts">{text3}</p>
      <p className="body_texts">{text4}</p>
      <p className="body_texts">{text5}</p>
    </div>
    <p>
      Proceed to see other <b>Tips!</b>
    </p>
    <div className="the_footer">
      <ArrowButtonLeft onClick={goBack_organic} />
      <ArrowButtonRight onClick={goSummary} />
    </div>
  </div>
)

Tips.defaultProps = {
  opacity: 1,
  color: '#13ca91',
  text1: 'Organic',
  text2: 'Only take what you can eat',
  text3: 'You can still drink the milk in 2-3 days after the expiration date.',
  text4:
    "Bread past its expiration date can be safely eaten as long as it smells fine.",
  text5:
    'Frozen foods can be eaten long after their expiration date, whether it be vegetables or pastries.',
}

export default Tips
