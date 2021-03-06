import React, {useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Helmet } from "react-helmet";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
   BlurImageSignUp,
   FormContainer,
   Label,
   Input,
   CoffeeIcon
} from "../elements/LoginElements";
import {Button} from '../elements/HeaderElements';
import Alert from "../elements/Alert";
import {auth} from '../firebase/firebaseConfig';
import { useHistory } from "react-router-dom";

const History = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [password2, setPassword2] = useState('');
   const [alertState, setAlertState] = useState(false);
   const [alertContent, setAlertContent] = useState({});
   const emailRegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

   /* handleState function */
   const handleState = (e) => {
      switch(e.target.name) {
         case 'email':
            setEmail(e.target.value);
         break;
         case 'password':
            setPassword(e.target.value);
         break;
         case 'password2':
            setPassword2(e.target.value);
         break;
         default:
            return;
      }
   };

   /* handleSubmit function */
   const handleSubmit = async (e) => {
      e.preventDefault();
      setAlertState(false);
      setAlertContent({});

      /* Validations */
      if(email.trim() === '' && password.trim() === '' && password2.trim() === '') {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Rellena todos los campor por favor'
         });
         return;
      };

      if(emailRegularExpression.test(email) === false) {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Asegurese de escribir bien su correo electronico'
         });
         return;
      }

      if(password.trim() !== password2.trim()) {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Asegure de repetir la contrase??a correctamente'
         });
         return;
      };

      /* Creating a user on firebase auth service */
      try {
         await createUserWithEmailAndPassword(auth, email, password);
         history.push('/');
      } catch (error) {
         setAlertState(true);
         let authMessage;
         switch(error.code) {
            case 'auth/invalid-password':
               authMessage = 'Contrase??a incorrecta';
            break;
            case 'auth/email-already-exists':
               authMessage = 'El correo ya est?? en uso por otro usuario';
            break;
            case 'auth/invalid-email':
               authMessage = 'Correo electr??nico invalido';
            break;
            case 'auth/weak-password':
               authMessage = 'La contrase??a debe tener al menos 6 caracteres';
            break;
            default:
               authMessage = 'Hubo un error al crear el usuario intentalo de nuevo';
            break;
         }
         setAlertContent({
            type: 'error',
            message: authMessage
         });
      }
   };

   return (
      <>
         <Helmet>
            <title>Crear Cuenta</title>
         </Helmet>

         <BlurImageSignUp>
            <FormContainer className="container">
               <article className="form-container">
                  <h2>Registrarse</h2>
                  <form action="" autoComplete="off" onSubmit={handleSubmit}>
                     <Label htmlFor="email">Correo Electr??nico</Label>
                     <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo Electr??nico"
                        value={email}
                        onChange={handleState}
                     />
                     <Label htmlFor="password">Contrase??a</Label>
                     <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Contrase??a"
                        value={password}
                        onChange={handleState}
                     />
                     <Label htmlFor="password2">Vuelve a repetir la contrase??a</Label>
                     <Input
                        id="password2"
                        type="password"
                        name="password2"
                        placeholder="Vuelve a repetir la contrase??a"
                        value={password2}
                        onChange={handleState}
                     />
                     <Button className="form-button" as="button" type="submit">
                        Registrarse
                     </Button>
                  </form>
               </article>
               <article className="form-logo">
                  <div>
                     <CoffeeIcon icon={faCoffee} />
                     <h2>Booking App</h2>
                     <p>
                        ??Ya tienes una cuenta?
                        <Button className="line-link" to="/iniciar-sesion">
                           Iniciar Sesi??n
                        </Button>
                     </p>
                  </div>
               </article>
            </FormContainer>
         </BlurImageSignUp>

         <Alert 
            type={alertContent.type}
            message={alertContent.message}
            alertState={alertState}
            setAlertState={setAlertState}
         />
      </>
   );
}
 
export default History;