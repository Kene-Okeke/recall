import "../css/Button.css";

function Button({ children, onClick, className }) {
  return (
    <button className={`mainButton ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
