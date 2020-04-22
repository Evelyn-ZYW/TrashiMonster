import React from 'react';
import './tutorial.css';

import Header from '../../comps/Header';
import Footer from '../../comps/Footer';
import ArrowButtonLeft from '../../comps/Button/ArrowButtonLeft';
import RectButton from '../../comps/Button/RectButton';
import LongButton from '../../comps/Button/LongButton';

import Location from '../../pages/Location';
import Duration from '../../pages/Duration';
import Category from '../../pages/Category';
import Result from '../../pages/Result';
import Tips from '../../pages/Tips';
import Summary from '../../pages/Summary';


const Tutorial = ({}) => <div className="body_page">
  <p>Step 1: Choose a place</p>
  <Location />
  <p>Step 2: Choose a time duration</p>
  <Duration />
  <p>Step 3: Choose a garbage category</p>
  <Category />
  <p>Step 4: See the result of how much garbage can be produced within selected duration and category</p>
  <Result />
  <p>Step 5: See how you can help to reduce the waste</p>
  <Tips />
  <p>Step 6: See the conclusions</p>
  <Summary />
</div>;


export default Tutorial;