import React from 'react';
import './home.css';

import Router from 'next/router';

function ClickStart(){
  
  setTimeout(function(){
      Router.push("/Location");
  }, 1000)
}

function GoTutorial(){
  
  setTimeout(function(){
      Router.push("/Tutorial");
  }, 1000)
}


import Header from '../../comps/Header';
import RectButton from '../../comps/Button/RectButton';

const MyHomeImg1 = require('../../imgs/monster.png');
const MyHomeImg2 = require('../../imgs/globe.png');

const Home = () => <div
  className="body_page">
  <Header />

  <img src={MyHomeImg1} id="green_monster" />
  <img src={MyHomeImg2} id="globe" />

  <RectButton 
   onClick={ClickStart}
  backgroundColor="#3b27ba"
  text="START"
 
  />
  <RectButton 
  onClick={GoTutorial}
  backgroundColor="#e847a1"
  text="See Tutorial"/>

</div>

export default Home;
