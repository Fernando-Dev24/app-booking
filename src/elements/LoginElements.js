import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from '../images/booking-bg.jpg';
import theme from "../theme";

const BlurImageLogin = styled.section`
   width: 100%;
   height: 100vh;
   display: grid;
   place-items: center;
   background: url('${Background}') no-repeat center;
   background-size: cover;
   @media screen and (max-width: 768px) {
      padding: 3.75rem 0; /* 60px */
      height: auto;
   }
`;

const BlurImageSignUp = styled.section`
   width: 100%;
   height: auto;
   display: grid;
   place-items: center;
   padding: 3.75rem 0; /* 60px */
   background: url('${Background}') no-repeat center;
   background-size: cover;
`;

const FormContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   border-radius: 10px;
   background: #FFF;
   h2 {
      margin-bottom: 2.5rem; /* 40px */
      font-family: 'Righteous', sans-serif;
      font-size: 2.5rem; /* 40px */
      font-weight: 400;
      color: ${theme.primaryColor};
   }
   .form-container {
      padding: 4.375rem; /* 70px */
   }

   .form-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${theme.primaryColor};
      border-radius: 0 10px 10px 0;
      div {
         text-align: center;
         h2 {
            margin-bottom: 0;
            font-size: 3.125rem; /* 50px */
            color: #FFF;
         }
         p {
            font-family: 'Raleway', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            color: #FFF;
         }
      }
   }
   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      .form-container {
         padding: 3.125rem; /* 50px */
      }

      .form-logo {
         border-radius: 0 0 10px 10px;
         div {
            padding: 1.25rem 0; /* 20px 0 */
            h2 {font-size: 2.5rem; /* 40px */}
         }
      }
   }
   @media screen and (max-width: 500px) {
      h2 {
         margin-bottom: 1.25rem; /* 20px */
         font-size: 1.875rem; /* 30px */
      }

      .form-container {
         padding: 1.875rem; /* 1.875rem */
      }

      .form-logo {
         div {
            h2 {
               font-size: 1.875rem; /* 30px */
            }
            p {
               font-size: 0.875rem; /* 14px */
            }
         }
      }
   }
`;

const Label = styled.label`
   display: block;
   margin-bottom: 1.25rem; /* 20px */
   font-family: 'Raleway', sans-serif;
   font-size: 14px; /* 14px */
   font-weight: 400;
   color: ${theme.blackColor};
   opacity: .8;
`;

const Input = styled.input`
   display: block;
   width: 100%;
   margin-bottom: 2.5rem; /* 40px */
   padding-bottom: 10px;
   font-family: 'Raleway', sans-serif;
   font-size: 1.875rem; /* 30px */
   font-weight: 700;
   outline: none;
   border: none;
   border-bottom: 1px solid #55555566;
   color: ${theme.primaryColor};
   transition: all .3s ease;
   &::placeholder {
      font-weight: 400;
      color: #55555566;
   }
   &:focus {border-color: ${theme.primaryColor};}
   @media screen and (max-width: 500px) {
      font-size: 1.25rem; /* 20px */
   }
`;

const CoffeeIcon = styled(FontAwesomeIcon)`
   margin-bottom: 0.625rem;
   font-size: 6.25rem; /* 100px */
   color: #FFF;
   @media screen and (max-width: 768px) {
      font-size: 3.125rem; /* 50px */
   }
   @media screen and (max-width: 500px) {
      font-size: 2.5rem; /* 40px */
   }
`;

export {BlurImageLogin, FormContainer, Label, Input, CoffeeIcon, BlurImageSignUp};