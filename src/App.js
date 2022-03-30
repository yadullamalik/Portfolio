import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./ContextProvider/ThemeContext";

function App() {
  const [state, setState] = useState(false);
  const { newTheme, open, handleMenu } = React.useContext(ThemeContext);
  const scrollRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2200);
  }, []);

  return (
    <React.Fragment>
      {!state ? (
        <div
          style={{
            background: `${newTheme.background}`,
          }}
          className="logoStart"
        >
          <img
            src="https://us.123rf.com/450wm/cotopaxi/cotopaxi1901/cotopaxi190100388/115953622-m-letter-blue-cool-gradient-flat-vector-logo-template.jpg?ver=6"
            alt="logo"
          />
        </div>
      ) : (
        <div className="components">
          <div
            style={{
              background: `${newTheme.menuBackground}`,
              color: `${newTheme.title}`,
              left: `${open ? "-100vw" : "0"}`,
            }}
            className="links"
          >
            <a onClick={handleMenu} href="#home">
              Home
            </a>
            <a onClick={handleMenu} href="#about">
              About
            </a>
            {/* <a onClick={handleMenu} href='#
						ience'>
							Experience
						</a> */}

            <a onClick={handleMenu} href="#projects">
              Projects
            </a>
            <a onClick={handleMenu} href="#techStacks">
              Profeciencies
            </a>
            <a onClick={handleMenu} href="#contact">
              Contact
            </a>
          </div>
          <Navbar />
          <Home scrollRef={scrollRef} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
