import "../css/MobileNav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login";
  };

  return (
    <div className="mobileNavWrap">
      <button
        className="mobileNavTrigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "[✕]" : "[≡]"}
      </button>

      {open && (
        <nav className="mobileNavPanel">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `mobileNavItem ${isActive ? "active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <span className="mobileNavIcon">⌂</span>
            <span className="mobileNavLabel">HOME</span>
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `mobileNavItem ${isActive ? "active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <span className="mobileNavIcon">◰</span>
            <span className="mobileNavLabel">STATS</span>
          </NavLink>

          <NavLink
            to="/first-topic"
            className="mobileNavItem"
            onClick={() => setOpen(false)}
          >
            <span className="mobileNavIcon">+</span>
            <span className="mobileNavLabel">ADD</span>
          </NavLink>

          <button className="mobileNavItem" onClick={handleLogout}>
            <span className="mobileNavIcon">↪</span>
            <span className="mobileNavLabel">LOGOUT</span>
          </button>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
