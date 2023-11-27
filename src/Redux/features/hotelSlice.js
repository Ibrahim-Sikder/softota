import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

const initialState = {
  hotelDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchHotelData = createAsyncThunk(
  "hotel/fetchHotelData",
  async (data) => {
    const response = await axios.post("http://localhost:5000/api/v1", data);
    return response.data;
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotelData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHotelData.fulfilled, (state, action) => {
      state.hotelDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchHotelData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

 

export default hotelSlice.reducer;
 