import React, { useEffect, useState } from "react";
import { ClockIcon } from "raster-react";
import './clock.css'

const Clock = () => {
  const [time, setTime] = useState("");

  const getHour = () => {
    const actualDate = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    setTime(actualDate.toLocaleTimeString([], options));
  };

  useEffect(() => {
   
    getHour()

    const intervalId = setInterval(getHour, 60000);

    return () => clearInterval(intervalId);
  }, []);
  
  return <div className="clock">
    <ClockIcon size={30} color="#000" strokeWidth={1} radius={1} />
    {time}
  </div>;
};

export default Clock;
