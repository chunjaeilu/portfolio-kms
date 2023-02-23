export default function HoneyComb({ display, text }) {
  return (
    <div className="stack-box">
      <svg
        width="100"
        height="117"
        viewBox="0 0 100 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 31.6023L50 4.35015L97 31.6023V86.1288L50 113.381L3 86.1288V31.6023Z"
          stroke={display ? "#FAE25F" : "none"}
          stroke-width="5"
        />
      </svg>
      <p className="stack-txt">{text}</p>
    </div>
  );
}
