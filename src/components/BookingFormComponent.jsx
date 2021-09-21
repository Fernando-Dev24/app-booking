import React, {useState} from 'react';
import {Space, DatePicker, TimePicker} from 'antd';
import moment from 'moment';
import { getUnixTime } from 'date-fns';
import Alert from '../elements/Alert';
import {useAuth} from '../contexts/AuthContext';
import {
   BookingFormContainer,
   BookingFormHeader,
   BookingButton,
   BookingForm,
   OptionsGrid,
   SelectedOption,
   Option,
   SubmitButton
} from '../elements/BookingFormElements';
import { PlansGrid, PlanCard } from '../elements/PlanElements';
import makeReservation from '../functions/makeReservation';

const BookingFormComponent = () => {
   const {user} = useAuth();

   /* Options and formats arrays */
   const eventType = ['Boda', 'Cumpleaños', 'Bautizo', 'Seminario'];
   const planType = ['Básico', 'Completo'];
   const guestsOptions = [50, 100, 150];
   const dateFormat = 'DD/MM/YYYY';
   const timeFormat = 'HH:mm';

   /* States */
   const [showEventTypes, setShowTypes] = useState(false);
   const [eventName, setEventName] = useState('Boda');
   const [showPlanTypes, setShowPlanTypes] = useState(false);
   const [planName, setPlanName] = useState('Completo');
   const [showGuests, setShowGuests] = useState(false);
   const [guests, setGuests] = useState(100);
   const [date, setDate] = useState(moment(new Date()));
   const [time, setTime] = useState(moment(new Date()));
   const [showPlansCards, setShowPlansCards] = useState(false);
   const [alertState, setAlertState] = useState(false);
   const [alertContent, setAlertContent] = useState({});

   /* handleState */
   const handleEvent = (e) => {
      setEventName(e.currentTarget.innerText);
      setShowTypes(false);
   };

   const handlePlan = (e) => {
      setPlanName(e.currentTarget.innerText);
      setShowPlanTypes(false);
   };

   const handlePlansCard = (e) => {
      if(e.target.id === 'complete') {
         setPlanName('Completo');
         window.scroll(0, 500);
      } else if(e.target.id === 'basic') {
         setPlanName('Básico');
         window.scroll(0, 500);
      }
   };

   const handleGuests = (e) => {
      setGuests(e.currentTarget.innerText);
      setShowGuests(false);
   };

   /* handleSubmit function */
   const handleSubmit = (e) => {
      e.preventDefault();
      setAlertState(false);
      setAlertContent({});

      /* Getting date and time from their objects */
      const dateObject = date._d;
      const timeObject = time._d;

      /* Validations */
      if(
         eventName === null &&
         planName === null &&
         isNaN(guests) &&
         date === null &&
         time === null
      ) {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Asegurate que todos los campos esten rellanados'
         });
         return;
      };

      /* Sending data to the database */
      makeReservation({
         eventName: eventName,
         planName: planName,
         guests: guests,
         date: getUnixTime(dateObject),
         time: getUnixTime(timeObject),
         bookingTime: getUnixTime(new Date()),
         userId: user.uid
      }).then(() => {
         setEventName('Boda');
         setPlanName('Completo');
         setGuests(100);
         setDate(moment(new Date()));
         setTime(moment(new Date()));

         setAlertState(true);
         setAlertContent({
            type: 'success',
            message: 'Reservación hecha con éxito'
         });
      }).catch(() => {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Hubo un problema, intentalo de nuevo'
         });
      });
   };


   return (
      <>
         <BookingFormContainer className="container">
            <BookingFormHeader>
               <p>Realiza tus reservas en linea llenando los campos de abajo</p>
               <BookingButton
                  onClick={() => setShowPlansCards(!showPlansCards)}
               >Ver planes</BookingButton>
            </BookingFormHeader>
            <BookingForm>
               <OptionsGrid>
                  <article className="options-container">
                     <p>Tipo de evento</p>
                     <SelectedOption onClick={() => setShowTypes(!showEventTypes)}>
                        {eventName}
                     </SelectedOption>
                     {showEventTypes &&
                        eventType.map((eventName, index) => {
                           return <Option key={index} onClick={handleEvent}>{eventName}</Option>
                        })
                     }
                  </article>

                  <article className="options-container">
                     <p>Plan</p>
                     <SelectedOption onClick={() => setShowPlanTypes(!showPlanTypes)}>
                        {planName}
                     </SelectedOption>
                     {showPlanTypes &&
                        planType.map((plan, index) => {
                           return <Option key={index} onClick={handlePlan}>{plan}</Option>
                        })
                     }
                  </article>

                  <article className="options-container">
                     <p>Invitados</p>
                     <SelectedOption onClick={() => setShowGuests(!showGuests)}>
                        {guests}
                     </SelectedOption>
                     {showGuests &&
                        guestsOptions.map((guestNumber, index) => {
                           return <Option key={index} onClick={handleGuests}>{guestNumber}</Option>
                        })
                     }
                  </article>

                  <article className="options-container">
                     <p>Fecha</p>
                     <Space direction="vertical">
                        <DatePicker
                           defaultValue={date}
                           onChange={setDate}
                           format={dateFormat}
                           disabledDate={currentDay => {
                              return currentDay && currentDay < moment(new Date());
                           }}
                        />
                     </Space>
                  </article>

                  <article className="options-container">
                     <p>Hora</p>
                     <Space direction="vertical">
                        <TimePicker 
                           defaultValue={time}
                           onChange={setTime}
                           format={timeFormat}
                           use12Hours
                        />
                     </Space>
                  </article>
               </OptionsGrid>
               <SubmitButton onClick={handleSubmit} type="submit" >Reservar</SubmitButton>
            </BookingForm>
         </BookingFormContainer>
			
         {showPlansCards &&
            <section className="container">
               <PlansGrid>
                  <PlanCard>
                     <h3>Plan Completo</h3>
                     <h2>$30.0</h2>
                     <ul>
                        <li>Decoración de parte de la casa</li>
                        <li>Comida a elección</li>
                     </ul>
                     <button
                        className="selectButton"
                        id="complete"
                        onClick={handlePlansCard}
                     >Seleccionar</button>
                  </PlanCard>
                  <PlanCard>
                     <h3>Plan Básico</h3>
                     <h2>$10.0</h2>
                     <ul>
                        <li>Decoración propia</li>
                        <li>Comida a conveniencia de Casa Verde</li>
                     </ul>
                     <button
                        className="selectButton"
                        id="basic"
                        onClick={handlePlansCard}
                     >Seleccionar</button>
                  </PlanCard>
               </PlansGrid>
			   </section>
         }

         <Alert
            type={alertContent.type}
            message={alertContent.message}
            alertState={alertState}
            setAlertState={setAlertState}
         />
      </>
   );
}
 
export default BookingFormComponent;