// Project.js
import { useEffect, useState } from "react";

export default function Project({ item, activeIndex }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [activeIndex]);

  return (
    <>
      <h3 className="project-title">
        <span>{item.category}</span>
        {item.title}
      </h3>
      <div className="project-contents">
        <div className="project-txt-box">
          <div className="txt-box">
            <h4>제작목표</h4>
            <p>{item.desc}</p>
          </div>
          <div className="txt-box">
            <h4>제작의도</h4>
            <p>{item.concept}</p>
          </div>
          <div className="txt-box">
            <h4>프로젝트 특징</h4>
            <p>{item.feature}</p>
          </div>
          <div className="txt-box">
            <h4>활용스택</h4>
            <p>{item.stack}</p>
          </div>
          <div className="btn-box">
            <a
              href={item.url}
              className="site"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  item.url,
                  "_blank",
                  `width=${item.frameWidth}, height=${item.frameHeight}, left=${
                    window.screen.width / 2 - item.frameWidth / 2
                  }, top=${window.screen.height / 2 - item.frameHeight / 2}`
                );
              }}
            >
              {item.btnTxt}
            </a>
            <a
              href={item.github}
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              코드 확인
            </a>
          </div>
        </div>
        <div className="img-box">
          <div className="img">
            <img src={item.img ? item.img[imgIndex] : null} alt="project-img" />
          </div>
          <div className="page-btn-box">
            {item.img?.map((e, i) => (
              <button
                key={i}
                className={`page-btn ${imgIndex === i ? "active" : ""}`}
                onClick={() => {
                  setImgIndex(i);
                }}
              >
                page {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
