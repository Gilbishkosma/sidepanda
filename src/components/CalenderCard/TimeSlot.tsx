import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectTimeSelected,
  setTime,
} from "../../features/selectedDateTime/dateTimeSlice";
import { CheckIcon } from "../icons";

interface TimeProp {
  time: {
    start_time: string;
    end_time: string;
  };
}

const formatTime = (date: Date) => {
  return date.getHours() + ":" + date.getMinutes();
};

const TimeSlot = ({ time }: TimeProp) => {
  const startTime = new Date(time.start_time);
  const endTime = new Date(time.end_time);
  const dispatch = useAppDispatch();
  const selectedTime = useAppSelector(selectTimeSelected);

  const isSelected =
    selectedTime[0] === time.start_time && selectedTime[1] === time.end_time;

  return (
    <>
      <p
        className={`timeBox ${isSelected ? "isActive" : ""} `}
        onClick={() => dispatch(setTime({ ...time }))}
      >
        {formatTime(startTime)} - {formatTime(endTime)}{" "}
        {isSelected && <CheckIcon />}
      </p>
    </>
  );
};

export default TimeSlot;
