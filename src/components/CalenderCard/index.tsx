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
      <div className="footer">
        <p style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
          POWERED BY APPOINTO
        </p>
        <button>Next</button>
      </div>
    </div>
  );
};

export default CalenderCard;
