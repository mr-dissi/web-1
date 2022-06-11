import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="barTop">
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__main"></a>
      <a href="#" className="barTop__logo"></a>
    </div>
  );
}
function LeftBar() {
  return (
    <div className="leftBar">
      <button>lorem impsum</button>
      <button>lorem impsum</button>
      <button>lorem impsum</button>
    </div>
  );
}

export default function RightBar() {
  return (
    <div className="rightBar">
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
}

export { TopBar, LeftBar };
