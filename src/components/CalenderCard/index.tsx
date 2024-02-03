import CalenderFooter from "../CalenderFooter";
import TimeSlotList from "../TimeSlotList";
import Calender from "./Calender";
import "./index.css";

const CalenderCard = () => {
  return (
    <div className="root">
      <div className="content">
        <Calender />
        <TimeSlotList />
      </div>
      <CalenderFooter />
    </div>
  );
};

export default CalenderCard;
