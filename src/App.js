import { useState } from "react";
import "./App.css";
import { Header, HeaderTitle } from "./Header0";

function App() {
  const [headerTitleColor, setHeaderTitleColor] = useState("blue");
  const [showDummyInfo, setShowDummyInfo] = useState(true);

  const fnClick = () => {
    headerTitleColor === "blue"
      ? setHeaderTitleColor("white")
      : setHeaderTitleColor("blue");
  };

  return (
    <div className="App">
      <header className="App-header">
        <HeaderTitle title="An App" color={headerTitleColor} />
        <Header fnClick={fnClick}>
          {showDummyInfo ? <p>React App</p> : ""}
        </Header>
      </header>
    </div>
  );
}

export default App;
