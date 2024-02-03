import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectTimeSelected,
  setTime,
} from "../../features/selectedDateTime/dateTimeSlice";
import { CheckIcon } from "../icons";
import { formatTime } from "../../utils/dateUtil";

interface TimeProp {
  time: {
    start_time: string;
    end_time: string;
  };
}

const TimeSlot = ({ time }: TimeProp) => {
  const startTime = formatTime(time.start_time);
  const endTime = formatTime(time.end_time);
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
        {startTime} - {endTime} {isSelected && <CheckIcon />}
      </p>
    </>
  );
};

export default TimeSlot;
