import React from "react";
import PlayButton from "./svg/PlayButton";
import "./css/Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label id={props.id[0]}>{props.label} session</label>

      <div className="InputSession">
        <button onClick={props.increment} id={props.id[2]}>
          <PlayButton />
        </button>

        <h2 id={props.id[1]}>{props.value}</h2>

        <button onClick={props.decrement} id={props.id[3]}>
          <PlayButton />
        </button>
      </div>
    </div>
  );
};

export default Input;
