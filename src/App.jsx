import './App.css';
import {Routes , Route} from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { useState } from 'react';
function App() {
  const[isBurger, setBurger]=useState(false);

  return (
    <>
    
    <Routes>

    <Route path="/" element={<HomePage isBurger={isBurger} setBurger={setBurger} />}/>
    <Route path="/booking" element={<BookingPage isBurger={isBurger} setBurger={setBurger}/>}/>
    <Route path="/confirmed" element={<ConfirmedBooking isBurger={isBurger} setBurger={setBurger}/>}/>


    </Routes>

    </>
  );
}

export default App;