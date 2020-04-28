import React from 'react';
import './location.css';

import Router from 'next/router';

function goDuration(){
  
  setTimeout(function(){
      Router.push("/Duration");
  }, 1000)
}


import Header from '../../comps/Header';
import RectButton from '../../comps/Button/RectButton';

const locImg1 = require('../../imgs/school.png');
const locImg2 = require('../../imgs/household.png');

const Location = () => <div class="body_page">
  <Header />

  <p>Choose a place you want to discover!</p>
  <div id="location_page">
    <div>
      <img className="loc_img" src={locImg1} />
      <RectButton
       onClick={goDuration}
        backgroundColor="#3b27ba"
        text="School"
      />
    </div>
    <div>
      <img className="loc_img" src={locImg2} />
      <RectButton
        onClick={goDuration}
        backgroundColor="#e847a1"
        text="Home" />
    </div>
  </div>
</div>

export default Location;

