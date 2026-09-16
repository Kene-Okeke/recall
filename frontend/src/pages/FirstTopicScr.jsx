import "../css/FirstTopicScr.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstRevScreen from "./FirstRevScreen.jsx";

import Button from "../components/Button.jsx";

function FirstTopicScr() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleAddTopic = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/addTopic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title,
        category,
      }),
    });

    console.log(response);

    if (response.ok) {
      navigate("/first-rev", {
        state: { title },
      });
    }
  };
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

      <form id="topicForm" className="topicForm">
        <div className="topicBox">
          <label htmlFor="topic">TOPIC</label>
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="e.g. Two Sum"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="categoryBox">
          <label htmlFor="category">CATEGORY</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="e.g. Arrays"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </form>
      <div className="topicCont">
        <Button
          className={"topicButton"}
          onClick={handleAddTopic}
          form="topicForm"
        >
          ADD TOPIC →
        </Button>
      </div>
    </section>
  );
}

export default FirstTopicScr;
