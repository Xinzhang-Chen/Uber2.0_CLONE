import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

var greeting = null;
const currentHour = new Date().getHours();
if (currentHour >= 18 && currentHour < 6) {
  greeting = 'Good evening';
} else if (currentHour >= 6 && currentHour < 12) {
  greeting = 'Good morning';
} else {
  greeting = 'Good afternoon';
}

const initialState = {
  origin: null,
  destination: null,
  travelTime: null,
  greeting: greeting,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime, setGreeting } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTime;
export const selectGreeting = (state) => state.nav.greeting;

export default navSlice.reducer;
