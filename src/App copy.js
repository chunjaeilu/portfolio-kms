import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import About from "./components/About";
import Header from "./components/Header";
import Title from "./components/Title";
import { useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [swiperNum, setSwiperNum] = useState(0);

  return (
    <div className="wrap">
      <Header swiperNum={swiperNum} />
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, Keyboard]}
        mousewheel
        keyboard
        allowTouchMove
        className="main_slider"
        threshold={20}
        speed={700}
        onActiveIndexChange={(swiper) => {
          setSwiperNum(swiper.activeIndex);
        }}
      >
        <SwiperSlide id="title">
          <Title />
        </SwiperSlide>
        <SwiperSlide id="about">
          <About />
        </SwiperSlide>
        <SwiperSlide id="project">
          <Projects />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
