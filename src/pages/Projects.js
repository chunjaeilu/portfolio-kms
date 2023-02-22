// Projects.js

import { useState } from "react";

import "swiper/css";

import Project from "../components/Project";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectData = [
    {
      title: "DamDam",
      content: "Content 1",
    },
    {
      title: "Kolon Global",
      content: "Content 2",
    },
    {
      title: "My Public Service",
      content: "Content 3",
    },
  ];
  return (
    <section>
      <h2>PROJECTS</h2>
      <div className="project-box">
        {projectData.map((item, index) => (
          <div key={index} className="project">
            <div
              className="btn-arcodion"
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {item.title}
            </div>
            <div className={`content ${activeIndex === index ? "active" : ""}`}>
              <Project title={item.title} content={item.content} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
