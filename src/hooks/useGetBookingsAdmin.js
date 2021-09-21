import {useState, useEffect} from 'react';
import {db} from '../firebase/firebaseConfig';
import { onSnapshot, collection, query, orderBy, limit } from '@firebase/firestore';

const useGetBookingsAdmin = () => {
   const adminId = 'CMdRt3M7aEWj1nRmMWVOlyUF02X2';
   const [adminBookings, setAdminBookings] = useState([]);

   useEffect(() => {
      const docsRef = collection(db, 'bookings');
      
      /* Establish the connection to database */
      const finishConnection = onSnapshot(query(
         docsRef,
         orderBy('bookingTime', 'desc'),
         limit(10)
      ), (snapshot => {
         setAdminBookings(snapshot.docs.map(booking => {
            return {...booking.data(), id: booking.id} 
         }))
      }));

      return finishConnection;
   }, []);

   return [adminId, adminBookings];
}
 
export default useGetBookingsAdmin;