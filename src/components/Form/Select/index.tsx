import type { ChangeEvent } from "react";

interface selectProp {
  title: string;
  value: number;
  options: number[];
  handleChange: (value: number) => void;
}

const Select = ({ title, value, options, handleChange }: selectProp) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(parseInt(event.target.value));
  };

  return (
    <>
      <p>{title}</p>
      <select
        style={{ width: "100%", padding: 10 }}
        value={value}
        onChange={onChange}
      >
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
