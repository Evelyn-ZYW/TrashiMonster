import React from 'react';
import './footer.css';

const Footer = ({backgroundColor}) => <div
id="the_footer"
style={{backgroundColor: backgroundColor}}>

</div>

Footer.defaultProps = {
  backgroundColor: "#ff9472"

}
export default Footer;