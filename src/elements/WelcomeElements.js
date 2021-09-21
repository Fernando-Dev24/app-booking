import styled from "styled-components";
import Background from '../images/booking-bg.jpg';
import theme from "../theme";

const WelcomeContainer = styled.section`
   position: relative;
   width: 100%;
   height: 65vh;
   display: grid;
   place-items: center;
   border-radius: 40px;
   background: url('${Background}') no-repeat center;
   background-size: cover;
   @media screen and (max-width: 768px) {
      height: 70vh;
   }
   @media screen and (max-width: 500px) {
      border-radius: 20px;
   }
`;

const Title = styled.h1`
   margin-bottom: 0;
   text-align: center;
   font-family: 'Righteous';
   font-size: 3.125rem; /* 60px */
   font-weight: 400;
   color: #FFF;
   strong {
      color: ${theme.primaryColor};
   }
   @media screen and (max-width: 768px) {
      font-size: 2.5rem; /* 40px */
   }
   @media screen and (max-width: 500px) {
      font-size: 1.875rem; /* 30px */
   }
`;

export {WelcomeContainer, Title};