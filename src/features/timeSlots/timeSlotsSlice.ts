import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import { fetchSlots } from "./timeSlotApi";

interface timeInterface {
  start_time: string;
  end_time: string;
}

interface timeSlotInterface {
  date: string;
  slots: timeInterface[];
}

interface stateInterface {
  status: string;
  data: timeSlotInterface[];
}

const initialState: stateInterface = {
  status: "idle",
  data: [],
};

export const fetchSlotsByDate = createAsyncThunk(
  "timeSlotSlice/fetchByDate",
  fetchSlots,
);

export const timeSlotSlice = createAppSlice({
  name: "timeSlots",
  initialState: initialState,
  reducers: {},
  selectors: {
    selectStatus: timeSlots => timeSlots.status,
    selectData: timeSlots => timeSlots.data,
  },
  extraReducers: builder => {
    builder.addCase(fetchSlotsByDate.fulfilled, (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    });
    builder.addCase(fetchSlotsByDate.pending, state => {
      state.status = "pending";
    });
    builder.addCase(fetchSlotsByDate.rejected, state => {
      state.status = "failed";
    });
  },
});

//actions
export const {} = timeSlotSlice.actions;

//selectors
export const { selectStatus, selectData } = timeSlotSlice.selectors;
