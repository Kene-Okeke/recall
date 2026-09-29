//this is the home component - the home page of the application
import "../css/Home.css"; // importing the stylesheet for the home component
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [queue, setQueue] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getQueue = async () => {
      const response = await fetch("/api/showQueue", {
        credentials: "include",
      });

      const data = await response.json();

      setQueue(data.queue);
      setUser(data.user.name);
    };

    getQueue();
  }, []);

  return (
    <>
      {" "}
      {/* This is white space */}
      {/* these closures "<>" are used for react to capture and compose jsx */}
      <section className="homeContainer">
        <div className="userInformation">
          <h1 className="userName"> &gt; LOAD USER:&nbsp;{user} </h1>
          <h2 className="dueText">Due today</h2>
        </div>
        <div className="streakWrapper">
          <h1 className="streakNumber">12</h1>
          <div className="streakRightText">
            <h2 className="day">DAY</h2>
            <h3 className="streakText">STREAK</h3>
            <h4>keep the ribbon spinning</h4>
          </div>
        </div>
        <section className="queueSection">
          {" "}
          {/* this section is for the queue of tasks that are due today */}
          <div className="queueText">
            <span>QUEUE ({queue.length}) </span>
            <div className="queueLine"></div>
          </div>
          {/* these are the tasks in the queue */}
          <section className="Queue-List">
            {queue.map((topic) => {
              return (
                <div className="queueItemContainer">
                  <div className="queueItemLeft">
                    <h2 className="queueCardTopic">{topic.title}</h2>
                    <div className="categoryContflex">
                      <h2 className="queueCardCategory">{topic.category}</h2>
                      <h3 className="queueCardLastAttempt">
                        {topic.lastReviewed
                          ? `Last try ${topic.lastReviewed}d ago`
                          : "Not reviewed yet"}
                      </h3>
                    </div>
                  </div>

                  <div className="queueItemRight">
                    <h2 className="queueLastScore">{topic.lastScore}</h2>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
        {/* add new topic button */}
        <div className="addNewTopicButton">
          <Link to="/first-topic">
            <img src="src/assets/icons/add-icon.png" alt="Add Topic" />
          </Link>
        </div>
        <section className="footer">
          <div className="homefooterContainer">
            <div className="homeIcon">[■]</div>
            <div className="homeText">HOME</div>
          </div>
          <div className="itemsContainer">
            <div className="itemsIcon">[≡]</div>
            <div className="itemsText">ITEMS</div>
          </div>
          <div className="addContainer">
            <div className="addIcon">[+]</div>
            <div className="addText">ADD</div>
          </div>
          <div className="statsContainer">
            <div className="statsIcon">[▲]</div>
            <div className="statsText">STATS</div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
