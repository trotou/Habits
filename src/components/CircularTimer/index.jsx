import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { counterWrapperStyle, circleStyle } from "./style";

function CircularProgressWithLabel(props) {
  const phrase = (seconds) => {
    const sec = seconds % 60;
    const min = (seconds - sec) / 60;
    if (min < 1) {
      return `${sec} segundo${sec > 1 ? "s" : ""}`;
    } else if (min === 1) {
      return `${min} minuto e ${sec} ${sec > 1 ? "segundos" : "segundo"}`;
    } else if (min > 1) {
      return `${min} minutos e ${sec} ${sec > 1 ? "segundos" : "segundo"}`;
    }
  };
  return (
    <div style={counterWrapperStyle}>
      <CircularProgress
        variant="determinate"
        value={(props.value * 1.66) / props.totalTime}
        style={circleStyle}
      />
      <h2 variant="caption" component="div">
        {phrase(Math.round(props.value))}
      </h2>
    </div>
  );
}

export default function CircularTimer({ howMuchTime }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= howMuchTime ? 0 : prevProgress + 1
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgressWithLabel value={progress} totalTime={howMuchTime / 60} />
  );
}
