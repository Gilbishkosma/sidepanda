import { useAppSelector } from "../../app/hooks";
import {
  selectDate,
  selectTimeSelected,
} from "../../features/selectedDateTime/dateTimeSlice";
import { formatDate, formatTime } from "../../utils/dateUtil";
import { RightArrow } from "../icons";
import "./index.css";

const CalenderFooter = () => {
  const selectedTime = useAppSelector(selectTimeSelected);
  const selectedDate = useAppSelector(selectDate);

  const handleFormSubmission = () => {
    alert(
      `Your appointment has been scheduled. \nDate: ${formatDate(selectedDate)} \nTime: ${formatTime(selectedTime[0])} - ${formatTime(selectedTime[1])} `,
    );
  };

  return (
    <div className="footer">
      <p style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
        POWERED BY{" "}
        <a
          className="link"
          href="https://apps.shopify.com/appointo-appointments-and-bookings"
          target="_blank"
          rel="noreferrer"
        >
          APPOINTO
        </a>
      </p>
      {selectedTime.length > 0 && (
        <button className="btn" onClick={handleFormSubmission}>
          Next <RightArrow />
        </button>
      )}
    </div>
  );
};

export default CalenderFooter;
