import React from 'react';
import './duration.css';

import Header from '../../comps/Header';
import Footer from '../../comps/Header';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import RectButton from '../../comps/Button/RectButton';

const Duration = () => <div className="body_page">
  <Header />
  <div id="body_cont1">
    <p>Do you know how much waste can be producted within below periods?</p>

    <div>
      <RectButton
        backgroundColor="#3b27ba"
        text="1 Week"
        width="70px"
        height="70px"
        fontSize="25pt" />
      <RectButton
        backgroundColor="#e847a1"
        text="1 Month"
        width="70px"
        height="70px" 
        fontSize="25pt" />
      <RectButton
        backgroundColor="#13ca91"
        text="1 Year"
        width="70px"
        height="70px" 
        fontSize="25pt" />
    </div>
  </div>
  <div className="the_footer">
    <ArrowButtonLeft />
  </div>


</div>;

export default Duration;