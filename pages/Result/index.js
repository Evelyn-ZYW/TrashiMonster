import React from 'react';
import './result.css';
import Router from 'next/router';
import Header from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import ArrowButtonRight from '../../comps/Button/ArrowButtonRight';
import RectButton from '../../comps/Button/RectButton';


function SeeTips(){
  
  setTimeout(function(){
      Router.push("/Tips");
  }, 1000)
}

function goBack(){
  
  setTimeout(function(){
      Router.push("/Category");
  }, 1000)
}

const Mountain = require('../../imgs/organic_week.png')
const ShockedMonster = require('../../imgs/monster.png')

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
  <div className="the_footer" >
    <ArrowButtonLeft onClick={goBack} />
    {/* <ArrowButtonRight /> */}
    <ArrowButtonRight />
  </div>
</div>;

Result.defaultProps = {
  text: "An elementary school can produce 82614.83 kg of organic waste in a year. The weight is approximately equal to 20 elephants.",
  src1: Mountain,
  src2: ShockedMonster,
}

export default Result;