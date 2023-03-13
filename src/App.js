import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

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
      <h1>Dummy Info List</h1>
      <UserList data={dummyInfo} />
    </div>
  );
}

export default App;
