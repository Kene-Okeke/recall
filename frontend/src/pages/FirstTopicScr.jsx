import "../css/FirstTopicScr.css";

import Button from "../components/Button.jsx";

function FirstTopicScr() {
  return (
    <section className="firstTopicContainer">
      <div className="progressDots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>

      <div className="cardPrompt">&gt; FIRST_CARD</div>
      <h1 className="cardTitle">
        Let's give you <br /> something to <br /> remember
      </h1>
      <div className="stamp">CARD 01</div>

      <form action="" className="topicForm">
        <div className="topicBox">
          <label htmlFor="topic">TOPIC</label>
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="e.g. Two Sum"
          />
        </div>

        <div className="categoryBox">
          <label htmlFor="category">CATEGORY</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="e.g. Arrays"
          />
        </div>
      </form>

      <Button className={"topicButton"}>ADD TOPIC →</Button>
    </section>
  );
}

export default FirstTopicScr;
