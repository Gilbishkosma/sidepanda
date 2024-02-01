import Select from "../Form/Select";
import TimeSlot from "./TimeSlot";

const TimeSelect = () => {
  return (
    <div className="timeCard">
      <Select title="SELECTR FROM VARIANTS" />
      <div>
        <p>Thursday Dec 2 - Available Slots</p>
        <div className="timeRoot">
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
          <TimeSlot title="03: 30 AM - 04:00 AM" />
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;
