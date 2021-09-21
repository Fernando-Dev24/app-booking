import styled from "styled-components";
import theme from '../theme';

const FooterContainer = styled.footer`
   width: 100%;
   background: ${theme.primaryColor};
`;

const FooterFlex = styled.section`
   padding: 1.875rem 0; /* 30px */
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      margin-bottom: 0;
      font-family: 'Righteous', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: #fff;
      &.develop-link {
         font-family: 'Raleway', sans-serif;
         a {
            display: inline-block;
            padding-left: 0.625rem; /* 10px */
            text-decoration: none;
            color: #FFF;
            &:hover {text-decoration: underline;}
         }
      }
   }
   @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
   }
   @media screen and (max-width: 500px) {
      text-align: center;
      p {
         font-size: 0.875rem; /* 14px */
      }
   }
`;

export {FooterContainer, FooterFlex};