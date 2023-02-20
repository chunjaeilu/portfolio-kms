// Title.js

import HoneyComb from "./HoneyComb";

export default function Title() {
  return (
    <section id="title">
      <div className="txt-box">
        <h2>
          EXPANDING <br /> MY WORLD
        </h2>
        <p>나의 영역을 끊임없이 확장해가는 중</p>
      </div>
      <div className="area">
        <div className="row row1">
          <HoneyComb />
          <HoneyComb />
          <HoneyComb display text="React" />
          <HoneyComb />
          <HoneyComb display text="Figma" />
          <HoneyComb display text="PS" />
        </div>
        <div className="row row2">
          <HoneyComb display text="jQuery" />
          <HoneyComb display text="JavaScript" />
          <HoneyComb display text="HTML" />
          <HoneyComb display text="CSS" />
          <HoneyComb />
          <HoneyComb display text="AI" />
        </div>
        <div className="row row3">
          <HoneyComb />
          <HoneyComb display text="Express" />
          <HoneyComb display text="Node.js" />
          <HoneyComb />
          <HoneyComb />
          <HoneyComb />
        </div>
        <div className="row row4">
          <HoneyComb />
          <HoneyComb display text="JSON" />
          <HoneyComb display text="SQL" />
          <HoneyComb />
          <HoneyComb />
          <HoneyComb />
        </div>
      </div>
    </section>
  );
}
