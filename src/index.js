// Setup up a React Code from Scratch
// to which displays "Breakfast Time" if
// the current time is before 12:00 in
// the morning, "Lunch Time" if the time is
// between 12:00 to 18:00, and "Dinner Time".
import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import "./index.css";
// if the current time is after 18:00.
// Sample Output at 15:00.

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
