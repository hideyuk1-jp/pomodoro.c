import React from "react";
import styled from "@emotion/styled";

const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.ratio * 100}%;
  display: grid;
  grid-template-rows: auto 1fr;
  transform-origin: bottom center;
  transition: height ease-in 0.3s, transform ease-in 0.3s;

  .editorial {
    display: block;
    width: 100%;
    height: ${(props) => (props.isPlaying ? "64px" : "16px")};
    margin: 0;
    margin-top: ${(props) => (props.isPlaying ? "-32px" : "-8px")};
    transition: all linear 4s;
  }
  use {
    transition: ease-in 0.3s;
  }
  .parallax1 > use {
    fill: var(
      --color-waves-${(props) => (props.isWorking ? "red" : "green")}-1
    );
    z-index: 4;
    animation: move-forever4 4s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    fill: var(
      --color-waves-${(props) => (props.isWorking ? "red" : "green")}-2
    );
    z-index: 3;
    animation: move-forever3 6s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    fill: var(
      --color-waves-${(props) => (props.isWorking ? "red" : "green")}-3
    );
    z-index: 2;
    animation: move-forever2 8s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    fill: var(
      --color-waves-${(props) => (props.isWorking ? "red" : "green")}-4
    );
    z-index: 1;
    animation: move-forever1 10s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  @keyframes move-forever1 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever2 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
  @keyframes move-forever3 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever4 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }

  div {
    z-index: 0;
    max-height: 100%;
    width: 100%;
    background: var(
      --color-waves-${(props) => (props.isWorking ? "red" : "green")}-1
    );
  }
`;

const Waves = (props) => {
  const { time, maxTime, isWorking, isPlaying } = props;
  return (
    <WavesWrapper
      ratio={time / maxTime}
      isWorking={isWorking}
      isPlaying={isPlaying}
    >
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax4">
          <use xlinkHref="#gentle-wave" x="50" y="3" />
        </g>
        <g className="parallax3">
          <use xlinkHref="#gentle-wave" x="50" y="0" />
        </g>
        <g className="parallax2">
          <use xlinkHref="#gentle-wave" x="50" y="9" />
        </g>
        <g className="parallax1">
          <use xlinkHref="#gentle-wave" x="50" y="6" />
        </g>
      </svg>
      <div></div>
    </WavesWrapper>
  );
};
export default Waves;
