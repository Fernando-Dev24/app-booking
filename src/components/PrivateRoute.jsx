import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...restOfProps}) => {
   const {user} = useAuth();

   /* Validating there is an active user */
   if(user) {
      /* If there is an active user the app will return a component */
      return <Route {...restOfProps}>{children}</Route>
   } else {
      /* If there is not an active user the app will redirect to Login component */
      return <Redirect to="/iniciar-sesion" />
   }
}
 
export default PrivateRoute;