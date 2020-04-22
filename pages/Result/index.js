import React from 'react';
import './result.css';

import Header from '../../comps/Header';
import ArrowButton from '../../comps/Button/ArrowButtonLeft';

const Mountain = require('../../imgs/organic_week.png')
const ShockedMonster = require('../../imgs/monster.png')

const Result = ({ text, src1, src2 }) => <div className="body_page">
  <Header />
  <div id="result_body_cont1">
    <p className="ResultText" >{text}</p>
    <div id="result_body_cont2">
      <img className="ResultImg1" src={src1} />
      <br />
      <img className="ResultImg2" src={src2} />
    </div>

  </div>
  <ArrowButton />
</div>;

Result.defaultProps = {
  text: "An elementary school can produce 82614.83 kg of organic waste in a year. The weight is approximately equal to 20 elephants.",
  src1: Mountain,
  src2: ShockedMonster,
}

export default Result;