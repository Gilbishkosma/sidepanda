import { useEffect, useState } from "react";
import { formatDate, getStartEndDates } from "../../utils/dateUtil";
import Select from "../Form/Select";
import TimeSlot from "./TimeSlot";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchSlotsByDate,
  selectData,
} from "../../features/timeSlots/timeSlotsSlice";
import { selectDate } from "../../features/selectedDateTime/dateTimeSlice";
import { getObjFromList } from "../../utils";

const TimeSelect = () => {
  const [duration, setDuration] = useState(30);
  const timeSlots = useAppSelector(selectData);
  const selectedDate = useAppSelector(selectDate);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(getObjFromList(timeSlots)[formatDate(selectedDate)]);
  }, [timeSlots, selectedDate]);

  useEffect(() => {}, [selectedDate]);

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

  const handleDuration = (value: number) => {
    setDuration(value);
  };

  return (
    <div className="timeCard">
      <Select
        title="SELECT FROM VARIANTS"
        value={duration}
        options={[30, 60]}
        handleChange={handleDuration}
      />
      <div>
        <p>Thursday Dec 2 - Available Slots</p>
        <div className="timeRoot">
          {slots?.map((item: any, index: number) => (
            <TimeSlot time={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;
