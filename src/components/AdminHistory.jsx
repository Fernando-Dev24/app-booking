import React from 'react';
import { Helmet } from 'react-helmet';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
/* Hooks */
import useGetBookingsAdmin from '../hooks/useGetBookingsAdmin';
/* Functions */
import updateBooking from '../functions/updateBooking';
/* Elements */
import {
   HistoryContainer,
   HistoryGrid,
   BookingCard,
   LogoCard,
   BookingHeader,
   BookingSection,
   BookingFooter,
   HistoryEmpty,
   EmptyIcon,
   FooterButton
} from "../elements/HistoryElements";

const AdminHistory = () => {
   const [...adminBookings] = useGetBookingsAdmin();
   const adminBookingsDocs = adminBookings[1];

   /* Format Functions */
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

   return (
      <>
         <Helmet>
            <title>Casa Verde | Admin</title>
         </Helmet>

         <HistoryContainer className="container">
            {adminBookingsDocs.length === 0 ?
               <HistoryEmpty>
                  <div>
                     <EmptyIcon icon={faStickyNote} />
                     <h2>No hay ninguna reservación hecha</h2>
                  </div>
               </HistoryEmpty>
               :
               <>
                  <h2>Reservaciones</h2>
                  <HistoryGrid>
                     {adminBookingsDocs.map(booking => {
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
                                    <span>Fecha de evento</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{shortFormatDate(booking.bookingTime)}</h4>
                                    <span>Fecha de reserva</span>
                                 </div>
                                 <div className="booking-info">
                                    <h4>{booking.bookingState}</h4>
                                    <span>Estado de la reserva</span>
                                 </div>
                              </BookingSection>
                              <BookingFooter>
                                 <FooterButton
                                    confirmButton
                                    onClick={() => updateBooking({
                                       id: booking.id,
                                       confirm: true,
                                       rejected: false
                                    })}
                                 >Aceptar</FooterButton>
                                 <FooterButton
                                    onClick={() => updateBooking({
                                       id: booking.id,
                                       confirm: false,
                                       rejected: true
                                    })}
                                 >Rechazar</FooterButton>
                              </BookingFooter>
                           </BookingCard>
                        );
                     })}
                  </HistoryGrid>
               </>
            }
         </HistoryContainer>
      </>
   );
}
 
export default AdminHistory;