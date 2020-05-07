import React from 'react';
import './header.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Menu from '../Menu';


const defaultLogo = require('../../imgs/logo.png');
const defaultHam = require('../../imgs/ham.svg');

function showMenu() {
  document.querySelector(menu).style.right= 0;
}

const Header = ({img, ham}) => <div
id="the_header">
  <img id="logo" src={img} />
  <div id="logo_text">Trashi Monster</div>
  <img id="menu" src={ham} onclick={showMenu}/>
  <Menu />
</div>;


Header.defaultProps = {
  img: defaultLogo,
  ham: defaultHam,  
}


export default Header;