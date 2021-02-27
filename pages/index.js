import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";

import Waves from "../components/waves";
import Content from "../components/content";

export default function Home() {
  const workTime = 25 * 60;
  const breakTime = 5 * 60;

  const [time, setTime] = useState(workTime);
  // 作業中か休憩中か
  const [isWorking, setIsWorking] = useState(true);
  // 再生中かどうか
  const [isPlaying, setIsPlaying] = useState(true);

  const intervalRef = useRef();

  const handleTime = () => {
    if (time <= 0) {
      setTime(isWorking ? breakTime : workTime);
      setIsWorking(!isWorking);
      return;
    }
    setTime(time - 1);
  };

  const handleTimeRef = useRef(handleTime);

  const play = () => {
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      handleTimeRef.current();
    }, 1000);
  };

  const stop = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  useEffect(() => {
    handleTimeRef.current = handleTime;
  }, [handleTime]);

  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, []);

  return (
    <>
      <Head>
        <title>pomodoro.c</title>
      </Head>
      <Waves
        time={time}
        maxTime={isWorking ? workTime : breakTime}
        isWorking={isWorking}
        isPlaying={isPlaying}
      />
      <Content time={time} isPlaying={isPlaying} handleClick={handleClick} />
    </>
  );
}

//メイン　秒数を返します
let timeTalker = (props) => {
  //time:そのまま表示されます
  //workingOrNot:25分カウント時true、5分カウント時falseのブール値です
  //setOrNot:初回起動時のみ使われ、以降ずっとfalseです
  //これが無いと1秒ごとにコールバックが増え続け減少が加速します
  const [time, setTime] = useState(10);
  const [workingOrNot, setWorkingOrNot] = useState(true);
  const [setOrNot, setSetOrNot] = useState(false);

  //初回判定
  if (setOrNot === false) {
    setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setSetOrNot(true);
  }

  //0秒判定　時間を２種類切り替えます
  if (time === 0) {
    if (workingOrNot === true) {
      setWorkingOrNot(false);
      setTime(5);
    } else {
      setWorkingOrNot(true);
      setTime(10);
    }
  }

  return time;
};
