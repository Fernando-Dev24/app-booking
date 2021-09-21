import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { signOut } from '@firebase/auth';
import {
   HeaderContainer,
   LogoComponent,
   Button,
   ButtonsContainer
} from '../elements/HeaderElements';
import {auth} from '../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import useGetBookingsAdmin from '../hooks/useGetBookingsAdmin';
import {useAuth} from '../contexts/AuthContext';

const Header = () => {
   const [adminId] = useGetBookingsAdmin();
   const {user} = useAuth();
   const history = useHistory();
   const [showNavbar, setShowNavbar] = useState(false);

   /* handleSignOut */
   const handleSignOut = async () => {
      try {
         await signOut(auth);
         history.push('/iniciar-sesion');
      } catch (error) {console.log(error)}
   };

   return (
      <header>
         <HeaderContainer className="container">
            <LogoComponent />
            {window.innerWidth <= 500 ?
               <ButtonsContainer>
                  <FontAwesomeIcon onClick={() => setShowNavbar(!showNavbar)} icon={faChevronDown} />
                  {showNavbar &&
                     <article>
                        {user.uid === adminId ?
                           <Button as="button" isInMobile onClick={handleSignOut}>
                              <FontAwesomeIcon icon={faDoorOpen} />
                           </Button>
                           :
                           <>
                              <Button to="/" exact={true}>Reserva</Button>
                              <Button to="/historial">Historial</Button>
                              <Button as="button" isInMobile onClick={handleSignOut}>
                                 <FontAwesomeIcon icon={faDoorOpen} />
                              </Button>
                           </>
                        }
                     </article>
                  }
               </ButtonsContainer>
               :
               <article>
                  {user.uid === adminId ?
                     <Button as="button" isInMobile onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faDoorOpen} />
                     </Button>
                     :
                     <>
                        <Button to="/">Reserva</Button>
                        <Button to="/historial">Historial</Button>
                        <Button as="button" isInMobile onClick={handleSignOut}>
                           <FontAwesomeIcon icon={faDoorOpen} />
                        </Button>
                     </>
                  }
               </article>
            }
         </HeaderContainer>
      </header>
   );
}
 
export default Header;