//this is the home component - the home page of the application
import "../css/Home.css"; // importing the stylesheet for the home component
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [queue, setQueue] = useState([]);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [topicId, setTopicId] = useState("");
  const [topicTitle, setTopicTitle] = useState("");
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const getQueue = async () => {
      const response = await fetch("/api/showQueue", {
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      setQueue(data.queue);
      setUser(data.user.name);
    };

    getQueue();
  }, []);

  useEffect(() => {
    if (topicId) {
      navigate("/review", {
        state: {
          topicId,
          topicTitle,
          fromQueue: true,
        },
      });
    }
  }, [topicId]);

  useEffect(() => {
    const getStreak = async () => {
      const response = await fetch("/api/getStreak", {
        credentials: "include",
      });

      const data = await response.json();

      setStreak(data["streak"]);
    };

    getStreak();
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
          <h1 className="streakNumber">{streak}</h1>
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
            {queue.length === 0 ? (
              <div className="emptyQueueCard">
                <div className="emptyQueueEmoji">☺</div>

                <h2>No new topics</h2>

                <p>
                  You're all caught up for now.
                  <br />
                  Enjoy the little win.
                </p>
              </div>
            ) : (
              queue.map((topic) => {
                return (
                  <div className="queueItemContainer">
                    <div
                      className="queueItemLeft"
                      onClick={() => {
                        setTopicId(topic.id);
                        setTopicTitle(topic.title);
                      }}
                    >
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
              })
            )}
          </section>
        </section>
        {/* add new topic button */}
        <div className="addNewTopicButton">
          <Link to="/first-topic">
            <img src="src/assets/icons/add-icon.png" alt="Add Topic" />
          </Link>
        </div>
        <section className="footer">
          <Link className="homelink" to="/">
            <div className="homefooterContainer">
              <div className="homeIcon">[■]</div>
              <div className="homeText">HOME</div>
            </div>
          </Link>

          <div className="itemsContainer">
            <div className="itemsIcon">[≡]</div>
            <div className="itemsText">ITEMS</div>
          </div>

          <Link className="footerAddTopic" to="/first-topic">
            <div className="addContainer">
              <div className="addIcon">[+]</div>
              <div className="addText">ADD</div>
            </div>
          </Link>

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
