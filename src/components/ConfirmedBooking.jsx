import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

import ConfirmationTable from "./ConfirmationTable";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  const reservation = JSON.parse(localStorage.getItem("reservation")) || {};
  return (
    <>
      <Nav />
      <Main>
        <div className="confirmation ">
          <h1 data-testid="bookingConfirmed" className="form-heading">YOUR BOOKING HAS BEEN CONFIRMED!</h1>
 

          <ConfirmationTable reservation={reservation} />
   
          <Link to="/" role="button" className="button">
            Back to Home page
          </Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}