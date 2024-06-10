import React from "react";
import styles from "../../styles/Dashboard.module.css";

const CircularProgress = ({ Ellipse, ChartIcon, color, percent, text, year, title, count, smallPercent }) => {
  return (
    <div className={styles.card}>
      <div>
        <h5>{year} yil</h5>
        <p className={styles.text}>{title}</p>
        <div className={styles.bottom_left}>
          <h4>{count}</h4>
          <div className={styles.bottom_text_container}>
            <ChartIcon />
            <div className={styles.small_procent} style={{background:`${color}`}}>{smallPercent}%</div>
          </div>
        </div>
      </div>
      <div className={styles.percent}>
        <div className={styles.ellipse}>
          <Ellipse />
        </div>
        <div className={styles.percent_text}>
          <h3>{percent}%</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
