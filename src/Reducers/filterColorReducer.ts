import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "Color",

      value: "color",
      label: "color",
    },
    {
      name: "White",
      value: "white",
      label: "White",
    },
    {
      name: "Black",
      value: "black",
      label: "Black",
    },
    {
      name: "Red",
      value: "red",
      label: "Red",
    },
    {
      name: "Blue",
      value: "blue",
      label: "Blue",
    },
    {
      name: "Green",
      value: "green",
      label: "Green",
    },
  ],
};

const filterColorSlice = createSlice({
  name: "filterColor",
  initialState,
  reducers: {
    setFilterColor: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default filterColorSlice.reducer;
