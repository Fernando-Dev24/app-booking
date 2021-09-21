import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../images/logo.svg';
import theme from "../theme";

const HistoryContainer = styled.section`
   width: 100%;
   padding: 3.125rem 0; /* 50px */
   h2 {
      text-align: center;
      font-family: 'Righteous';
      font-weight: 400;
      font-size: 2.5rem; /* 40px */
      color: ${theme.primaryColor};
   }
   @media screen and (max-width: 500px) {
      h2 {
         font-size: 1.875rem; /* 30px */
      }
   }
`;

const HistoryGrid = styled.article`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1.25rem; /* 20px */
   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

const BookingCard = styled.article`
   width: 100%;
`;

const LogoCard = styled(Logo)`
   width: 9.375rem; /* 200px */
   max-width: 9.375rem; /* 200px */
   min-width: 9.375rem; /* 100px */
   @media screen and (max-width: 500px) {
      display: none;
   }
`;

const BookingHeader = styled.header`
   padding: 1.25rem 0; /* 20px */
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-radius: 10px;
   box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.09), 0px 2px 6px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0.09);
   background: #fff;
   div {
      text-align: center;
      font-family: 'Righteous', sans-serif;
      h3 {
         margin-bottom: 0;
         font-weight: 400;
         font-size: 1.25rem;
         color: ${theme.blackColor};
      }
      span {
         font-weight: 400;
         font-size: 1rem; /* 16px */
         color: ${theme.primaryColor};
      }
   }
   @media screen and (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;

const BookingSection = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1.875rem; /* 30px */
   padding: 1.875rem 2.5rem; /* 30px 40px */
   border-top: 2px dashed #55555566;
   border-bottom: 2px dashed #55555566;
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.09), 0px 2px 6px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0.09);
   div.booking-info {
      h4 {
         margin-bottom: 0;
         font-family: 'Righteous', sans-serif;
         font-weight: 400;
         font-size: 1rem; /* 16px */
         color: ${theme.primaryColor};
      }
      span {
         font-family: 'Raleway', sans-serif;
         font-weight: 400;
         font-size: 0.875rem; /* 14px */
         color: #555555CC;
      }
   }
   @media screen and (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
   }
`;

const BookingFooter = styled.footer`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 1.875rem 2.5rem; /* 30px 40px */
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.09), 0px 2px 6px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0.09);
   @media screen and (max-width: 500px) {
      flex-direction: column;
   }
`;

/* Empty state elements */
const HistoryEmpty = styled.section`
   width: 100%;
   height: 60vh;
   display: grid;
   place-items: center;
   text-align: center;
`;

const FooterButton = styled.button`
   padding: 0.625rem 1.25rem; /* 10px 20px */
   font-family: 'Raleway', sans-serif;
   font-weight: 700;
   font-size: 1rem; /* 16px */
   border: 1px solid;
   border-color: ${props => props.confirmButton ? '#0F52BA' : '#BA0404'};
   border-radius: 5px;
   color: ${props => props.confirmButton ? '#0F52BA' : '#BA0404'};
   background: transparent;
   cursor: pointer;
   transition: .3s all ease;
   &:hover {
      color: #fff;
      background: ${props => props.confirmButton ? '#0F52BA' : '#BA0404'};
   }
   @media screen and (max-width: 768px) {
      color: #fff;
      background: ${props => props.confirmButton ? '#0F52BA' : '#BA0404'};
   }
   @media screen and (max-width: 500px) {
      width: 100%;
      margin: 0.625rem 0; /* 10px 0 */
   }
`; 

const BookingState = styled.span`
   padding: 0.625rem 1.25rem; /* 10px 20px */
   font-family: 'Raleway', sans-serif;
   font-weight: 400;
   font-size: 1rem;
   color: #fff;
   border-radius: 40px;
   background: ${theme.sucessState};
   span {font-weight: 700;}
   @media screen and (max-width: 500px) {
      font-size: 0.875rem; /* 14px */
      text-align: center;
   }
`;

const Button = styled(Link)`
   display: inline-block;
   padding: 1.25rem; /* 20px */
   font-family: 'Righteous', sans-serif;
   font-weight: 400;
   font-size: 1rem; /* 16px */
   border-radius: 5px;
   color: #fff;
   background: ${theme.primaryColor};
   &:hover {
      color: #fff;
   }
`;

const EmptyIcon = styled(FontAwesomeIcon)`
   margin-bottom: 2.5rem; /* 40px */
   font-size: 6.25rem; /* 100px */
   text-align: center;
   color: ${theme.blackColor};
`;

export {
   HistoryContainer,
   HistoryGrid,
   BookingCard,
   LogoCard,
   BookingHeader,
   BookingSection,
   BookingFooter,
   HistoryEmpty,
   Button,
   EmptyIcon,
   FooterButton,
   BookingState
};