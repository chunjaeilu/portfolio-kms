// Header.js

import { useState } from "react";

export default function Header({ scrollIndex, toSlide, diviceWidth }) {
  const [showList, setShowList] = useState(false);

  return (
    <header
      style={
        scrollIndex !== 0
          ? { maxHeight: "80px" }
          : diviceWidth < 768
          ? { maxHeight: "80px" }
          : null
      }
    >
      <h1
        className="logo"
        onClick={() => {
          toSlide(0);
        }}
        style={
          scrollIndex !== 0
            ? { transform: "scale(50%)" }
            : diviceWidth < 768
            ? { transform: "scale(50%)" }
            : null
        }
      >
        <img src="./images/logo.svg" alt="logo" />
      </h1>
      <nav>
        {diviceWidth < 768 ? (
          <button
            className="btn-nav-mob"
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M5 13.75H20V16.25H5V13.75ZM5 7.5H25V10H5V7.5ZM5 22.5H14.0437V20H5V22.5Z"
                fill={scrollIndex === 0 ? "#fff" : "#34495e"}
              />
            </svg>
          </button>
        ) : null}

        <ul
          style={{
            display: diviceWidth < 768 && showList === false ? "none" : "",
            backgroundColor:
              diviceWidth < 768 && scrollIndex === 0
                ? "rgba(49,51,56,0.95)"
                : "",
          }}
        >
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
