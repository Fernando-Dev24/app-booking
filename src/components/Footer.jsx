import React from 'react';
import { FooterContainer, FooterFlex } from '../elements/FooterElements';

const Footer = () => {
   return (
      <FooterContainer>
         <FooterFlex className="container">
            <p>
               Booking App | Todos los derechos reservados {new Date().getFullYear()}
            </p>
            <p className="develop-link">
               develop by
               <a href="https://fernandoortiz.netlify.app">
                  <strong>Fernando Ortiz</strong>
               </a>
            </p>
         </FooterFlex>
      </FooterContainer>
   );
}
 
export default Footer;