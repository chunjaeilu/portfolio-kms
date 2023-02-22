// Dots.js
const Dot = ({ scrollIndex, num, toSlide }) => {
  return (
    <div
      className="dot"
      style={{
        width: 10,
        height: 10,
        border: scrollIndex === 0 ? "2px solid #fff" : "2px solid #605e5e",
        borderRadius: "50%",
        backgroundColor:
          scrollIndex === num
            ? scrollIndex === 0
              ? "#fff"
              : "#605e5e"
            : "transparent",
        transitionDuration: "0.5s",
        transiton: "background-color 0.5s",
      }}
      onClick={() => {
        toSlide(num);
      }}
    ></div>
  );
};
export default function Dots({ scrollIndex, toSlide }) {
  return (
    <div className="dots">
      <Dot scrollIndex={scrollIndex} num={0} toSlide={toSlide} />
      <Dot scrollIndex={scrollIndex} num={1} toSlide={toSlide} />
      <Dot scrollIndex={scrollIndex} num={2} toSlide={toSlide} />
      <Dot scrollIndex={scrollIndex} num={3} toSlide={toSlide} />
    </div>
  );
}
