import "../css/Footer.css";

function Footer({ styleName, statsController }) {
  return (
    <section className={`footer ${styleName || ""} `}>
      <div className="homefooterContainer">
        <div classname="homeIcon">[■]</div>
        <div classname="homeText">HOME</div>
      </div>
      <div className="itemsContainer">
        <div classname="itemsIcon">[≡]</div>
        <div classname="itemsText">ITEMS</div>
      </div>
      <div className="addContainer">
        <div classname="addIcon">[+]</div>
        <div classname="addText">ADD</div>
      </div>
      <div className={`statsContainer ${statsController || ""}`}>
        <div classname="statsIcon">[▲]</div>
        <div classname="statsText">STATS</div>
      </div>
    </section>
  );
}

export default Footer;
