import React from 'react'
import './tips.css'

import Router from 'next/router'

function goSummary() {
  setTimeout(function () {
    Router.push('/Summary')
  }, 200)
}

function goBack_glass() {
  setTimeout(function () {
    Router.push('/Result/Result_glass')
  }, 200)
}

import Header from '../../../comps/Header'
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft'
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight'
import SquaButton from '../../../comps/Button/SquaButton'

const GlassCan = require('../../../imgs/glass_can.png')

const Tips = ({ color, text1, text2, text3, text4, text5 }) => (
  <div className="body_page">
    <Header />
    <SquaButton
      width="150px"
      height="150px"
      color={color}
      text={text1}
      src={GlassCan}
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
      <ArrowButtonLeft onClick={goBack_glass} />
      <ArrowButtonRight onClick={goSummary} />
    </div>
  </div>
)

Tips.defaultProps = {
  color: '#000000',
  text1: 'Glass & Can',
  text2: 'Reuse or recycle them',
  text3: 'Glass can be melted down and reshaped for new usage.',
  text4:
    'Aluminum cans are the most recyclable of all recyclable materials. Recycled aluminum cans will be back on the store shelf in 60 days!',
}

export default Tips
