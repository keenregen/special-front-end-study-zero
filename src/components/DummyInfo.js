import React, { useState } from "react";

function DummyInfo({ data }) {
  const [search, setSearch] = useState("");

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Dummy Info List</h1>

      <input value={search} onChange={onSearch}></input>
      <ul>
        {data
          .filter((dummy) => dummy.todo.toLowerCase().includes(search))
          .map((dummy) => (
            <li key={dummy.id}>{dummy.todo}</li>
          ))}
      </ul>
    </div>
  );
}

export default DummyInfo;
