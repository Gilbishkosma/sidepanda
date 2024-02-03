import type { ChangeEvent } from "react";
import "./index.css";

interface selectProp {
  title: string;
  value: string;
  options: string[];
  handleChange: (value: string) => void;
}

const Select = ({ title, value, options, handleChange }: selectProp) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value);
  };

  return (
    <>
      <p style={{ fontWeight: 600, marginBottom: 2, fontSize: 14 }}>{title}</p>
      <select className="variant" value={value} onChange={onChange}>
        {options.map(item => (
          <option style={{ padding: 10 }} value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
