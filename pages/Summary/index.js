import React from 'react';
import './summary.css';

import Router from 'next/router';

function goHome(){
  
  setTimeout(function(){
      Router.push("/Home");
  }, 1000)
}

import Header from '../../comps/Header';
import Footer from '../../comps/Footer';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import RectButton from '../../comps/Button/RectButton';
import LongButton from '../../comps/Button/LongButton';
import ArrowButtonRight from '../../comps/Button/ArrowButtonRight';

const Organic = require('../../imgs/organic.png');
const Plastic = require('../../imgs/plastic.png');
const MixedPaper = require('../../imgs/mixedpaper.png');
const GlassCan = require('../../imgs/glass_can.png');
const Waste = require('../../imgs/waste.png');

const Summary = ({ src1, src2, src3, src4, src5, }) => <div className="body_page">
  <Header />
  <div id="summary_body_cont1">
    <LongButton
      color="#13ca91"
      src={src1}

    />
    <LongButton
      color="#0090ff"
      src={src2}
      text1="Plastic"
      text2="Use reusable containers, avoid food and drink wrapped in plastic"
    />
    <LongButton
      color="#ffdc00"
      src={src3}
      text1="Mixed Paper"
      text2="Choose eEditions instead of physical versions"
    />
    <LongButton
      color="#9D9D9D"
      src={src4}
      text1="Glass & Can"
      text2="Reuse or recycle them properly"
    />
    <LongButton
      color="#000000"
      src={src5}
      text1="Waste"
      text2="Repair rather than discard & use up the items you already have"
    />
  </div>
  <div className="the_footer">
    <ArrowButtonLeft />
    <ArrowButtonRight />
  </div>

</div>;

Summary.defaultProps = {
  text: "",
  src1: Organic,
  src2: Plastic,
  src3: MixedPaper,
  src4: GlassCan,
  src5: Waste
}

export default Summary;