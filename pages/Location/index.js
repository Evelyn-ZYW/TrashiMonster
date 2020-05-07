import React from 'react';
import './location.css';

import Router from 'next/router';

function goDuration() {

  setTimeout(function () {
    Router.push("/Duration");
  }, 1000)
}


import Header from '../../comps/Header';
import RectButton from '../../comps/Button/RectButton';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';

const locImg1 = require('../../imgs/school.png');
const locImg2 = require('../../imgs/household.png');


function GoHome(){
  console.log(GoHome);
  setTimeout(function(){
      Router.push("/Home");
  }, 500)
}

const Location = () => <div class="body_page">
  <Header />

  <p className="sub_head">Choose a place you want to discover!</p>
  <div id="location_page">
    <div>
      <img className="loc_img" src={locImg1} />
      <RectButton
        onClick={goDuration}
        backgroundColor="#3b27ba"
        text="School"
        fontSize="18px"
      />
    </div>
    <div>
      <img className="loc_img" src={locImg2} />
      <RectButton
        onClick={goDuration}
        backgroundColor="#e847a1"
        text="Home" 
        fontSize="18px"
        />
    </div>
  </div>
  <ArrowButtonLeft onClick={GoHome}/>
</div>

export default Location;

