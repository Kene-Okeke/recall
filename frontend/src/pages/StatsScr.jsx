import "../css/StatsScr.css";
import RecallChart from "../components/RecallChart";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import DottedLine from "../components/DottedLine";
import { useEffect, useState } from "react";

function StatsScr() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicStats, setTopicStats] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getTopics = async () => {
      const token = localStorage.getItem("recall_token");

      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/stats/topics",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      setTopics(data.topics);
    };

    getTopics();
  }, []);

  const handleTopicClick = async (topic) => {
    setSelectedTopic(topic);

    const token = localStorage.getItem("recall_token");

    const response = await fetch(
      import.meta.env.VITE_API_URL + `/api/stats/topics/${topic.id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await response.json();

    console.log(data.topic);

    setTopicStats(data);
  };

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase()),
  );

  const goBack = () => {
    setSelectedTopic(null);
    setTopicStats(null);
  };

  return (
    <section className="statsContainer">
      <MobileNav />

      {!selectedTopic ? (
        <>
          <div className="statsHeader">
            <div className="itemPrompt">&gt; YOUR STATS</div>
            <h1 className="itemTitle">REVIEW HISTORY</h1>
          </div>

          <div className="searchBarWrap">
            <span className="searchIcon">⌕</span>
            <input
              type="text"
              className="searchInput"
              placeholder="SEARCH TOPICS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="topicsScrollArea">
            <div className="topicsList">
              {filteredTopics.map((topic) => (
                <div
                  className="topicStatRow"
                  key={topic.id}
                  onClick={() => handleTopicClick(topic)}
                >
                  <div className="topicStatInfo">
                    <h2>{topic.title}</h2>
                    <span>{topic.lastReviewed}</span>
                  </div>

                  <div className="topicStatScore">
                    <span>{topic.lastScore}%</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : !topicStats ? (
        <div>
          <p>LOADING STATS...</p>
        </div>
      ) : (
        <>
          <div className="recordContainer">
            <div className="itemPrompt">&gt; ITEM RECORD</div>

            <h1 className="itemTitle">{topicStats.topic.title}</h1>
          </div>

          <div className="chartSection">
            <RecallChart data={topicStats.reviews} />
          </div>

          <div className="sectionLabelRow">
            <div className="sectionLabel">LAST 7 DAYS</div>
            <DottedLine />
          </div>

          <div className="calendarRow">
            {Array.from({ length: 7 }).map((_, index) => {
              const date = new Date();
              const today = new Date();

              date.setDate(today.getDate() - (6 - index));

              const dayLetter = date
                .toLocaleDateString("en-US", { weekday: "short" })
                .charAt(0);

              const dateString = date.toISOString().split("T")[0];

              const wasReviewed = topicStats.reviews.some(
                (review) => review.date === dateString,
              );

              return (
                <div
                  key={date.toISOString()}
                  className={`dayCell ${wasReviewed ? "done" : ""}`}
                >
                  {dayLetter}
                </div>
              );
            })}
          </div>

          <div className="stats-terminalPanel">
            <div className="statRow">
              <span>REPETITIONS</span>
              <span className="dots">..............</span>
              <span className="statValue">{topicStats.topic.repetitions}</span>
            </div>

            <div className="statRow">
              <span>EASE FACTOR</span>
              <span className="dots">..............</span>
              <span className="statValue">{topicStats.topic.easeFactor}</span>
            </div>

            <div className="statRow">
              <span>BEST SCORE</span>
              <span className="dots">..............</span>
              <span className="statValue">{topicStats.topic.bestScore}%</span>
            </div>

            <div className="statRow">
              <span>NEXT REVIEW</span>
              <span className="dots">..............</span>
              <span className="statValue">
                {new Date(topicStats.topic.nextReview).toLocaleDateString(
                  "en-US",
                )}
              </span>
            </div>
          </div>

          <button className="backToTopics" onClick={goBack}>
            ← BACK TO TOPICS
          </button>
        </>
      )}

      <section className="footerCont">
        <Footer styleName="footerchildscr" statsController="statsHard" />
      </section>
    </section>
  );
}

export default StatsScr;
