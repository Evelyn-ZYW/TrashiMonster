import React from 'react';
import './header.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';


const defaultLogo = require('../../imgs/logo.png');
const defaultHam = require('../../imgs/ham.svg');

const Header = ({img, ham, backgroundColor}) => <div
style={{backgroundColor:backgroundColor}}>
  <img id="logo" src={img} />
  <p>Trashi Monster</p>
  <img id="menu" src={ham} />
</div>;


Header.defaultProps = {
  img: defaultLogo,
  ham: defaultHam,
  backgroundColor: "#ff9472"
}


export default Header;