import  { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onTimerEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      // Clear the interval when the component unmounts or when the timer reaches 0
      return () => clearInterval(timerId);
    } else {
      // Call the callback function when the timer reaches 0
      onTimerEnd();
    }
  }, [time, onTimerEnd]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <p>Time Remaining: {formatTime()}</p>
    </div>
  );
};

export default CountdownTimer;
