import type { OnArgs } from "react-calendar";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectDate,
  setDate,
} from "../../features/selectedDateTime/dateTimeSlice";
import { formatDate, getStartEndDates } from "../../utils/dateUtil";
import { fetchSlotsByDate } from "../../features/timeSlots/timeSlotsSlice";

const Calender = () => {
  const today = new Date();
  const dispatch = useAppDispatch();
  const dateSelected = useAppSelector(selectDate);

  const handleMonthChange = ({ activeStartDate }: OnArgs) => {
    // call api again on month change and set the 1st of that month as selected
    const { firstDateOfCurrentMonth, firstDateOfNextMonth } = getStartEndDates(
      new Date(activeStartDate || ""),
    );
    dispatch(
      fetchSlotsByDate({
        startDate: formatDate(firstDateOfCurrentMonth),
        endDate: formatDate(firstDateOfNextMonth),
      }),
    );

    if (
      new Date(dateSelected).getMonth() !==
      new Date(activeStartDate || "").getMonth()
    ) {
      if (
        new Date(activeStartDate || "").getMonth() === new Date().getMonth()
      ) {
        dispatch(setDate(new Date().toLocaleDateString()));
      } else {
        dispatch(setDate(activeStartDate?.toLocaleDateString()));
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
        value={dateSelected}
        onChange={value => dispatch(setDate(value?.toLocaleString()))}
        onActiveStartDateChange={handleMonthChange}
      />
    </div>
  );
};

export default Calender;
