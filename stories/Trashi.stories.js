import React from 'react';

import Button from '../comps/Button';
import Header from '../comps/Header';
import Menu from '../comps/Menu';

import Category from '../pages/Category';
import Duration from '../pages/Duration';
import Home from '../pages/Home';
import Location from '../pages/Location';
import Result from '../pages/Result';
import Summary from '../pages/Summary';
import Tutorial from '../pages/Tutorial';

export default {
  title: "My comps",
  component:Header
}

export const MyHeader =() => <Header />;

export const MyButton =() => <Button />;

export const MyMenu =() => <Menu />;

