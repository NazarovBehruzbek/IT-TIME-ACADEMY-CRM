import React, { useState } from "react";
import styles from "../styles/SignIn.module.css";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Впервые на RemoteHead?</h2>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <MailOutlined style={{ marginRight: "10px", color: "#8a8a8a" }} />
            <input type="email" placeholder="Введите e-mail" />
          </div>
          <div className={styles.input_container}>
            <PhoneOutlined style={{ marginRight: "10px", color: "#8a8a8a" }} />
            <input type="tel" placeholder="Введите телефон" />
          </div>
          <div className={styles.input_container}>
            <KeyOutlined style={{ marginRight: "10px", color: "#8a8a8a" }} />
            <input type={`${showPassword ? "text" : "password"}`} placeholder="Придумайте пароль" />
            {showPassword ? (
              <EyeOutlined
                style={{
                  position: "absolute",
                  top: 12,
                  right: 20,
                  color: "#8a8a8a",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeInvisibleOutlined
                style={{
                  position: "absolute",
                  top: 12,
                  right: 20,
                  color: "#8a8a8a",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button className={styles.form_button}>
            <UserOutlined />
            Создать аккаунт
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
