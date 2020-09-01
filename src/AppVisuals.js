import React from "react";
import "./css/AppVisuals.css";

const AppVisuals = (props) => {
  let session = props.timer.session;
  let minutes = props.timer.minutes;
  let seconds = props.timer.seconds;

  let root = document.querySelector(":root");
  let sessionLength = props[session] * 60;
  let sessionLeft = minutes * 60 + seconds;
  let sessionPercentage = Math.floor((sessionLeft / sessionLength) * 100);
  root.style.setProperty("--gradient-height", `${sessionPercentage}%`);

  return (
    <div className="AppVisuals">
      <div className="VisualsHourglass"></div>
      <h2 className="VisualsSession" id="timer-label">
        {session}
      </h2>
      <h2 className="VisualsTimer" id="time-left">
        {minutes >= 10 ? minutes : `0${minutes}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}
      </h2>
    </div>
  );
};

export default AppVisuals;
