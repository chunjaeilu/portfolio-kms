// Title.js
import { useState, useEffect } from "react";

const HoneyComb = ({ display, text, delay, diviceWidth }) => {
  const [displaySVG, setDisplaySVG] = useState(false);

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplaySVG(true);
      }, delay);
    }
  }, [display, delay]);

  return (
    <div className={`stack-box ${displaySVG && "flip"}`}>
      <svg
        width={diviceWidth >= 768 ? "100" : "55"}
        height={diviceWidth >= 768 ? "117" : "64.3"}
        viewBox="0 0 100 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 31.6023L50 4.35015L97 31.6023V86.1288L50 113.381L3 86.1288V31.6023Z"
          stroke={display ? "#FAE25F" : "none"}
          strokeWidth="5"
        />
      </svg>
      <p className="stack-txt">{text}</p>
    </div>
  );
};

export default function Title({ diviceWidth }) {
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
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb
            display
            text="React"
            delay={1200}
            diviceWidth={diviceWidth}
          />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb
            display
            text="Figma"
            delay={1200}
            diviceWidth={diviceWidth}
          />
          <HoneyComb display text="PS" delay={1600} diviceWidth={diviceWidth} />
        </div>
        <div className="row row2">
          <HoneyComb
            display
            text="jQuery"
            delay={800}
            diviceWidth={diviceWidth}
          />
          <HoneyComb
            display
            text="JavaScript"
            delay={300}
            diviceWidth={diviceWidth}
          />
          <HoneyComb display text="HTML" delay={0} diviceWidth={diviceWidth} />
          <HoneyComb display text="CSS" delay={400} diviceWidth={diviceWidth} />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb display text="AI" delay={1600} diviceWidth={diviceWidth} />
        </div>
        <div className="row row3">
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb
            display
            text="Express"
            delay={800}
            diviceWidth={diviceWidth}
          />
          <HoneyComb
            display
            text="Node.js"
            delay={800}
            diviceWidth={diviceWidth}
          />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb
            display
            text="Bootstrap"
            delay={1200}
            diviceWidth={diviceWidth}
          />
          <HoneyComb diviceWidth={diviceWidth} />
        </div>
        <div className="row row4">
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb
            display
            text="JSON"
            delay={1200}
            diviceWidth={diviceWidth}
          />
          <HoneyComb
            display
            text="SQL"
            delay={1200}
            diviceWidth={diviceWidth}
          />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb diviceWidth={diviceWidth} />
          <HoneyComb diviceWidth={diviceWidth} />
        </div>
      </div>
    </section>
  );
}
