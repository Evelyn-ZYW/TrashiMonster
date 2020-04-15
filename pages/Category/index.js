import React from 'react';
import './category.css';

import Header from '../../comps/Header';
import ArrowButton from '../../comps/Button/ArrowButton';
import SquaButton from '../../comps/Button/SquaButton';

const Category = ({ }) => <div className="body_page">
  <Header />
  <div id="body_cont2">
    <br />
    <br />
    <br />
    <p>Choose a category to have a closer look at!</p>
    <div>
      <SquaButton
        color="#13ca91"
        text="Organic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        color="#0090ff"
        text="Plastic"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        color="#ffdc00"
        text="Mixed Paper"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        color="#000000"
        text="Waste"
        width="130px"
        height="130px"
        fontSize="25px"
      />
      <SquaButton
        color="#9D9D9D"
        text="Glass & Can"
        width="120px"
        height="120px"
        fontSize="25px"
      />
    </div>
    <br />
    
  </div>
  <ArrowButton />

</div>

export default Category;