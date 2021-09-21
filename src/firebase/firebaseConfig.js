import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBBoE4HdwMvRyh7BosRysbKEPuNhVU2qj0",
   authDomain: "app-react-booking.firebaseapp.com",
   projectId: "app-react-booking",
   storageBucket: "app-react-booking.appspot.com",
   messagingSenderId: "758319064598",
   appId: "1:758319064598:web:779f011b57a67591073737",
   measurementId: "G-FMS94ND1C5"
};

/* Initialize firebase's services */
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

/* Export db and auth variables */
export {db, auth};