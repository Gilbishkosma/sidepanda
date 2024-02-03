import { useAppSelector } from "../../app/hooks";
import {
  selectDate,
  selectTimeSelected,
} from "../../features/selectedDateTime/dateTimeSlice";
import { RightArrow } from "../icons";

const CalenderFooter = () => {
  const selectedTime = useAppSelector(selectTimeSelected);
  const selectedDate = useAppSelector(selectDate);

  const handleFormSubmission = () => {
    alert(
      `Your appointment has been scheduled. Date: ${new Date(selectedDate).toLocaleString()} . Time: ${selectedTime[0]} - ${selectedTime[1]} `,
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
