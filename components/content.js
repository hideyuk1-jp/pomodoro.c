import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";

const ContentWrapper = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .twitter-link {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;

    .twitter-image {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }
  }

  .counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    display: flex;
    justify-content: space-between;
    font-size: 5rem;
    font-weight: 700;
    font-family: "JetBrains Mono", monospace;
    line-height: 0;
  }

  .btn-wrap {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 78px;
    border-radius: 39px;
    background: rgba(255, 255, 255, 0.25);
    .btn {
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      outline-style: none;
      width: 160px;
      height: 70px;
      border: 0;
      border-radius: 40px;
      background: #fff;
      overflow: hidden;
      &:focus {
        border: none;
        outline: 0 !important;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2rem;
        height: 2rem;
        fill: #888;
      }
    }
  }
`;

const Content = (props) => {
  const { time, isPlaying, handleClick } = props;
  const zeroPad = (num, length) => ("0".repeat(length) + num).slice(-length);

  const counterItems = [
    ...(zeroPad(Math.floor(time / 60), 2) + ":" + zeroPad(time % 60, 2)),
  ].map((v, i) => <span key={i}>{v}</span>);

  return (
    <ContentWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* TODO: twitterリンクのurlと画像を設定してください */}
      <a
        className="twitter-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="twitter-image"
          src="/twitter-dummy.jpg"
          alt="twitter"
          width="64"
          height="64"
        />
      </a>
      <div className="counter">{counterItems}</div>
      <div className="btn-wrap">
        <button className="btn play-pause" onClick={handleClick}>
          <div className="icon-container">
            {isPlaying ? (
              <svg className="icon play">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg className="icon pause">
                <use xlinkHref="#play"></use>
              </svg>
            )}
          </div>
        </button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="icons">
        <symbol id="play" viewBox="0 0 448 512">
          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
        </symbol>
        <symbol id="pause" viewBox="0 0 448 512">
          <path
            d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48
					48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
          />
        </symbol>
      </svg>
    </ContentWrapper>
  );
};
export default Content;
