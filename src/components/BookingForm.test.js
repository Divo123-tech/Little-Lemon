import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { submitAPI } from "./API";

const mockReservation = {};
const mockSetReservation = jest.fn();
const mockAvailableTimes = ["19:00", "20:00", "21:30"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

test("renders booking form", () => {
  render(
    <BookingForm
      reservation={mockReservation}
      setReservation={mockSetReservation}
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const submitButton = screen.getByText("Book Now!");
  expect(submitButton).toBeInTheDocument();
});

test("submit button calls submitAPI", () => {
  render(
    <BookingForm
      reservation={mockReservation}
      setReservation={mockSetReservation}
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const submitButton = screen.getByText("Book Now!");
  fireEvent.click(submitButton);
  expect(mockSubmitForm).toHaveBeenCalled();
});

test("onChange calls ava", () => {});

test("onChange calls dispatch", () => {
  render(
    <BookingForm
      reservation={mockReservation}
      setReservation={mockSetReservation}
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const time = screen.getByTestId("time");
  fireEvent.change(time, { target: { value: "20:00" } });

  expect(mockDispatch).toHaveBeenCalled();
});

test("submit button calls setReservation", () => {
  render(
    <BookingForm
      reservation={mockReservation}
      setReservation={mockSetReservation}
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const submitButton = screen.getByText("Book Now!");
  fireEvent.click(submitButton);
  expect(mockSetReservation).toHaveBeenCalled();
});
