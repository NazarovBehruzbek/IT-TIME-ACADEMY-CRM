import React from "react";
import styles from "../../styles/Dashboard.module.css";

const CircularProgress = ({ Ellipse, ChartIcon }) => {
  return (
    <div className={styles.card}>
      <div>
        <h5>2020 yil</h5>
        <p className={styles.text}>Odam sonini ko'paytirish</p>
        <div className={styles.bottom_left}>
          <h4>4 000</h4>
          <div className={styles.bottom_text_container}>
            <ChartIcon />
            <div className={styles.small_procent}>7%</div>
          </div>
        </div>
      </div>
      <div className={styles.percent}>
        <div className={styles.ellipse}>
          <Ellipse />
        </div>
        <div className={styles.percent_text}>
          <h3>65%</h3>
          <p>Yangi kelganlar</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
