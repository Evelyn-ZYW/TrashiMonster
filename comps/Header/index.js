import React, {useState} from 'react';
import './header.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Menu from '../Menu';
import Router from 'next/router';


const defaultLogo = require('../../imgs/logo.png');
const defaultHam = require('../../imgs/ham.svg');

function goHome() {
  setTimeout(function(){
    Router.push("/Home");
}, 1000)
}

const Header = ({img, ham}) => {
  const [showMenu, setShowMenu] = useState(false);

  return <div id="the_header">
    <div id="logo"  onClick={goHome}>
      <img src={img}/>
    </div>
    <div id="logo_text">
      Trashi Monster
    </div>
    <div id="ham_menu" onClick = {() => setShowMenu(!showMenu)}>
      <img src={ham}/>
      {showMenu && <Menu />}
    </div>
    
</div>;
}


Header.defaultProps = {
  img: defaultLogo,
  ham: defaultHam,  
}


export default Header;