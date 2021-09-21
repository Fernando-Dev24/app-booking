import styled from "styled-components";
import theme from "../theme";

const BookingFormContainer = styled.section`
   width: 80%;
   margin: 3.75rem auto; /* 60px auto */
   padding: 3.125rem; /* 50px */
   border: 1px solid rgba(0, 0, 0, .1);
   border-radius: 10px;
   box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   background: #fff;
   @media screen and (max-width: 768px) {
      width: 100%;
   }
   @media screen and (max-width: 500px) {
      padding: 1.875rem; /* 30px */
   }
`;

const BookingFormHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   margin-bottom: 2.5rem; /* 40px */
   border-bottom: 1px solid #5555554D;
   p {
      font-family: 'Raleway', sans-serif;
      font-size: 1rem; /* 16px */
      font-weight: 400;
      color: ${theme.blackColor};
   }
   @media screen and (max-width: 500px) {
      flex-direction: column;
      p {
         margin-top: 1.25rem; /* 20px */
         order: 1;
         font-size: 0.875rem; /* 14px */
      }
   }
`;

const BookingButton = styled.button`
   font-family: 'Righteous', sans-serif;
   font-size: 1rem; /* 16px */
   font-weight: 400;
   border: none;
   color: ${theme.primaryColor};
   background: transparent;
   transition: .3s ease all;
   &:hover {opacity: .8;}
`;

const BookingForm = styled.article`
   display: grid;
   grid-template-columns: 1fr;
`;

const OptionsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1.875rem; /* 30px */
   padding-bottom: 2.5rem; /* 40px */
   border-bottom: 1px solid #5555554D;
   article.options-container {
      p {
         margin-bottom: 0.625rem; /* 10px */
         font-family: 'Raleway', sans-serif;
         font-size: 0.875rem; /* 14px */
         font-weight: 400;
         color: ${theme.blackColor};
      }
   }
   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }
`;

const SelectedOption = styled.div`
   padding-bottom: 0.625rem; /* 10px */
   font-family: 'Raleway', sans-serif;
   font-weight: 700;
   font-size: 1.25rem; /* 20px */
   border-bottom: 1px solid ${theme.blackColor};
   color: ${theme.primaryColor};
   cursor: pointer;
   transition: .3s all ease;
   &:hover {border-color: ${theme.primaryColor};}
   @media screen and (max-width: 500px) {
      font-size: 1.125rem; /* 18px */
      border-bottom: 1px solid ${theme.primaryColor};
   }
`;

const Option = styled.div`
   padding: 0.625rem 0; /* 10px 0 */
   font-family: 'Raleway', sans-serif;
   font-weight: 400;
   font-size: 1.25rem; /* 20px */
   border-bottom: 1px solid ${theme.blackColor};
   color: ${theme.blackColor};
   transition: .3s ease all;
   cursor: pointer;
   &:hover {
      border-color: ${theme.primaryColor};
      color: ${theme.primaryColor};
   }
   @media screen and (max-width: 500px) {
      font-size: 1.125rem; /* 18px */
   }
`;

const SubmitButton = styled.button`
   width: 100%;
   display: block;
   margin-top: 1.875rem; /* 30px */
   padding: 1.25rem; /* 20px */
   font-family: 'Righteous', sans-serif;
   font-size: 1.25rem; /* 20px */
   font-weight: 400;
   border: 1px solid ${theme.primaryColor};
   border-radius: 5px;
   color: ${theme.primaryColor};
   background: transparent;
   cursor: pointer;
   transition: .3s all ease;
   &:hover {
      color: #FFF;
      background: ${theme.primaryColor};
   }
   @media screen and (max-width: 768px) {
      color: #FFF;
      background: ${theme.primaryColor};
   }
`;

export {BookingFormContainer, BookingFormHeader, BookingButton, BookingForm, OptionsGrid, SelectedOption, Option, SubmitButton};