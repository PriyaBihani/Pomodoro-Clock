import React from "react";
import "./css/AppInputs.css";
import Input from "./Input";
const AppInputs = (props) => {
  return (
    <div className="AppInputs">
      <Input
        id={[
          "session-label",
          "session-length",
          "session-increment",
          "session-decrement",
        ]}
        label="working"
        value={props.working}
        increment={props.incrementWorking}
        decrement={props.decrementWorking}
      />
      <Input
        id={[
          "break-label",
          "break-length",
          "break-increment",
          "break-decrement",
        ]}
        label="break"
        value={props.break}
        increment={props.incrementBreak}
        decrement={props.decrementBreak}
      />
    </div>
  );
};

export default AppInputs;
