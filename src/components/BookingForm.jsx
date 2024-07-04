import { useState } from "react";

const BookingForm = ({
  reservation,
  setReservation,
  availableTimes,
  dispatch,
  submitForm,
}) => {
  const [errors, setErrors] = useState({});

  // handle input change and set
  const changeHandler = (e) => {
    const { id, value } = e.target;
    let updatedErrors = { ...errors };
    switch (id) {
      case "date":
        if (new Date(value) < new Date()) {
          updatedErrors.date = "Date cannot be in the past";
        } else {
          delete updatedErrors.date;
        }
        break;
        case "name":
          if (!value) {
            updatedErrors.name = "Please enter your name";
          } else {
            delete updatedErrors.name;
          }
          break;
          case "email":
            if (!value) {
              updatedErrors.email = "Please enter your email";
            } else {
              delete updatedErrors.email;
            }
            break;

      case "time":
        if (!value) {
          updatedErrors.time = "Please select a time";
        } else {
          delete updatedErrors.time;
        }
        break;
      case "guests":
        if (value < 1 || value > 10) {
          updatedErrors.guests = "Please select a number between 1 and 10";
        } else {
          delete updatedErrors.guests;
        }
        break;
      case "occasion":
        if (!value) {
          updatedErrors.occasion = "Please select an occasion";
        } else {
          delete updatedErrors.occasion;
        }
        break;

      default:
        break;
    }
    setErrors(updatedErrors);

    if (id === "date") {
      dispatch({
        type: "ADD_RESERVATION",
        selectedDate: value,
        selectedTime: "",
      });
    } else if (id === "time") {
      dispatch({
        type: "ADD_RESERVATION",
        selectedTime: value,
        selectedDate: reservation.date,
      });
    }

    setReservation({ ...reservation, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("reservation", JSON.stringify(reservation));
    submitForm(reservation);
    setReservation({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    });
  };
  return (
    <section>
      <h1 className="form-heading">Book a Table</h1>
      <form className="ll-form" data-testid="form" aria-label="Booking a table" onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="date" aria-label="choose a date">Choose date</label>
          <input
            onChange={changeHandler}
            value={reservation.date}
            type="date"
            id="date"
            data-testid="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {errors.date && <p className="error"> {errors.date} </p>}
        </div>

        <div className="input-group">
          <label htmlFor="time" aria-label="choose a time">Choose time</label>

          <select
            onChange={changeHandler}
            value={reservation.time}
            id="time"
            data-testid="time"
            required
            min={new Date().toISOString().split("T")[1].split(".")[0]}
            placeholder="Choose a time"
          >
            <option key="DefaultTime" value="" data-testid="time-default">
              Choose a time
            </option>
            {availableTimes.map((time, idx) => (
              <option key={time} value={time} data-testid={"time" + idx}>
                {time}
              </option>
            ))}
          </select>

          {errors.time && <p className="error"> {errors.time} </p>}
        </div>
        <div className="input-group">
          <label htmlFor="name" aria-label="enter your full name">Full Name</label>
          <input 
          onChange={changeHandler}
          value={reservation.name}
          type="text"
          placeholder="Enter your name"
       
          id="name"
          required
          data-testid="name"
          
          />
          {errors.name && <p className="error"> {errors.name} </p>}
        </div>
            <div className="input-group">
              <label htmlFor="email" aria-label="enter your email">Email</label>
              <input type="email" name="email" placeholder="Email" 
              onChange={changeHandler}
              value={reservation.email}
              id="email"
              required
              data-testid="email"
              />
              {errors.occasion && <p className="error"> {errors.emaill} </p>}
              </div>
        <div className="input-group">
          <label htmlFor="guests" aria-label="enter the number of guests">Number of guests</label>

          <input
            onChange={changeHandler}
            value={reservation.guests}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            data-testid="guests"
          />
          {errors.guests && <p className="error"> {errors.guests} </p>}
        </div>

        <div className="input-group">
          <label htmlFor="occasion" aria-label="choose the occasion">Occasion</label>

          <select
            onChange={changeHandler}
            value={reservation.occasion}
            id="occasion"
            data-testid="occasion"
            required
           
          >
            <option key={"chooseOccation"} value={""}>
              Choose an Occasion
            </option>
            <option key={"Birthday"} value="Birthday">
              {" "}
              Birthday
            </option>
            <option key={"Anniversary"} value="Anniversary">
              Anniversary
            </option>
          </select>

          {errors.occasion && <p className="error"> {errors.occasion} </p>}
        </div>



        <input
          type="submit"
          aria-label="submit on click"
          value="Book Now!"
          data-testid="submit"
          disabled={Object.keys(errors).length > 0}
          className="button"
        ></input>
      </form>
    </section>
  );
};

export default BookingForm;