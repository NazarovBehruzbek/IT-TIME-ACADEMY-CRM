import React from "react";
import EllipseGreen from "../assets/EllipseGreen.jsx";
import EllipseRed from "../assets/EllipseRed.jsx";
import EllipseYellow from "../assets/EllipseYellow.jsx";
import CircularProgress from "../components/Ui/CircularProgress.jsx";
import styles from "../styles/Dashboard.module.css";
import ChartIconGreen from "../assets/ChartIconGreen.jsx";
import ChartIconRed from "../assets/ChartIconRed.jsx";
import ChartIconYellow from "../assets/ChartIconYellow.jsx";
import HorizontalBarChart from "../components/Ui/HorizontalBarChart.jsx";
import BarChart from "../components/Ui/BarChart.jsx";
import PieChart from "../components/Ui/PieChart.jsx";
import PieChart2 from "../components/Ui/PieChart2.jsx";
import PieChart3 from "../components/Ui/PieChart3.jsx";

export default function Dashboard() {
  const labels = [
    "Guruhga qo'shildi",
    "Ketib qoldi",
    "Ko'tarmadi",
    "O'ylab ko'radi",
    "Probniga keldi",
    "Rad qildi",
    "Raqam xato",
    "Tel qilish kerak",
  ];
  const dataValues = [10, 1, 1, 1, 17, 1, 1, 1];

  return (
    <div>
      <div className={styles.card_wrapper}>
        <CircularProgress
          Ellipse={EllipseGreen}
          ChartIcon={ChartIconGreen}
          color={"#55B963"}
          percent={65}
          text={"Yangi kelganlar"}
          title={"Odam sonini ko'paytirish"}
          year={20224}
          count={4000}
          smallPercent={7}
        />
        <CircularProgress
          Ellipse={EllipseRed}
          ChartIcon={ChartIconRed}
          color={"#CC4025"}
          percent={20}
          text={"Ketib qoldanlar"}
          title={"Guruhdan chiqib ketganlar"}
          year={20224}
          count={4000}
          smallPercent={10}
        />
        <CircularProgress
          Ellipse={EllipseYellow}
          ChartIcon={ChartIconYellow}
          color={"#FFCA26"}
          percent={10}
          text={"Darsni kutayotganlar"}
          title={"Darsga yozilganlar"}
          year={20224}
          count={300}
          smallPercent={7}
        />
      </div>
      <div className={styles.charts_wrapper}>
        <div style={{ padding: "20px 0" }} className={styles.hBarChart}>
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              width: "100%",
              minHeight: "328px",
              height: "fit-content",
            }}
          >
            <h2>Holati bo'yicha analiz</h2>
            <HorizontalBarChart labels={labels} dataValues={dataValues} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Kuzatuvchilar</h2>
              <select>
                <option>Shu hafta</option>
                <option>O'tgan hafta</option>
                <option>O'tgan oy</option>
              </select>
            </div>
            <BarChart />
          </div>
        </div>
      </div>
      <div className={styles.charts_container}>
        <div className={styles.dashboard_container}>
          <div className={styles.chart_container}>
            <h2>Yo'nalish bo'yicha analiz</h2>
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 50,
                }}
              >
                <PieChart2 />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "300px",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                152 ta
              </div>
            </div>
            <div className={styles.chart_legend}>
              <ul>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#66c2a5",
                  }}
                >
                  <p>Tolov qildi</p>
                  <p>100 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#8da0cb",
                  }}
                >
                  <p>Tolov qilmadi</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#fc8d62",
                  }}
                >
                  <p>Hali ulgurmaganlar</p>
                  <p>2 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#e78ac3",
                  }}
                >
                  <p>Tekin o'qiydiganlar</p>
                  <p>25 ta</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.dashboard_container}>
          <div className={styles.chart_container}>
            <h2>Yo'nalish bo'yicha analiz</h2>
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 50,
                }}
              >
                <PieChart />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "300px",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                177 ta
              </div>
            </div>
            <div className={styles.chart_legend}>
              <ul>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#66c2a5",
                  }}
                >
                  <p>Abyturientlar uchun</p>
                  <p>27 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#8da0cb",
                  }}
                >
                  <p>Arab tili</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#fc8d62",
                  }}
                >
                  <p>Bolalar uchun</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#e78ac3",
                  }}
                >
                  <p>Bolalar uchun qo'shimcha</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a6d854",
                  }}
                >
                  <p>Informations T</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#ffd92f",
                  }}
                >
                  <p>Mental arifmetika</p>
                  <p>25 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#e5c494",
                  }}
                >
                  <p>Prezident maktabi</p>
                  <p>25 ta</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.dashboard_container}>
          <div className={styles.chart_container}>
            <h2>Yo'nalish bo'yicha analiz</h2>
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 50,
                }}
              >
                <PieChart3 />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "300px",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                206 ta
              </div>
            </div>
            <div className={styles.chart_legend}>
              <ul>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#66c2a5",
                  }}
                >
                  <p>Banner orqali</p>
                  <p>9 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#8da0cb",
                  }}
                >
                  <p>Flayer orqali</p>
                  <p>44 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#fc8d62",
                  }}
                >
                  <p>Flayer orqali</p>
                  <p>0 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#e78ac3",
                  }}
                >
                  <p>Qiziqib kirganlar</p>
                  <p>114 ta</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a6d854",
                  }}
                >
                  <p>Tanish orqali</p>
                  <p>39 ta</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
