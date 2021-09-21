import React from "react";
import { Helmet } from "react-helmet";
import {Route, Switch} from 'react-router-dom';
import WebFont from "webfontloader";
/* Components */
import Booking from './components/Booking';
import History from './components/History';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RestorePassword from './components/RestorePassword';
import PrivateRoute from './components/PrivateRoute';
/* Media */
import favicon from './images/favicon.png';

const App = () => {
   WebFont.load({
      google: {
         families: ['Righteous:400', 'Raleway:400,700', 'sans-serif']
      }
   });

   return (
      <>
         <Helmet>
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <title>Casa Verde</title>
         </Helmet>

         <Switch>
            <Route path="/iniciar-sesion" component={Login} />
            <Route path="/crear-cuenta" component={SignUp} />
            <Route path="/recuperar" component={RestorePassword} />

            <PrivateRoute path="/historial">
               <History />
            </PrivateRoute>

            <PrivateRoute path="/">
               <Booking />
            </PrivateRoute>
         </Switch>
      </>
   );
}
 
export default App;