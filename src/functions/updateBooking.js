import {db} from '../firebase/firebaseConfig';
import { collection, updateDoc, doc } from '@firebase/firestore';

const updateBooking = ({id, confirm, rejected}) => {
   const docsRef = collection(db, 'bookings');
   if(confirm) {
      updateDoc(doc(docsRef, id), {bookingState: 'Aceptada'});
   } else if(rejected) {
      updateDoc(doc(docsRef, id), {bookingState: 'Rechazada'});
   }
};

export default updateBooking;