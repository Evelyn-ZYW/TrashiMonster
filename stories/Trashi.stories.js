import React from 'react';

import ArrowButton from '../comps/Button/ArrowButton';
import RectButton from '../comps/Button/RectButton';
import SquaButton from '../comps/Button/SquaButton';
import Header from '../comps/Header';
import Menu from '../comps/Menu';

import Home from '../pages/Home';
import Location from '../pages/Location';
import Duration from '../pages/Duration';
import Category from '../pages/Category';

import Result from '../pages/Result';
import Summary from '../pages/Summary';
import Tutorial from '../pages/Tutorial';

export default {
  title: "My comps",
  component: Header
}

export const MyHeader = () => <Header />;

export const MyArrowButton = () => <div>
  <ArrowButton
  />
</div>;


export const MyRectButton = () => <RectButton />;
export const MySquaButton = () => <div>
  <SquaButton
    className="without_image"
    color="#e847a1"
    text="1 Week" />
  <p />
  <SquaButton
    className="with_image"
    color="#3b27ba"
    img="SquaImg"
    text="Organic"
  />
</div>;


export const MyMenu = () => <Menu />;

export const MyHome = () => <Home />;

export const MyLocation = () => <Location />;

export const MyDuration = () => <Duration />;
export const MyCategory = () => <Category />;

