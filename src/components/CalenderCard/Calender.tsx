import type { OnArgs } from "react-calendar";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectDate,
  setDate,
} from "../../features/selectedDateTime/dateTimeSlice";
import {
  getCurrentDate,
  getFormattedDate,
  getStartEndDates,
} from "../../utils/dateUtil";
import { fetchSlotsByDate } from "../../features/timeSlots/timeSlotsSlice";
import moment from "moment";

const Calender = () => {
  const today = new Date();
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(selectDate);

  const handleMonthChange = ({ activeStartDate }: OnArgs) => {
    const activeDate = moment(activeStartDate);
    // call api again on month change and set the 1st of that month as selected
    const { firstDateOfCurrentMonth, firstDateOfNextMonth } =
      getStartEndDates(activeDate);
    dispatch(
      fetchSlotsByDate({
        startDate: firstDateOfCurrentMonth,
        endDate: firstDateOfNextMonth,
      }),
    );

    if (!moment(selectedDate).isSame(activeDate, "month")) {
      // check if the selected date is of last month or not, if its of last month then select 1st of this month
      if (activeDate.isSame(moment(), "month")) {
        // to check if the dates are disabled for previous month, then set the current date for it.
        dispatch(setDate(getCurrentDate()));
      } else {
        dispatch(setDate(getFormattedDate(activeStartDate)));
      }
    }
  };

  return (
    <div className="calenderCard">
      <div style={{ maxWidth: 340, width: "100%" }}>
        <h2 className="mb0">Test Service</h2>
        <span style={{ display: "flex", gap: 5 }}>
          <p className="mt0" style={{ fontWeight: "bold", color: "#555770" }}>
            Timezone:{" "}
          </p>
          <p className="mt0">Asia/Calcutta</p>
        </span>
      </div>

      <Cal
        className="calRoot"
        prev2Label={null}
        next2Label={null}
        minDate={today}
        value={selectedDate}
        onChange={value =>
          dispatch(setDate(getFormattedDate(value?.toString())))
        }
        onActiveStartDateChange={handleMonthChange}
      />
    </div>
  );
};

export default Calender;
