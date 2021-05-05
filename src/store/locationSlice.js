import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    name: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = (state) => state.location.name;

export default locationSlice.reducer;
