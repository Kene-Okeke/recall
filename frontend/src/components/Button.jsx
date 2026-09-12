import "../css/Button.css";

function Button({ children, onClick }) {
  return (
    <button className="mainButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
