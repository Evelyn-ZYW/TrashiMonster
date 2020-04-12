import React from 'react';

import ArrowButton from '../comps/Button/ArrowButton';
import RectButton from '../comps/Button/RectButton';
import SquaButton from '../comps/Button/SquaButton';
import Header from '../comps/Header';
import Menu from '../comps/Menu';

import Home from '../pages/Home';
import Location from '../pages/Location';

import Category from '../pages/Category';
import Duration from '../pages/Duration';


import Result from '../pages/Result';
import Summary from '../pages/Summary';
import Tutorial from '../pages/Tutorial';

export default {
  title: "My comps",
  component:Header
}

export const MyHeader =() => <Header />;

export const MyArrowButton =() => <ArrowButton />;
export const MyRectButton =() => <RectButton />;
export const MySquaButton =() => <SquaButton />;

export const MyMenu =() => <Menu />;

export const MyHome =() => <Home />;

export const MyLocation =() => <Location />;

