import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>pomodoro.c</title>
      </Head>

    
      <main className={styles.main}>
        <h1 className={styles.title}>
          pomodoro.c
        </h1>
        <p>
          {timeTalker()}
        </p>
      </main>
    </div>

    //初期　参考用に取ってあり、近いうちに削除
    /*
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>

    */
  )
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
  if(setOrNot===false){
    setInterval(()=>{setTime(time=>time-1)},1000);
    setSetOrNot(true);
  }
  
  //0秒判定　時間を２種類切り替えます
  if(time === 0){
    if(workingOrNot===true){
      setWorkingOrNot(false);
      setTime(5)
    }else{
      setWorkingOrNot(true);
      setTime(10)
    }
  }

  return time;
}