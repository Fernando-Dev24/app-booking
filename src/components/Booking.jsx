import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Welcome from './Welcome';
import Footer from './Footer';
import AdminHistory from './AdminHistory';
import { useAuth } from '../contexts/AuthContext';
import useGetBookingsAdmin from '../hooks/useGetBookingsAdmin';

const Booking = () => {
   const {user} = useAuth();
   const [adminId] = useGetBookingsAdmin();

   return (
      <>
         <Helmet>
            <title>Casa Verde | Reserva</title>
         </Helmet>

         <Header />
         {user.uid === adminId ?
            <AdminHistory />
            :
            <Welcome />
         }
         <Footer />
      </>
   );
}
 
export default Booking;