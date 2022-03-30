import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://media-exp1.licdn.com/dms/image/C4E03AQHxNBVD4rtsqA/profile-displayphoto-shrink_200_200/0/1644846403098?e=1653523200&v=beta&t=iDkP8SvYxAQxSuUmPiix_Ztjx0gwqUmanaDA1a_sKyM" // my Picture
      : "https://www.damiestechnologies.com/img/programmer.gif";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={"https://www.damiestechnologies.com/img/programmer.gif"}
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! My name is Yadulla Malik Shaik
          <br /> A passionate full stack web developer with an ability to write
          efficient code using javascript, and build interactive and user
          friendly websites. Looking forward to improving and utilizing skills
          and contributing to the growth of the company.
          {/* <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for an opportunity as a full stack web developer
          </span>
          . */}
        </p>
      </div>
    </div>
  );
};

export default About;
