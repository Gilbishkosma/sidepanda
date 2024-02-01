interface TimeProp {
  title: string;
}

const TimeSlot = ({ title }: TimeProp) => {
  return (
    <>
      <p className="timeBox"> {title} </p>
    </>
  );
};

export default TimeSlot;
