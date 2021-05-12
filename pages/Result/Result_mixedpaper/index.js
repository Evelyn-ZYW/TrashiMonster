import React from 'react';
import './result.css';
import Router from 'next/router';
import Header from '../../../comps/Header';
import ArrowButtonLeft from '../../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../../comps/Button/ArrowButtonRight';


function SeeTips_mixed(){
  
  setTimeout(function(){
      Router.push("/Tips/Tips_mixedpaper");
  }, 200)
}

function goBack(){
  
  setTimeout(function(){
      Router.push("/Category");
  }, 200)
}

const Mountain = require('../../../imgs/organic_week.png')
const ShockedMonster = require('../../../imgs/monster_squished.png')

const Result = ({ text, src1, src2}) => <div className="body_page">
  <Header />
  <div id="result_body_cont1">
    <p className="ResultText" >{text}</p>
    <div id="result_body_cont2">
      <img className="ResultImg1" src={src1}/>
      <br />
      <img className="ResultImg2" src={src2} />
    </div>
  </div>
  <p>Click on right arrow to see <b>How to Reduce Garbage!</b></p>
  <div className="the_footer" >
    <ArrowButtonLeft onClick={goBack} />
    <ArrowButtonRight onClick={SeeTips_mixed}/>
  </div>
</div>;

Result.defaultProps = {
  text: "An elementary school will produce approximately 626,220kg of mixed paper in a year. The weight approximately equals to 104 elephants",
  src1: Mountain,
  src2: ShockedMonster,
}

export default Result;