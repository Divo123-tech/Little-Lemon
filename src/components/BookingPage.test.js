import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

test("Renders BookingPage", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const form = screen.getByTestId("form");

  expect(form).toBeInTheDocument();
});

test("Checks all inputs are required", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const date = screen.getByTestId("date");
  const time = screen.getByTestId("time");
  const guests = screen.getByTestId("guests");
  expect(date).toBeRequired();
  expect(time).toBeRequired();
  expect(guests).toBeRequired();
});

test("Checks all inputs recive only valid values", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const date = screen.getByTestId("date");
  const time = screen.getByTestId("time");
  const guests = screen.getByTestId("guests");
  const occasion = screen.getByTestId("occasion");
  const submit = screen.getByTestId("submit");
  fireEvent.change(date, { target: { value: "2022-08-11" } });
  fireEvent.change(time, { target: { value: "17:00" } });
  fireEvent.change(guests, { target: { value: "1" } });
  fireEvent.change(occasion, { target: { value: "Birthday" } });
  expect(submit).toHaveAttribute("disabled");
});

test("Checks initilize times", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const time = screen.getByTestId("time1");

  expect(time).toHaveAttribute("value");
});

test("Checks updateTimes functions", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const date = screen.getByTestId("date");
  const firstTime = screen.getByTestId("time1");
  fireEvent.change(date, { target: { value: "2024-08-11" } });
  const secondTime = screen.getByTestId("time1");
  expect(firstTime).not.toHaveValue(secondTime);
});
