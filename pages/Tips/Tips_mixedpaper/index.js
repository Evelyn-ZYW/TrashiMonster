import React from 'react'
import './tips.css'
import Router from 'next/router'

import Header from '../../../comps/Header'
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft'
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight'
import SquaButton from '../../../comps/Button/SquaButton'

function goSummary() {
  setTimeout(function () {
    Router.push('/Summary')
  }, 200)
}

function goBack_paper() {
  setTimeout(function () {
    Router.push('/Result/Result_mixedpaper')
  }, 200)
}

const MixedPaper = require('../../../imgs/mixedpaper.png')

const Tips = ({ color, text1, text2, text3, text4, text5 }) => (
  <div className="body_page">
    <Header />
    <SquaButton
      width="150px"
      height="150px"
      color={color}
      text={text1}
      src={MixedPaper}
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
      <ArrowButtonLeft onClick={goBack_paper} />
      <ArrowButtonRight onClick={goSummary} />
    </div>
  </div>
)

Tips.defaultProps = {
  color: '#ffdc00',
  text1: 'Mixed Paper',
  text2:
    'Read e-books instead and recycle paper properly',
  text3:
    'Cancel your magazine and newspaper subscriptions and read them online or at the library.',
  text4: 'Ask for electronic receipt instead of printed receipt.',
}

export default Tips
