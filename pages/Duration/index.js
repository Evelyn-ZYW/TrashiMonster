import React from 'react'
import './duration.css'
import Router from 'next/router'

function goCategory() {
  setTimeout(function () {
    Router.push('/Category')
  }, 200)
}

function goBack() {
  setTimeout(function () {
    Router.push('/Location')
  }, 200)
}

import Header from '../../comps/Header'
import Footer from '../../comps/Header'
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft'
import RectButton from '../../comps/Button/RectButton'

const Duration = () => (
  <div className="body_page">
    <Header />
    <p className="sub_head">
      Do you know how much waste can be produced within below periods?
    </p>

    <div id="duration_page">
      <div id="button_cont">
        <RectButton
          onClick={goCategory}
          backgroundColor="#3b27ba"
          text="1 Week"
          width="100px"
          height="100px"
          maxWidth="50px"
          fontSize="25pt"
        />
        <RectButton
          onClick={goCategory}
          backgroundColor="#e847a1"
          text="1 Month"
          width="100px"
          height="100px"
          maxWidth="50px"
          fontSize="25pt"
        />
        <RectButton
          onClick={goCategory}
          backgroundColor="#13ca91"
          text="1 Year"
          width="100px"
          height="100px"
          maxWidth="50px"
          fontSize="25pt"
        />
      </div>
    </div>
    <div className="the_footer">
      <ArrowButtonLeft onClick={goBack} />
    </div>
  </div>
)

export default Duration
