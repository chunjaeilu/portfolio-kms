// Dots.js
const Dot = ({ scrollIndex, num, onClickNav }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: "2px solid #fff",
        borderRadius: "50%",
        backgroundColor: scrollIndex === num ? "#fff" : "transparent",
        transitionDuration: "0.5s",
        transiton: "background-color 0.5s",
      }}
      onClick={() => {
        onClickNav(num);
      }}
    ></div>
  );
};
export default function Dots({ scrollIndex, onClickNav }) {
  return (
    <div className="dots">
      <Dot scrollIndex={scrollIndex} num={0} onClickNav={onClickNav} />
      <Dot scrollIndex={scrollIndex} num={1} onClickNav={onClickNav} />
      <Dot scrollIndex={scrollIndex} num={2} onClickNav={onClickNav} />
      <Dot scrollIndex={scrollIndex} num={3} onClickNav={onClickNav} />
    </div>
  );
}
