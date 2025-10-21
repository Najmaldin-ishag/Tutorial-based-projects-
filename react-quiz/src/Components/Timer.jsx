import { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
  const min = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;
