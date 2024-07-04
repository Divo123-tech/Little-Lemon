import { fetchAPI, submitAPI } from "./API";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import Main from "./Main";
import { useNavigate } from "react-router-dom";

function BookingPage({isBurger, setBurger}) {
  const navigate = useNavigate("");

  const updateTimes = (availableTimes, action) => {
    availableTimes = fetchAPI(new Date(action.selectedDate));
    return availableTimes;
  };

  function submitForm(reservation) {
    if (submitAPI(reservation)) {
      navigate("/confirmed");
    }
  }

  let today = new Date();
  const initializeTimes = () => fetchAPI(today);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [reservation, setReservation] = useState({
    date: new Date().toISOString().split("T")[0],
    name: "",
    email: "",
    time: "",
    guests: "",
    occasion: "",
  });

  return (
    <>
     <Nav isBurger={isBurger} setBurger={setBurger}/>
    
      <Main>
        <BookingForm
          reservation={reservation}
          setReservation={setReservation}
          availableTimes={availableTimes}
          dispatch={dispatch}
          today={today}
          submitForm={submitForm}
        />
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;