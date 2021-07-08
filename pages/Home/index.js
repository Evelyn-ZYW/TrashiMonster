import React from 'react';
import './home.css';

import Header from '../../comps/Header';
import RectButton from '../../comps/Button/RectButton';

const MyHomeImg1 = require('../../imgs/monster.png');
const MyHomeImg2 = require('../../imgs/globe.png');

import Router from 'next/router';

function ClickStart() {
  console.log(ClickStart);
  setTimeout(function () {
    Router.push("/Location");
  }, 200)
}

function GoTutorial() {
  console.log(GoTutorial);
  setTimeout(function () {
    Router.push("/Tutorial");
  }, 200)
}

const Home = () => <div
  className="body_page">
  <Header />

  <img src={MyHomeImg1} id="green_monster" />
  <img src={MyHomeImg2} id="globe" />

  <RectButton
    onClick={ClickStart}
    backgroundColor="#3b27ba"
    text="START"
    fontSize="18px"
    width="130px"
    height="50px"
  />
  <RectButton
    onClick={GoTutorial}
    backgroundColor="#e847a1"
    text="TUTORIAL"
    fontSize="18px"
    width="130px"
    height="50px"
  />

</div>

export default Home;
