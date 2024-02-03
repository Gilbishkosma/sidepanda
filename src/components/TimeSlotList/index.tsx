import { useEffect, useState } from "react";
import { formatDate, getStartEndDates } from "../../utils/dateUtil";
import Select from "../Form/Select";
import TimeSlot from "./TimeSlot";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchSlotsByDate,
  selectData,
  selectStatus,
} from "../../features/timeSlots/timeSlotsSlice";
import { selectDate } from "../../features/selectedDateTime/dateTimeSlice";
import { getObjFromList } from "../../utils";
import Loader from "../icons/loader";
import "./index.css";

const TimeSlotList = () => {
  const [duration, setDuration] = useState("30 min");
  const timeSlots = useAppSelector(selectData);
  const selectedDate = useAppSelector(selectDate);
  const [slots, setSlots] = useState([]);
  const status = useAppSelector(selectStatus);

  const currentDate = new Date(selectedDate);

  useEffect(() => {
    setSlots(getObjFromList(timeSlots)[formatDate(selectedDate)] || []);
  }, [timeSlots, selectedDate]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // get the time slot for this month
    const { firstDateOfCurrentMonth, firstDateOfNextMonth } = getStartEndDates(
      new Date(),
    );
    dispatch(
      fetchSlotsByDate({
        startDate: formatDate(firstDateOfCurrentMonth),
        endDate: formatDate(firstDateOfNextMonth),
      }),
    );
  }, []);

  const handleDuration = (value: string) => {
    setDuration(value);
  };

  return (
    <div className="timeCard">
      <Select
        title="Select from variants"
        value={duration}
        options={["30 min", "60 min"]}
        handleChange={handleDuration}
      />
      <hr />
      <div>
        <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 14 }}>
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
          })}
          , {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getDate()} - Available Slots
        </p>
        {status === "pending" ? (
          <Loader />
        ) : (
          <div className="timeRoot">
            {slots?.map((item: any, index: number) => (
              <TimeSlot time={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSlotList;
