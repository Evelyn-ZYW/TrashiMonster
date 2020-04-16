import React from 'react';
import './arrow.css';

const ArrowButtonRight = require('../../../imgs/arrow_right.svg');
const ArrowButtonLeft = require('../../../imgs/arrow_left.svg');

const ArrowButton = ({ onClick, className, src }) =><div
className={"default_class "+className}
id="button_arrow"
onClick={onClick}
>
<img className="button_arrow_left" src={src} />
</div>;

ArrowButton.defaultProps = {
  className: "",
  src: ArrowButtonLeft,
}

export default ArrowButton;

<ArrowButton
className="left"
src={ArrowButtonLeft}
/>;

<ArrowButton
className="right"
src={ArrowButtonRight}
/>


