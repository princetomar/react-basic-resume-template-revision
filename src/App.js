import ResumePage from "./components/ResumePage";
import "./App.css";

function App() {
  return (
    <div>
      <div className="mainHeadingContainer">
        <div className="mainLeftSideBorder"></div>
        <div className="mainRightSideBorder"></div>
      </div>

      <ResumePage personName="Emily"></ResumePage>
    </div>
  );
}

export default App;
