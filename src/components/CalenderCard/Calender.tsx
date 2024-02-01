import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";

const Calender = () => {
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

      <Cal className="calRoot" prev2Label={null} next2Label={null} />
    </div>
  );
};

export default Calender;
