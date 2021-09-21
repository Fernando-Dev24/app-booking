import React, {useState, useEffect, useContext} from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from '@firebase/auth';

/* context variable */
const AuthContext = React.createContext();

/* Here we initialize the context with a function, this could be user anywhere on the application */
const useAuth = () => {
   return useContext(AuthContext);
}

/* Provider component */
const AuthProvider = ({children}) => {
   /* All user information will be on user variables at the end of the context */
   const [userData, setUserData] = useState();
   const [loading, setLoading] = useState(true);

   /* Here useEffect is going to connect to firebase/auth service to extract the active user */
   useEffect(() => {
      const clearAuthContext = onAuthStateChanged(auth, (user) => {
         setUserData(user);
         setLoading(false);
      });

      return clearAuthContext;
   }, [])

   return (
      <AuthContext.Provider value={{user: userData}}>
         {!loading && children}
      </AuthContext.Provider>
   );
}
 
export {AuthContext, AuthProvider, useAuth};