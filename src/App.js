import "./App.css";
// Hooks
import { useRef, useState } from "react";

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
  const [scrollIndex, setScrollIndex] = useState(0);
  const swiperRef = useRef();

  const toSlide = (num) => {
    swiperRef.current.swiper.slideTo(num);
  };

  return (
    <div className="wrap">
      <Header toSlide={toSlide} scrollIndex={scrollIndex} />
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
          <Title />
        </SwiperSlide>
        <SwiperSlide id="profile">
          <Profile />
        </SwiperSlide>
        <SwiperSlide id="projects">
          <Projects />
        </SwiperSlide>

        <SwiperSlide id="contact">
          <Contact toSlide={toSlide} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
