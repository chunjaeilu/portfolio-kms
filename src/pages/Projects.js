// Projects.js

import { useState } from "react";

import "swiper/css";

import Project from "../components/Project";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectData = [
    {
      title: "DamDam",
      category: "팀 프로젝트 01. ",
      img: [
        "./images/project1-1.png",
        "./images/project1-2.png",
        "./images/project1-3.png",
        "./images/project1-4.png",
        "./images/project1-5.png",
        "./images/project1-6.png",
        "./images/project1-7.png",
        "./images/project1-8.png",
        "./images/project1-9.png",
      ],
      desc: "금연 동기부여 어플리케이션",
      concept:
        "금연을 목표로 한 사용자가 도전의식을 가지고 하루하루 '담담'하게 금연을 이어갈 수 있도록 도와주는 앱 제작",
      feature:
        "Node.js 환경에서 앱 제작 | DB에 접근하여 CRUD 수행 | 시간 흐름에 따른 조건 달성여부 체크",
      stack:
        "HTML | CSS | JavaScript | jQuery | Node.js | Express | EJS | JSON | Figma",
      url: "https://port-0-damdam3-fyyf25lbohiha7.gksl2.cloudtype.app/",
      github: "https://github.com/chunjaeilu/damdam3.git",
      mainColor: "#1FAB89",
    },
    {
      title: "Kolon Global",
      category: "개인 프로젝트 01. ",
      img: [
        "./images/project2-1.png",
        "./images/project2-2.png",
        "./images/project2-3.png",
        "./images/project2-4.png",
        "./images/project2-5.png",
        "./images/project2-6.png",
        "./images/project2-7.png",
      ],
      desc: "노후 사이트 리뉴얼 및 반응형 웹페이지 구현",
      concept:
        "노후된 사이트의 UI/UX를 개선하되 계열사 홈페이지와 통일감 있는 구성 | 깔끔하고 간결한 디자인으로 기업이념을 강조",
      feature:
        "반응형 웹페이지 제작 | CSS, JavaScript를 활용해 다양한 효과 구현",
      stack: "HTML | CSS | JavaScript | jQuery | Figma",
      url: "https://chunjaeilu.github.io/kolon_global/",
      github: "https://github.com/chunjaeilu/kolon_global.git",
      mainColor: "#0078C3",
    },
    {
      title: "Public Service",
      category: "개인 프로젝트 02. ",
      img: [
        "./images/project3-1.png",
        "./images/project3-2.png",
        "./images/project3-3.png",
      ],
      desc: "공공 API 활용 모바일 앱 제작",
      concept:
        "정부 각 부처 및 지자체에서 제공하는 공공서비스를 빠르고 간편하게 검색할 수 있는 서비스 | 추천테마, 자주 찾는 서비스 등 퀵메뉴 제공",
      feature:
        "React 라이브러리를 활용하여 웹앱 제작 | 공공 API 활용 | 조건에 따른 검색기능 구현 | Expo 프레임워크를 활용하여 앱 패키징",
      stack: "HTML | CSS | JavaScript | React | Axios | Expo | Figma",
      url: "https://web-my-public-service-cf24lcehrrvk.gksl2.cloudtype.app/",
      github: "https://github.com/chunjaeilu/My_Public_Service.git",
      mainColor: "#033075",
    },
  ];
  return (
    <section>
      <h2>PROJECTS</h2>
      <div className="project-box">
        {projectData.map((item, i) => (
          <div key={i} className="project">
            <div
              className={`btn-arcodion ${activeIndex === i ? "active" : ""}`}
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
