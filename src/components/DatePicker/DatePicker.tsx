import "./DatePicker.scss";

type DatePicker = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const DatePicker = ({ value, onChange, placeholder }: DatePicker) => {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="dateInput-field"
    />
  );
};
