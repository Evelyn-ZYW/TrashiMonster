import React from 'react';
import './category.css';
import Router from 'next/router';
import Header from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import SquaButton from '../../comps/Button/SquaButton';


function SeeResult(){
  
  setTimeout(function(){
      Router.push("/Result");
  }, 1000)
}
function goBack(){
  
  setTimeout(function(){
      Router.push("/Duration");
  }, 1000)
}

const Organic = require('../../imgs/organic.png');
const Plastic = require('../../imgs/plastic.png');
const MixedPaper = require('../../imgs/mixedpaper.png');
const GlassCan = require('../../imgs/glass_can.png');
const Waste = require('../../imgs/waste.png');


const Category = ({ }) => <div className="body_page">
  <Header />
  <p className="sub_head">Choose a category to have a closer look at!</p>
  <div id="body_cont2">
    <br />
    <br />
    <br />
  
    <div id="cat_width">
      <SquaButton
        onClick={SeeResult}
        src={Organic}
        color="#13ca91"
        text="Organic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult}
        src={Plastic}
        color="#0090ff"
        text="Plastic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult}
        src={MixedPaper}
        color="#ffdc00"
        text="Mixed Paper"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult}
        src={GlassCan}
        color="#000000"
        text="Waste"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult}
        src={Waste}
        color="#9D9D9D"
        text="Glass & Can"
        width="120px"
        height="120px"
        fontSize="25px"
      />
    </div>
    <br />

  </div>
  <div className="the_footer">
    <ArrowButtonLeft onClick={goBack} />
  </div>

</div>

export default Category;