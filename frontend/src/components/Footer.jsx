import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer({ styleName, statsController }) {
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login";
  };
  return (
    <section className={`footer ${styleName || ""} `}>
      <Link to="/">
        <div className="homefooterContainer">
          <div classname="homeIcon">[■]</div>
          <div classname="homeText">HOME</div>
        </div>
      </Link>
      <Link to="/stats">
        <div className={`statsFooterItem ${statsController || ""}`}>
          <div classname="statsIcon">[◰]</div>
          <div classname="statsText">STATS</div>
        </div>
      </Link>
      <Link to="/first-topic">
        <div className="addContainer">
          <div classname="addIcon">[+]</div>
          <div classname="addText">ADD</div>
        </div>
      </Link>

      <div className="itemsContainer" onClick={handleLogout}>
        <div classname="itemsIcon">[↪]</div>
        <div classname="itemsText">LOGOUT</div>
      </div>
    </section>
  );
}

export default Footer;
