import React from 'react'
import './tutorial.css'

import RectButton from '../../comps/Button/RectButton'
import SquaButton from '../../comps/Button/SquaButton'
import LongButton from '../../comps/Button/LongButton'

import Header from '../../comps/Header'

import Router from 'next/router'

function GoBack() {
  console.log(GoBack)
  setTimeout(function () {
    Router.push('/Location')
  }, 200)
}

const locImg1 = require('../../imgs/school.png')
const locImg2 = require('../../imgs/household.png')

const Organic = require('../../imgs/organic.png')
const Plastic = require('../../imgs/plastic.png')
const MixedPaper = require('../../imgs/mixedpaper.png')
const GlassCan = require('../../imgs/glass_can.png')
const Waste = require('../../imgs/waste.png')

const Mountain = require('../../imgs/organic_week.png')
const ShockedMonster = require('../../imgs/monster.png')

const Tutorial = ({}) => (
  <div id="tutorial_page">
    <Header />

    <div id="tutorial_body">
      <p className="tutorial_text">Step 1: Choose a place</p>

      <div className="tutorial_steps">
        <div id="location_page">
          <div>
            <img className="loc_img" src={locImg1} />
          </div>
          <div>
            <img className="loc_img" src={locImg2} />
          </div>
        </div>
      </div>

      <p className="tutorial_text">Step 2: Choose a time duration</p>

      {/* <div className="arrow-down"></div> */}
      <div className="tutorial_steps">
        <RectButton
          backgroundColor="#3b27ba"
          text="1 Week"
          width="100px"
          height="100px"
          fontSize="20pt"
          opacity="1"
          cursor="auto"
        />
        <RectButton
          backgroundColor="#e847a1"
          text="1 Month"
          width="100px"
          height="100px"
          fontSize="20pt"
          opacity="1"
          cursor="auto"
        />
        <RectButton
          backgroundColor="#13ca91"
          text="1 Year"
          width="100px"
          height="100px"
          fontSize="20pt"
          opacity="1"
          cursor="auto"
        />
      </div>

      <p className="tutorial_text">Step 3: Choose a garbage category</p>

      <div className="tutorial_steps_grid">
        <SquaButton
          src={Organic}
          color="#13ca91"
          text="Organic"
          width="110px"
          height="110px"
          fontSize="20px"
          opacity="1"
          cursor="auto"
        />
        <SquaButton
          src={Plastic}
          color="#0090ff"
          text="Plastic"
          width="110px"
          height="110px"
          fontSize="20px"
          opacity="1"
          cursor="auto"
        />
        <SquaButton
          src={MixedPaper}
          color="#ffdc00"
          text="Mixed Paper"
          width="110px"
          height="110px"
          fontSize="20px"
          opacity="1"
          cursor="auto"
        />
        <SquaButton
          src={GlassCan}
          color="#000000"
          text="Waste"
          width="110px"
          height="110px"
          fontSize="20px"
          opacity="1"
          cursor="auto"
        />
        <SquaButton
          src={Waste}
          color="#9D9D9D"
          text="Glass & Can"
          width="110px"
          height="110px"
          fontSize="20px"
          opacity="1"
          cursor="auto"
        />
      </div>

      <p className="tutorial_text">
        Step 4: See the result of how much garbage can be produced within chosen
        duration and category
      </p>

      <div className="tutorial_steps_column">
        <img className="ResultImg1" src={Mountain} />
        <img className="ResultImg2" src={ShockedMonster} />
      </div>

      <p className="tutorial_text">
        Step 5: See how you can help to reduce waste
      </p>

      <p className="tutorial_text">Step 6: See the summary</p>

      <div className="tutorial_steps">
        <RectButton
          text="Start Now!"
          color="#FFFFFF"
          backgroundColor="#0090FF"
          width="130px"
          height="50px"
          onClick={GoBack}
        />
      </div>
      <br />
      <br />
    </div>
  </div>
)

export default Tutorial
