import React from 'react';
import { WelcomeContainer, Title } from '../elements/WelcomeElements';
import BookingFormComponent from './BookingFormComponent';

const Welcome = () => {
   return (
      <>
         <WelcomeContainer className="container">
            <Title>
               Disfruta de tu <strong>evento</strong>,
               con la <strong>naturaleza</strong>
            </Title>
         </WelcomeContainer>

         <BookingFormComponent />
      </>
   );
}
 
export default Welcome;