import CalenderFooter from "../CalenderFooter";
import Calender from "./Calender";
import TimeSelect from "./TimeSelect";
import "./index.css";

const CalenderCard = () => {
  return (
    <div className="root">
      <div className="content">
        <Calender />
        <TimeSelect />
      </div>
      <CalenderFooter />
    </div>
  );
};

export default CalenderCard;
