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
        <img src="./images/logo.png" alt="" />
      </h1>
      <nav>
        <ul>
          <li
            onClick={() => {
              toSlide(0);
            }}
            style={
              scrollIndex === 0 ? { color: "#FAE25F" } : { color: "#605E5E" }
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
                ? { color: "#fff" }
                : scrollIndex === 1
                ? { color: "#FAE25F" }
                : { color: "#605E5E" }
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
                ? { color: "#fff" }
                : scrollIndex === 2
                ? { color: "#FAE25F" }
                : { color: "#605E5E" }
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
                ? { color: "#fff" }
                : scrollIndex === 3
                ? { color: "#FAE25F" }
                : { color: "#605E5E" }
            }
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </header>
  );
}
