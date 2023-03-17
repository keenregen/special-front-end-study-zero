import React, { useEffect, useState } from "react";
import DummyInfo from "./components/DummyInfo";

function App() {
  const [dummyInfo, setDummyInfo] = useState([]);

  const getDummyInfo = async () => {
    const resp = await fetch("https://dummyjson.com/todos");
    const data = await resp.json();
    setDummyInfo(data.todos);
  };

  useEffect(() => {
    getDummyInfo();
  }, []);

  console.log(dummyInfo);

  return (
    <div className="App">
      <h1>(Header)</h1>
      <br></br>
      <DummyInfo data={dummyInfo} />
      <br></br>
      <h1>(Footer)</h1>
    </div>
  );
}

export default App;
