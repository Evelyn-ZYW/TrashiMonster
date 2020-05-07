import React from 'react';
import './menu.css';
import Router from 'next/router';

function goHome(){
  
  setTimeout(function(){
      Router.push("/Home");
  }, 1000)
}
function goTutorial(){
  
  setTimeout(function(){
      Router.push("/Tutorial");
  }, 1000)
}
function goSummary(){
  
  setTimeout(function(){
      Router.push("/Summary");
  }, 1000)
}

const Menu = () => <div
id="menu1"
>
  <div className="menu_options" onClick={goHome}>Home</div>
  <div className="menu_options" onClick={goTutorial}>Tutorial</div>
  <div className="menu_options" onClick={goSummary}>Summary</div>
</div>;

export default Menu;