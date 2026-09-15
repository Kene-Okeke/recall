import "../css/Button.css";

function Button({ children, onClick, className, type, form }) {
  return (
    <button
      className={`mainButton ${className || ""}`}
      type={type}
      form={form}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
