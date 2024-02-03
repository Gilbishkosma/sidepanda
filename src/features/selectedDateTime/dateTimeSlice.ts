import moment from "moment";
import { createAppSlice } from "../../app/createAppSlice";
import { getCurrentDate } from "../../utils/dateUtil";

interface stateProp {
  dateSelected: string;
  timeSelected: string[];
}

const initialState: stateProp = {
  dateSelected: getCurrentDate(),
  timeSelected: [],
};

export const dateTimeSlice = createAppSlice({
  name: "dateTime",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.dateSelected = action.payload;
      state.timeSelected = [];
    },
    setTime: (state, action) => {
      state.timeSelected = [action.payload.start_time, action.payload.end_time];
    },
  },
  selectors: {
    selectTimeSelected: dateTime => dateTime.timeSelected,
    selectDate: dateTime => dateTime.dateSelected,
  },
});

export const { setDate, setTime } = dateTimeSlice.actions;
export const { selectTimeSelected, selectDate } = dateTimeSlice.selectors;
