interface selectProp {
  title: string;
}

const Select = ({ title }: selectProp) => {
  return (
    <>
      <p>{title}</p>
      <select style={{ width: "100%", padding: 10 }}>
        <option style={{ padding: 10 }}>30 Min</option>
        <option style={{ padding: 10 }}>1 hour</option>
      </select>
    </>
  );
};

export default Select;
