import React from 'react';
import './location.css';

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
        backgroundColor="#3b27ba"
        text="School"
      />
    </div>
    <div>
      <img className="loc_img" src={locImg2} />
      <RectButton
        backgroundColor="#e847a1"
        text="Home" />
    </div>
  </div>
</div>

export default Location;

