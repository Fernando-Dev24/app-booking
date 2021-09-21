import styled from "styled-components";
import theme from "../theme";

const PlansGrid = styled.section`
   margin: 3.75rem auto; /* 60px auto */
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1.25rem; /* 20px */
   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

const PlanCard = styled.article`
   display: grid;
   place-items: center;
   padding: 100px; /* 100px */
   font-family: 'Raleway', sans-serif;
   border-radius: 20px;
   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08);
   color: ${theme.blackColor};
   @media screen and (max-width: 500px) {
      padding: 3.125rem; /* 50px */
   }
   h3 {
      text-transform: uppercase;
      letter-spacing: 0.3125rem; /* 5px */
      font-size: 1.875rem; /* 30px */
      font-weight: 400;
      color: ${theme.blackColor};
      @media screen and (max-width: 500px) {
         text-align: center;
         font-size: 1.5625rem; /* 25px */
      }
   }
   h2 {
      font-size: 2.5rem; /* 40px */
      font-weight: 700;
      color: ${theme.primaryColor};
   }
   ul {
      margin-bottom: 2.5rem; /* 40px */
      list-style: none;
      text-align: center;
      li {
         font-size: 1.125rem; /* 18px */
         @media screen and (max-width: 500px) {
            font-size: 1rem; /* 16px */
         }
      }
   }
`;

export {PlansGrid, PlanCard}