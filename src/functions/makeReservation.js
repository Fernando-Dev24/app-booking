import {db} from '../firebase/firebaseConfig';
import { collection, addDoc } from '@firebase/firestore';

const makeReservation = (
   {eventName, planName, guests, date, time, bookingTime, userId}
   ) => {
   return addDoc(collection(db, 'bookings'), {
      eventName: eventName,
      planName: planName,
      guests: Number(guests),
      date: date,
      time: time,
      bookingTime: bookingTime,
      bookingState: 'Pendiente',
      userId: userId
   });
};

export default makeReservation;