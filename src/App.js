import "./App.css";

import Profile from "./components/Profile";
import Header from "./components/Header";
import Title from "./components/Title";
import { useRef, useState, useEffect } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dots from "./components/Dots";

const DIVIDER_HEIGHT = 5;

function App() {
  const wrapDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(0);

  const pageHeight = window.innerHeight;

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = wrapDivRef.current;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setScrollIndex(1);
          wrapDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          setScrollIndex(2);
          wrapDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          setScrollIndex(3);
          wrapDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        } else {
          setScrollIndex(3);
          wrapDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setScrollIndex(0);
          wrapDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          setScrollIndex(0);
          wrapDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          setScrollIndex(1);
          wrapDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else {
          setScrollIndex(2);
          wrapDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const currentWrapDivRef = wrapDivRef.current;
    currentWrapDivRef.addEventListener("wheel", wheelHandler);
    return () => {
      currentWrapDivRef.removeEventListener("wheel", wheelHandler);
    };
  }, [pageHeight]);

  const onClickNav = (pageNum) => {
    setScrollIndex(pageNum);
    wrapDivRef.current.scrollTo({
      top: pageHeight * pageNum + DIVIDER_HEIGHT * pageNum,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrap" ref={wrapDivRef}>
      <Header onClickNav={onClickNav} scrollIndex={scrollIndex} />
      <Title />
      <div className="divider"></div>
      <Profile />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Contact />
      <Dots scrollIndex={scrollIndex} onClickNav={onClickNav} />
    </div>
  );
}

export default App;
