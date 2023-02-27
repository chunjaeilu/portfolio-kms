import "./App.css";
// Hooks
import { useRef, useState, useEffect } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper";
import "swiper/css";

// pages
import Title from "./pages/Title";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";

// conponents
import Header from "./components/Header";
import Dots from "./components/Dots";

function App() {
  // 페이지 인덱스
  const [scrollIndex, setScrollIndex] = useState(0);
  // 프로젝트 인덱스
  const [activeIndex, setActiveIndex] = useState(null);
  const swiperRef = useRef();

  // 해상도
  const [diviceWidth, setDiviceWidth] = useState(window.innerWidth);

  const toSlide = (num) => {
    swiperRef.current.swiper.slideTo(num);
  };

  useEffect(() => {
    if (scrollIndex === 2) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 500);
    } else {
      setActiveIndex(null);
    }
  }, [scrollIndex]);

  const onChangeProject = (i) => {
    setActiveIndex(i);
  };

  // 기기 해상도 width값 받아오기
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDiviceWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="wrap">
      <Header
        toSlide={toSlide}
        scrollIndex={scrollIndex}
        diviceWidth={diviceWidth}
      />
      <Dots scrollIndex={scrollIndex} toSlide={toSlide} />
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        modules={[Mousewheel, Keyboard]}
        mousewheel
        keyboard
        allowTouchMove
        className="main_slider"
        threshold={20}
        speed={700}
        onActiveIndexChange={(swiper) => {
          setScrollIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide id="title">
          <Title diviceWidth={diviceWidth} />
        </SwiperSlide>
        <SwiperSlide id="profile">
          <Profile diviceWidth={diviceWidth} />
        </SwiperSlide>
        <SwiperSlide id="projects">
          <Projects
            activeIndex={activeIndex}
            onChangeProject={onChangeProject}
            diviceWidth={diviceWidth}
          />
        </SwiperSlide>

        <SwiperSlide id="contact">
          <Contact toSlide={toSlide} diviceWidth={diviceWidth} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
