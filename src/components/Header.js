// Header.js

export default function Header({ onClickNav, scrollIndex }) {
  return (
    <header style={scrollIndex !== 0 ? { height: "70px" } : null}>
      <h1
        className="logo"
        onClick={() => {
          onClickNav(0);
        }}
        style={scrollIndex !== 0 ? { transform: "scale(50%)" } : null}
      >
        <img src="./images/logo.png" alt="" />
      </h1>
      <nav>
        <ul>
          <li
            onClick={() => {
              onClickNav(0);
            }}
            style={scrollIndex === 0 ? { color: "#e3fb6d" } : null}
          >
            HOME
          </li>
          <li
            onClick={() => {
              onClickNav(1);
            }}
            style={scrollIndex === 1 ? { color: "#e3fb6d" } : null}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              onClickNav(2);
            }}
            style={scrollIndex === 2 ? { color: "#e3fb6d" } : null}
          >
            PROJECTS
          </li>
          <li
            onClick={() => {
              onClickNav(3);
            }}
            style={scrollIndex === 3 ? { color: "#e3fb6d" } : null}
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </header>
  );
}
