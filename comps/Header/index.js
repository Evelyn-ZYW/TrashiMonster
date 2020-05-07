import React from 'react';
import './header.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Menu from '../Menu';
import Router from 'next/router';


const defaultLogo = require('../../imgs/logo.png');
const defaultHam = require('../../imgs/ham.svg');

function showMenu() {
  document.querySelector("#menu").style.right= 0;
  document.querySelector("#menu").style.opacity= 1;
}
function goHome() {
  setTimeout(function(){
    Router.push("/Home");
}, 1000)
}

const Header = ({img, ham}) => <div
id="the_header">
  <div id="logo"  onClick={goHome}>
    <img src={img}/>
  </div>
  <div id="logo_text">Trashi Monster</div>
  <div id="ham_menu" onClick={showMenu}>
    <img src={ham}/>
  </div>
  <Menu id="menu" />
</div>;


Header.defaultProps = {
  img: defaultLogo,
  ham: defaultHam,  
}


export default Header;