import styled from "styled-components";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../images/logo.svg';
import theme from '../theme';

const HeaderContainer = styled.section`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.875rem 0; /* 30px */
`;

const LogoComponent = styled(Logo)`
   width: 12.5rem; /* 200px */
   max-width: 12.5rem; /* 200px */
   min-width: 6.25rem; /* 100px */
   @media screen and (max-width: 500px) {
      max-width: 9.375rem; /* 150px */
   }
`;

const Button = styled(Link)`
   width: max-content;
   margin-right: 2.5rem; /* 40px */
   padding: 0.625rem 1.25rem; /* 10px 20px */
   text-decoration: none;
   font-family: 'Righteous', 'sans-serif';
   font-size: 1rem; /* 16px */
   font-weight: 400;
   border: 1px solid #00903A80;
   border-radius: 20px;
   order: ${props => props.isInMobile && '-1'};
   color: ${theme.primaryColor};
   background: transparent;
   transition: all .3s ease;
   &:hover {
      color: #fff;
      background: ${theme.primaryColor};
   }
   &.form-button {
      display: block;
      width: 100%;
      border-radius: 5px;
      color: #FFF;
      background: ${theme.primaryColor};
      cursor: pointer;
   }
   &.line-link {
      margin: 0;
      padding: 0;
      padding-left: 0.625rem; /* 10px */
      border: none;
      color: #FFF;
   }
   @media screen and (max-width: 500px) {
      margin: 0.625rem 0; /* 10px */
      font-size: 0.875rem; /* 14px */
      border-color: #FFF;
      color: #FFF;
   }
`;

const ButtonsContainer = styled.div`
   article {
      position: absolute;
      bottom: -210%;
      left: 0;
      width: 100%;
      padding: 1.25rem; /* 20px */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
      z-index: 10;
      background: ${theme.primaryColor};
   }
`;

export {HeaderContainer, LogoComponent, Button, ButtonsContainer};