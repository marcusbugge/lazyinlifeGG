import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    setGames: (state, action) => action.payload,
  },
});

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
