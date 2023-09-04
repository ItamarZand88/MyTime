import React, { useState, useEffect } from "react";
import { Card, Title, Button, NumberInput } from "@tremor/react";
import CustomInput from "./CustomInput";

const style = {
  title: "text-center mb-4",
  label: "text-lg font-semibold text-gray-700 mb-4 ml-5",
  form: "flex flex-row-reverse justify-between",
  input: "border p-2 w-full text-base text-right md:rounded",
  button: "p-1 mr-2 text-slate-100 md:rounded",
  timer: "text-3xl font-bold text-center text-gray-400 p-2",
};
const Pomodoro = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentMode, setCurrentMode] = useState("session");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            if (currentMode === "session") {
              setCurrentMode("break");
              return breakLength * 60;
            } else {
              setCurrentMode("session");
              return sessionLength * 60;
            }
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, sessionLength, breakLength, currentMode]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <Card className="max-w-full mb-4">
      <Title className={style.title}>Pomodoro Clock</Title>

      {!isRunning && (
        <div className={style.form}>
          <div>
            <label className={style.label}>משך מקבץ </label>
            <CustomInput value={sessionLength} onChange={setSessionLength} />
          </div>
          <div>
            <label className={style.label}>משך הפסקה </label>
            <CustomInput value={breakLength} onChange={setBreakLength} />
          </div>
        </div>
      )}

      <div
        className={
          isRunning
            ? "text-4xl font-bold text-center text-gray-400 p-4"
            : style.timer
        }
      >
        <h2>{currentMode.toUpperCase()}</h2>
        <h1>{formatTime(timeLeft)}</h1>
      </div>

      <div className={style.form}>
        <Button
          color="slate-800"
          className={style.button}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "עצור" : "התחל"}
        </Button>
        <Button
          color="slate-800"
          className={style.button}
          onClick={() => {
            setIsRunning(false);
            setCurrentMode("session");
            setTimeLeft(sessionLength * 60);
          }}
        >
          אתחל
        </Button>
      </div>
    </Card>
  );
};

export default Pomodoro;
