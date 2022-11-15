import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const [autotime, setautoTime] = useState(now);
  const [clicked, setClicked] = useState(false);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log("clicked  " + now);
  }

  function refreshTime() {
    setClicked(!clicked);
    setInterval(() => {
      let newTime = new Date().toLocaleTimeString();
      setautoTime(newTime);
    }, 1000);
    console.log(clicked);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
      {clicked ? <h1>'⏱'{autotime}</h1> : <h1>{time}</h1>}
      <button onClick={refreshTime}>Autorefresh Time</button>
    </div>
  );
}

export default App;
