import "./App.css";
import RightBar, { TopBar, LeftBar } from "./TopBar.js";
import Cool from "./Cool";

function App() {
  let a = document.querySelector("#op");
  function func() {
    console.log(a);
    a.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <TopBar />
      <LeftBar />
      <RightBar />
      <div className="cools" onClick={func}>
        <Cool bog={"blue"} />
        <Cool id="op" />
      </div>
    </div>
  );
}

export default App;
