import React from "react";
import { Progress } from "antd";
import styles from "../../styles/Dashboard.module.css";

const HorizontalBarChart = () => {
  return (
    <div className={styles.hBchart_container}>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Guruhga qo’shildi</p>
          <span>10%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={10} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>O'ylab ko'radi</p>
          <span>10%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Raqam xato</p>
          <span>1%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Ketib qoldi</p>
          <span>1%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Probniga keldi</p>
          <span>1%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={17} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Telefon qilish kerak</p>
          <span>17%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Ko'tarmadi</p>
          <span>1%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
      <div className={styles.hBchart_item}>
        <div className={styles.hBchart_item_top}>
          <p>Rad qildi</p>
          <span>1%</span>
        </div>
        <Progress strokeColor={"#8D7CC1"} percent={1} showInfo={false} />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
