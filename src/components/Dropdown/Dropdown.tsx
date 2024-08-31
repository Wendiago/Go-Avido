import "./Dropdown.scss";

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};
export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="dropdown-select"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
