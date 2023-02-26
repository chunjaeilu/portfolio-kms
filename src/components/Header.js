// Header.js

export default function Header({ scrollIndex, toSlide }) {
  return (
    <header style={scrollIndex !== 0 ? { maxHeight: "70px" } : null}>
      <h1
        className="logo"
        onClick={() => {
          toSlide(0);
        }}
        style={scrollIndex !== 0 ? { transform: "scale(50%)" } : null}
      >
        <img src="./images/logo.svg" alt="" />
      </h1>
      <nav>
        <ul>
          <li
            onClick={() => {
              toSlide(0);
            }}
            style={
              scrollIndex === 0
                ? { color: "#FAE25F" }
                : { color: "#605e5e", fontWeight: "300" }
            }
          >
            HOME
          </li>
          <li
            onClick={() => {
              toSlide(1);
            }}
            style={
              scrollIndex === 0
                ? { color: "#fff", fontWeight: "200" }
                : scrollIndex === 1
                ? { color: "#FAE25F" }
                : { color: "#605e5e", fontWeight: "300" }
            }
          >
            PROFILE
          </li>
          <li
            onClick={() => {
              toSlide(2);
            }}
            style={
              scrollIndex === 0
                ? { color: "#fff", fontWeight: "200" }
                : scrollIndex === 2
                ? { color: "#FAE25F" }
                : { color: "#605e5e", fontWeight: "300" }
            }
          >
            PROJECTS
          </li>
          <li
            onClick={() => {
              toSlide(3);
            }}
            style={
              scrollIndex === 0
                ? { color: "#fff", fontWeight: "200" }
                : scrollIndex === 3
                ? { color: "#FAE25F" }
                : { color: "#605e5e", fontWeight: "300" }
            }
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </header>
  );
}
