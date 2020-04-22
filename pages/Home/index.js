import React from 'react';
import './home.css';

import Header from '../../comps/Header';
import RectButton from '../../comps/Button/RectButton';

const MyHomeImg1 = require('../../imgs/monster.png');
const MyHomeImg2 = require('../../imgs/globe.png');

const Home = () => <div
  class="body_page">
  <Header />

  <img src={MyHomeImg1} id="green_monster" />
  <img src={MyHomeImg2} id="globe" />

  <RectButton 
  backgroundColor="#3b27ba"
  text="START"/>
  <RectButton 
  backgroundColor="#e847a1"
  text="See Tutorial"/>

</div>

export default Home;