import React from 'react';
import './duration.css';

import Header from '../../comps/Header';
import ArrowButton from '../../comps/Button/ArrowButton';
import SquaButton from '../../comps/Button/SquaButton';

const Duration = () => <div className="body_page">
  <Header />
  <div id="body_cont1">
    <p>Do you know how much waste can be producted within below periods?</p>
    <br />
    <br />
    <br />
    <br />
    <div>
      <SquaButton
        color="#3b27ba"
        text="1 Week"
        width="100px"
        height="100px" />
      <SquaButton
        color="#e847a1"
        text="1 Month"
        width="100px"
        height="100px" />
      <SquaButton
        color="#13ca91"
        text="1 Year"
        width="100px"
        height="100px" />
    </div>
    <br />
    <br />
    <br />
 
  </div>
  <ArrowButton />
</div>;

export default Duration;