import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer({ styleName, statsController }) {
  return (
    <section className={`footer ${styleName || ""} `}>
      <Link to="/">
        <div className="homefooterContainer">
          <div classname="homeIcon">[■]</div>
          <div classname="homeText">HOME</div>
        </div>
      </Link>
      <Link to="/stats">
        <div className="itemsContainer">
          <div classname="itemsIcon">[≡]</div>
          <div classname="itemsText">ITEMS</div>
        </div>
      </Link>
      <Link to="">
        <div className="addContainer">
          <div classname="addIcon">[+]</div>
          <div classname="addText">ADD</div>
        </div>
      </Link>
      <Link>
        <div className={`statsFooterItem ${statsController || ""}`}>
          <div classname="statsIcon">[▲]</div>
          <div classname="statsText">STATS</div>
        </div>
      </Link>
    </section>
  );
}

export default Footer;
