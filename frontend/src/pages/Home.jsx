//this is the home component - the home page of the application
import "./Home.css"; // importing the stylesheet for the home component

function Home() {
  return (
    <>
      {" "}
      {/* This is white space */}
      {/* these closures "<>" are used for react to capture and compose jsx */}
      <section className="homeContainer">
        <div className="userInformation">
          <h1 className="userName"> LOAD USER:&nbsp;OKEKE_ </h1>
          <h2 className="dueText">Due today</h2>
        </div>
        <div className="streakWrapper">
          <h1 className="streakNumber">12</h1>
          <div className="streakRightText">
            <h2 classname="day">DAY</h2>
            <h3 classname="streakText">STREAK</h3>
            <h4>keep the ribbon spinning</h4>
          </div>
        </div>
        <section className="queueSection">
          {" "}
          {/* this section is for the queue of tasks that are due today */}
          <div className="queueText">
            <span>QUEUE (3) </span>
            <div className="queueLine"></div>
          </div>
          {/* these are the tasks in the queue */}
          <div className="queueItemContainer">
            <div className="queueItemLeft">
              <h2 className="queueCardTopic">Two Sum</h2>
              <div className="categoryContflex">
                <h2 className="queueCardCategory">ARRAYS</h2>
                <h3 className="queueCardLastAttempt">. Last try 3d ago </h3>
              </div>
            </div>

            <div className="queueItemRight">
              <h2 className="queueLastScore">41</h2>
            </div>
          </div>
        </section>
        {/* add new topic button */}
        <div className="addNewTopicButton">
          <img src="src/assets/icons/add-icon.png" alt="Add Topic" />
        </div>
        <section className="footer">
          <span className="homeIcon">[■]</span>
          <span className="ItemsIcon">[≡]</span>
          <span className="AddIcon">[+]</span>
          <span className="StatsIcon">[▲]</span>
        </section>
      </section>
    </>
  );
}

export default Home;
