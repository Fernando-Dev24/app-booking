import React from "react";
import { Helmet } from "react-helmet";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';
import Footer from './Footer';
import useGetBookingsUser from "../hooks/useGetBookingsUser";
import {format, fromUnixTime} from 'date-fns';
import { es } from "date-fns/locale";
import {db} from '../firebase/firebaseConfig';
import { collection, doc, deleteDoc } from "@firebase/firestore";
import {
   HistoryContainer,
   HistoryGrid,
   BookingCard,
   LogoCard,
   BookingHeader,
   BookingSection,
   BookingFooter,
   HistoryEmpty,
   Button,
   EmptyIcon,
   FooterButton,
   BookingState
} from "../elements/HistoryElements";

const History = () => {
   const [bookings] = useGetBookingsUser();

   const longFormatDate = (date) => {
      return format(
         fromUnixTime(date),
         "dd 'de' MMMM 'de' yyyy",
         {locale: es}
      );
   };

   const shortFormatDate = (date) => {
      return format(
         fromUnixTime(date),
         "dd/MM/yyyy",
         {locale: es}
      );
   };

   const formatTime = (time) => {
      return format(
         fromUnixTime(time),
         "HH:mm a"
      );
   };

   /* Delete booking */
   const deleteBooking = (id) => {
      const docRef = collection(db, 'bookings');
      deleteDoc(doc(docRef, id));
   };

   return (
      <>
         <Helmet>
            <title>Booking | Historial</title>
         </Helmet>

         <Header />

         <HistoryContainer className="container">
            {bookings.length === 0 ?
               <HistoryEmpty>
                  <div>
                     <EmptyIcon icon={faStickyNote} />
                     <h2>No has hecho ningun reservación</h2>
                     <Button to="/">Haz una reservación</Button>
                  </div>
               </HistoryEmpty>
               :
               <>
                  <h2>Tus reservaciones</h2>
                  <HistoryGrid>
                     {bookings.map(booking => {
                        return (
                           <BookingCard key={booking.id}>
                              <BookingHeader>
                                 <LogoCard />
                                 <div>
                                    <h3>{booking.eventName}</h3>
                                    <span>{longFormatDate(booking.date)}</span>
                                 </div>
                              </BookingHeader>
                              <BookingSection>
                                 <div className="booking-info">
                                    <h4>{booking.eventName}</h4>
                                    <span>Tipo de evento</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{booking.planName}</h4>
                                    <span>Plan</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{booking.guests} personas</h4>
                                    <span>Invitados</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{formatTime(booking.time)}</h4>
                                    <span>Hora</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{shortFormatDate(booking.date)}</h4>
                                    <span>Fecha del evento</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{shortFormatDate(booking.bookingTime)}</h4>
                                    <span>Fecha de reservación</span>
                                 </div>
                              </BookingSection>
                              <BookingFooter>
                                 <BookingState>
                                    Estado de la reserva: <span>{booking.bookingState}</span>
                                 </BookingState>
                                 <FooterButton
                                    onClick={() => deleteBooking(booking.id)}
                                 >Eliminar</FooterButton>
                              </BookingFooter>
                           </BookingCard>
                        );
                     })}
                  </HistoryGrid>
               </>
            }
         </HistoryContainer>

         <Footer />
      </>
   );
}
 
export default History;