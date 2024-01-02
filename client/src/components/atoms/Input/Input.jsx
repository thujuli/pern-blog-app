import "./input.css";

export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      className="input"
      id={name}
      name={name}
      placeholder={placeholder}
    />
  );
}
