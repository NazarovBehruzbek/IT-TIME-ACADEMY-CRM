import React from "react";
import EllipseGreen from "../assets/EllipseGreen.jsx";
import EllipseRed from "../assets/EllipseRed.jsx";
import EllipseYellow from "../assets/EllipseYellow.jsx";
import CircularProgress from "../components/Ui/CircularProgress.jsx";
import styles from "../styles/Dashboard.module.css";
import ChartIconGreen from '../assets/ChartIconGreen.jsx';
import ChartIconRed from "../assets/ChartIconRed.jsx";
import ChartIconYellow from '../assets/ChartIconYellow.jsx';

export default function Dashboard() {
  return (
    <div>
      <div className={styles.card_wrapper}>
        <CircularProgress Ellipse={EllipseGreen} ChartIcon={ChartIconGreen} />
        <CircularProgress Ellipse={EllipseRed} ChartIcon={ChartIconRed} />
        <CircularProgress Ellipse={EllipseYellow} ChartIcon={ChartIconYellow} />
      </div>
    </div>
  );
}
