import React from 'react';
import './category.css';
import Router from 'next/router';
import Header from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import SquaButton from '../../comps/Button/SquaButton';


function SeeResult_organic() {

  setTimeout(function () {
    Router.push("/Result/Result_organic");
  }, 200)
}
function SeeResult_plastic() {

  setTimeout(function () {
    Router.push("/Result/Result_plastic");
  }, 200)
}
function SeeResult_mixed() {

  setTimeout(function () {
    Router.push("/Result/Result_mixedpaper");
  }, 200)
}
function SeeResult_glass() {

  setTimeout(function () {
    Router.push("/Result/Result_glass");
  }, 200)
}
function SeeResult_waste() {

  setTimeout(function () {
    Router.push("/Result/Result_waste");
  }, 200)
}
function goBack() {

  setTimeout(function () {
    Router.push("/Duration");
  }, 200)
}

const Organic = require('../../imgs/organic.png');
const Plastic = require('../../imgs/plastic.png');
const MixedPaper = require('../../imgs/mixedpaper.png');
const GlassCan = require('../../imgs/glass_can.png');
const Waste = require('../../imgs/waste.png');


const Category = ({ }) => <div className="body_page">
  <Header />
  <p className="sub_head">Choose a category to have a closer look at!</p>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div id="category_page">


    <div id="cat_width">
      <SquaButton
        onClick={SeeResult_organic}
        src={Organic}
        color="#13ca91"
        text="Organic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult_plastic}
        src={Plastic}
        color="#0090ff"
        text="Plastic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult_mixed}
        src={MixedPaper}
        color="#ffdc00"
        text="Mixed Paper"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult_glass}
        src={GlassCan}
        color="#000000"
        text= "Glass & Can"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        onClick={SeeResult_waste}
        src={Waste}
        color="#9D9D9D"
        text= "Waste"
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