// Title.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HoneyComb = ({ display, text, delay }) => {
  return (
    <div className="stack-box">
      <svg
        width="100"
        height="117"
        viewBox="0 0 100 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-aos
        data-aos-delay={delay}
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <path
          d="M3 31.6023L50 4.35015L97 31.6023V86.1288L50 113.381L3 86.1288V31.6023Z"
          stroke={display ? "#FAE25F" : "none"}
          stroke-width="5"
        />
      </svg>
      <p
        className="stack-txt"
        data-aos
        data-aos-delay={delay + 500}
        data-aos-duration="1500"
        data-aos-once="false"
      >
        {text}
      </p>
    </div>
  );
};

export default function Title() {
  useEffect(() => {
    // AOS 초기화
    AOS.init();
  });
  return (
    <section>
      <div className="txt-box">
        <h2>
          EXPANDING <br /> MY WORLD
        </h2>
        <p>나의 영역을 끊임없이 확장해가는 중입니다</p>
      </div>
      <div className="area">
        <div className="row row1">
          <HoneyComb />
          <HoneyComb />
          <HoneyComb display text="React" delay={900} />
          <HoneyComb />
          <HoneyComb display text="Figma" delay={900} />
          <HoneyComb display text="PS" delay={1200} />
        </div>
        <div className="row row2">
          <HoneyComb display text="jQuery" delay={600} />
          <HoneyComb display text="JavaScript" delay={300} />
          <HoneyComb display text="HTML" delay={0} />
          <HoneyComb display text="CSS" delay={300} />
          <HoneyComb />
          <HoneyComb display text="AI" delay={1200} />
        </div>
        <div className="row row3">
          <HoneyComb />
          <HoneyComb display text="Express" delay={600} />
          <HoneyComb display text="Node.js" delay={600} />
          <HoneyComb />
          <HoneyComb />
          <HoneyComb />
        </div>
        <div className="row row4">
          <HoneyComb />
          <HoneyComb display text="JSON" delay={900} />
          <HoneyComb display text="SQL" delay={900} />
          <HoneyComb />
          <HoneyComb />
          <HoneyComb />
        </div>
      </div>
    </section>
  );
}
