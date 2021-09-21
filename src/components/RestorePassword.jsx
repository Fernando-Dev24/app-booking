import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Button} from '../elements/HeaderElements';
import Alert from '../elements/Alert';
import {auth} from '../firebase/firebaseConfig';
import { sendPasswordResetEmail } from '@firebase/auth';
import {
   BlurImageLogin,
   FormContainer,
   Label,
   Input,
   CoffeeIcon
} from '../elements/LoginElements';

const RestorePassword = () => {
   const [email, setEmail] = useState('');
   const [alertState, setAlertState] = useState(false);
   const [alertContent, setAlertContent] = useState({});
   const emailRegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

   /* handleSubmit */
   const handleSubmit = async (e) => {
      e.preventDefault();
      setAlertState(false);
      setAlertContent({});

      /* Validations */
      if(email.trim() === '') {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Asegúrate de rellenar todos los campos'
         });
         return;
      };

      if(!emailRegularExpression.test(email)) {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Por favor, escribe un correo electrónico valido'
         });
         return;
      };

      /* Send restore password email to the email specified */
      try {
         await sendPasswordResetEmail(auth, email);
         setAlertState(true);
         setAlertContent({
            type: 'success',
            message: 'Correo eleelectrónico, chequea tu bandeja de entrada'
         });
         setEmail('');
      } catch(error) {
         setAlertState(true);
         let authMessage;
         switch(error.code) {
            case 'auth/user-not-found':
               authMessage = 'Ningun correo coincide con el correo ingresado';
            break;
            default:
               authMessage = 'Hubo un problema al iniciar sesión, intentelo de nuevo';
            break;
         };
         setAlertContent({
            type: 'error',
            message: authMessage
         });
      };
   };

   return (
      <>
         <Helmet>
            <title>Recuperar Contraseña</title>
         </Helmet>

         <BlurImageLogin>
            <FormContainer className="container">
               <article className="form-container">
                  <h2>Recuperar</h2>
                  <form autoComplete="off" onSubmit={handleSubmit}>
                     <Label htmlFor="email">Correo Electrónico</Label>
                     <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Button className="form-button" as="button" type="submit">
                        Enviar correo de recuperación
                     </Button>
                  </form>
               </article>
               <article className="form-logo">
                  <div>
                        <CoffeeIcon icon={faCoffee} />
                        <h2>Booking App</h2>
                        <p>
                           Si te recordaste de tu contraseña
                           <Button className="line-link" to="/iniciar-sesion">
                              Iniciar sesión
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
}
 
export default RestorePassword;