import React from "react";
import "./App.css";
function Cool(props) {
  return (
    <div className="cooler" style={{ background: props.bog }} id={props.id}>
      <h1>cool {}</h1>
    </div>
  );
}

export default Cool;
