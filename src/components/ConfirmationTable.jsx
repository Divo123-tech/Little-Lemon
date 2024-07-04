import React from 'react'

const ConfirmationTable = ({reservation}) => {
  return (
    <table className="booking-table">
        
    <tbody>
    <tr>
            <td>Name</td>
            <td>{reservation.name}</td>
        </tr>
        <tr>
            <td>Date</td>
            <td>{reservation.date}</td>
        </tr>
        <tr>
            <td>Time</td>
            <td>{reservation.time}</td>
        </tr>
        <tr>
            <td>Number of Guests</td>
            <td>{reservation.guests}</td>
        </tr>
        <tr>
            <td>Occasion</td>
            <td>{reservation.occasion}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>{reservation.email}</td>
        </tr>
    </tbody>
</table>
  )
}

export default ConfirmationTable