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
      setText("let's fix a date");
    }

    if (event.target.innerText === "let's fix a date") {
      window.open("https://wa.me/+917701973093");
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