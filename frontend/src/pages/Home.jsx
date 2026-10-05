//this is the home component - the home page of the application
import "../css/Home.css"; // importing the stylesheet for the home component
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

function Home() {
  const [queue, setQueue] = useState([]);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [topicId, setTopicId] = useState("");
  const [topicTitle, setTopicTitle] = useState("");
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const getQueue = async () => {
      const token = localStorage.getItem("recall_token");

      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/showQueue",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

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
      const token = localStorage.getItem("recall_token");

      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/getStreak",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      setStreak(data["streak"]);
    };

    getStreak();
  }, []);
  // Calculate the average score from the topics already in the queue.
  const averageScore =
    queue.length > 0
      ? Math.round(
          queue.reduce((total, topic) => total + Number(topic.lastScore), 0) /
            queue.length,
        )
      : 0;

  return (
    <>
      {" "}
      {/* This is white space */}
      {/* these closures "<>" are used for react to capture and compose jsx */}
      <MobileNav />
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

        {/* Desktop dashboard information */}
        <section className="desktopDashboard">
          <div className="desktopStatCard">
            <span className="desktopStatLabel">QUEUE</span>
            <strong>{queue.length}</strong>
            <p>topics waiting</p>
          </div>

          <div className="desktopStatCard">
            <span className="desktopStatLabel">AVG SCORE</span>
            <strong>{averageScore}</strong>
            <p>current queue</p>
          </div>

          <div className="desktopStatCard">
            <span className="desktopStatLabel">STREAK</span>
            <strong>{streak}</strong>
            <p>days active</p>
          </div>

          <div className="desktopFocusCard">
            <span className="desktopFocusLabel">TODAY'S FOCUS</span>

            {queue.length > 0 ? (
              <>
                <h2>
                  {queue.length === 1
                    ? "One topic waiting for you."
                    : `${queue.length} topics waiting for you.`}
                </h2>

                <p>
                  Take your time, review what you know, and keep the streak
                  alive.
                </p>
              </>
            ) : (
              <>
                <h2>Nothing waiting.</h2>

                <p>
                  Your queue is clear. Add a new topic whenever you're ready.
                </p>
              </>
            )}
          </div>
        </section>

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
                          {topic.lastReviewed !== null
                            ? `- Last try ${topic.lastReviewed} days ago`
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
          {queue.length === 0 && (
            <div className="addTopicCallout">ADD TOPIC</div>
          )}
          <Link to="/first-topic">
            <img src="/icons/add-icon.png" alt="Add Topic" />
          </Link>
        </div>

        <section className="home-footer-section">
          <Footer
            statsController={"home-stats"}
            styleName={"homefoot"}
          ></Footer>
        </section>
      </section>
    </>
  );
}

export default Home;
