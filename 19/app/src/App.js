import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [second, setsecond] = useState(new Date().getSeconds());
  const [minute, setminute] = useState(new Date().getMinutes());
  const [hour, sethour] = useState(new Date().getHours());
  useEffect(() => {
    const secondInterval = setInterval(() => {
      setsecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
      if (second === 0) {
        setminute(minute + 1);
      }
      if (minute === 60) {
        setminute(0);
        sethour(hour + 1);
      }
    }, 1000);

    // Clear intervals on component unmount to prevent memory leaks
    return () => {
      clearInterval(secondInterval);
    };
  }, []);
  return (
    <h1>
      {hour} : {minute} : {second}
    </h1>
  );
}

export default App;
