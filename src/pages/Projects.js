// Projects.js

import { useState } from "react";

import "swiper/css";

import Project from "../components/Project";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectData = [
    {
      title: "DamDam",
      category: "Team Project",
      content: "Content 1",
      img: "./images/project1.png",
      desc: "",
    },
    {
      title: "Kolon Global",
      category: "Individual Project",
      content: "Content 2",
    },
    {
      title: "Public Service",
      category: "Individual Project",
      content: "Content 3",
    },
  ];
  return (
    <section>
      <h2>PROJECTS</h2>
      <div className="project-box">
        {projectData.map((item, i) => (
          <div key={i} className="project">
            <div
              className="btn-arcodion"
              onClick={() => {
                setActiveIndex(i);
              }}
            >
              <p>{item.title}</p>
            </div>
            <div className={`content ${activeIndex === i ? "active" : ""}`}>
              <Project item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
