import {useState, useEffect} from 'react';
import {db} from '../firebase/firebaseConfig';
import {useAuth} from '../contexts/AuthContext';
import {
   onSnapshot,
   query,
   collection,
   where,
   orderBy
} from '@firebase/firestore';

const useGetBookingsUser = () => {
   const {user} = useAuth();
   /* States to save the booking's data */
   const [bookings, setBookings] = useState([]);

   /* Establish the connection to firebase database */
   useEffect(() => {
      const finishConnection = onSnapshot(query(
         collection(db, 'bookings'),
         where('userId', '==', user.uid),
         orderBy('bookingTime', 'desc')
      ), (snapshot => {
         setBookings(snapshot.docs.map(booking => {
            return {...booking.data(), id: booking.id}
         }));
      }));

      return finishConnection;
   }, [user.uid]);

   return [bookings];
}
 
export default useGetBookingsUser;