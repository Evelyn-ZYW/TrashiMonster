import React from 'react';
import './header.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';


const defaultLogo = require('../../imgs/logo.png');
const defaultHam = require('../../imgs/ham.svg');
//function showMenu 

const Header = ({img, ham, backgroundColor}) => <div
id="the_header"
style={{backgroundColor:backgroundColor}}>
  <img id="logo" src={img} />
  <div>Trashi Monster</div>
  <img id="menu" src={ham} />
</div>;


Header.defaultProps = {
  img: defaultLogo,
  ham: defaultHam,
  backgroundColor: "#ff9472"
}


export default Header;