import React, {useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
   BlurImageLogin,
   FormContainer,
   Label,
   Input,
   CoffeeIcon
} from "../elements/LoginElements";
import {Button} from '../elements/HeaderElements';
import Alert from "../elements/Alert";
import {auth} from '../firebase/firebaseConfig';
import { useHistory } from "react-router-dom";
import theme from "../theme";

const Login = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [alertState, setAlertState] = useState(false);
   const [alertContent, setAlertContent] = useState({});
   const emailRegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

   /* handleState function */
   const handleState = (e) => {
      if(e.target.name === 'email') {
         setEmail(e.target.value);
      } else if(e.target.name === 'password') {
         setPassword(e.target.value);
      }
   };

   /* handleSubmit function */
   const handleSubmit = async (e) => {
      e.preventDefault();
      setAlertState(false);
      setAlertContent({});

      /* Validations */
      if(email === '' && password === '') {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Rellena todos los campos por favor'
         });
         return;
      };

      if(!emailRegularExpression.test(email)) {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Asegurese de escribir bien su correo electronico'
         });
         return;
      };

      /* SignIn with firebase auth service */
      try {
         await signInWithEmailAndPassword(auth, email, password);
         history.push('/');
      } catch (error) {
         setAlertState(true);
         let authMessage;
         switch(error.code) {
            case 'auth/wrong-password':
               authMessage = 'Contraseña incorrecta';
            break;
            case 'auth/user-not-found':
               authMessage = 'Ningun correo coincide con el correo ingresado';
            break;
            default:
               authMessage = 'Hubo un problema al iniciar sesión, intentelo de nuevo';
            break;
         }
         setAlertContent({
            type: 'error',
            message: authMessage
         });
      }
   }

   return (
      <>
         <Helmet>
            <title>Iniciar Sesión</title>
         </Helmet>

         <BlurImageLogin>
            <FormContainer className="container">
               <article className="form-container">
                  <h2>Iniciar Sesión</h2>
                  <form autoComplete="off" onSubmit={handleSubmit}>
                     <Label htmlFor="email">Correo Electrónico</Label>
                     <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={handleState}
                     />
                     <Label htmlFor="password">Contraseña</Label>
                     <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleState}
                     />
                     <Button className="form-button" as="button" type="submit">
                        Iniciar Sesión
                     </Button>
                     <ForgotPasswordLink to="/recuperar">
                        ¿Olvidaste tu contraseña?
                     </ForgotPasswordLink>
                  </form>
               </article>
               <article className="form-logo">
                  <div>
                     <CoffeeIcon icon={faCoffee} />
                     <h2>Booking App</h2>
                     <p>
                        ¿No tienes una cuenta?
                        <Button className="line-link" to="/crear-cuenta">
                           Registrarse
                        </Button>
                     </p>
                  </div>
               </article>
            </FormContainer>
         </BlurImageLogin>

         <Alert
            type={alertContent.type}
            message={alertContent.message}
            alertState={alertState}
            setAlertState={setAlertState}
         />
      </>
   );
};

const ForgotPasswordLink = styled(Link)`
   display: block;
   margin-top: 0.625rem; /* 10px */
   text-align: right;
   font-family: 'Raleway', sans-serif;
   font-weight: 700;
   font-size: 1rem; /* 16px */
   color: ${theme.blackColor};
   &:hover {color: ${theme.primaryColor};}
   @media screen and (max-width: 500px) {
      margin-top: 1.25rem; /* 20px */
      font-size: 0.875rem;
   }
`;
 
export default Login;