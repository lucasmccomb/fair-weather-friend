import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./components/App";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let wrapper = null;
beforeEach(() => {
  const store = mockStore({
    forecast: { five_day: [] },
    currentWeather: {
      temp: "",
      feels_like: "",
      wind_speed: "",
      wind_dir: "",
      humidity: "",
      clouds: "",
      general: "",
      location_name: "",
      icon_code: "",
    },
    location: { name: "" },
    loading: {
      isLoading: false,
    },
  });
  wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

afterEach(() => {
  wrapper = null;
});

test("renders the app with empty state", () => {
  const headerElem = screen.getByText(/fair weather friend/i);
  expect(headerElem).toBeInTheDocument();
});

test("renders location button", () => {
  const locationButton = screen.getByText(/use current location/i);
  expect(locationButton).toBeInTheDocument();
});

test("renders zipcode input", () => {
  const zipCodeInputLabel = screen.getByText(/enter zip code/i);
  expect(zipCodeInputLabel).toBeInTheDocument();
});

test("renders footer", () => {
  const footer = screen.getByText(/Created by Lucas McComb/i);
  expect(footer).toBeInTheDocument();
});

test("entering zip code and clicking submit renders current weather", async () => {
  const zipCodeInput = screen.getByPlaceholderText("ex: 11249");
  expect(zipCodeInput).toBeInTheDocument();
  await userEvent.type(zipCodeInput, "11249");
  await userEvent.click(screen.getByText("submit"));
  setTimeout(() => {
    expect(screen.getByText("Brooklyn")).toBeInTheDocument();
    expect(screen.getByText("feels like")).toBeInTheDocument();
    expect(screen.getByText("wind")).toBeInTheDocument();
    expect(screen.getByText("humidity")).toBeInTheDocument();
    expect(screen.getByText("clouds")).toBeInTheDocument();
  }, 2000);
});

test("clicking use current location btn loads current weather & forecast", async () => {
  const currentLocationBtn = screen.getByText("use current location");
  expect(currentLocationBtn).toBeInTheDocument();
  await userEvent.click(currentLocationBtn);
  setTimeout(() => {
    expect(screen.getByText("feels like")).toBeInTheDocument();
    expect(screen.getByText("wind")).toBeInTheDocument();
    expect(screen.getByText("humidity")).toBeInTheDocument();
    expect(screen.getByText("clouds")).toBeInTheDocument();
    expect(screen.getByText("five-day forecast")).toBeInTheDocument();
  }, 2000);
});
