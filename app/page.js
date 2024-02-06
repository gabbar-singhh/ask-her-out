"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("would you go out with me?");
  const [img, setImg] = useState("/assets/begging.gif");
  const [text, setText] = useState("YES");

  const [nobuttonstyle, setNobuttonstyle] = useState({});

  const yesButtonHandler = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "YES") {
      setImg("/assets/success.gif");
      setNobuttonstyle({ display: "none" });
      setTitle("Yayayyay! Finally 😘");
      setText("let's fix a time and place ASAP! 🥰");
    }

    if (event.target.innerText === "let's fix a time and place ASAP! 🥰") {
      window.open("https://wa.me/7701973093?text=Hey%2C%20I%20saw%20your%20website%2C%20that%20was%20so%20sweet!%20I%20would%20love%20to%20go%20out%20with%20you");
    }
  };

  return (
    <>
      <main className={styles.main}>
        <h2>{title}</h2>

        <img src={img} height={300} />

        <div className={styles.button_group}>
          <button id="btn" onClick={yesButtonHandler} className={styles.button}>
            {text}
          </button>

          <button
            id="no_btn"
            style={nobuttonstyle}
            className={`${styles.button} ${styles.btn_no}`}
          >
            NO
          </button>
        </div>
      </main>
      <script src="/demo.js"></script>
    </>
  );
}
