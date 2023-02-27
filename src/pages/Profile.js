// Profile.js

// svg
import { ReactComponent as HTML } from "../images/stack/html5.svg";
import { ReactComponent as CSS } from "../images/stack/css3.svg";
import { ReactComponent as JavaScript } from "../images/stack/javascript.svg";
import { ReactComponent as JQuery } from "../images/stack/jquery.svg";
import { ReactComponent as Nodejs } from "../images/stack/nodedotjs.svg";
import { ReactComponent as Express } from "../images/stack/express.svg";
import { ReactComponent as React } from "../images/stack/react.svg";
import { ReactComponent as SQLite } from "../images/stack/sqlite.svg";
import { ReactComponent as Figma } from "../images/stack/figma.svg";
import { ReactComponent as Github } from "../images/stack/github.svg";

export default function Profile({ diviceWidth }) {
  return (
    <section>
      <h2 className="page-title slide-up">PROFILE</h2>
      <div className="profile-box">
        {diviceWidth >= 768 ? (
          <div className="img-box">
            <img
              className="profile-img"
              src="./images/profile-01.png"
              alt="profile-01"
            />
            <img
              className="profile-img"
              src="./images/profile-02.png"
              alt="profile-02"
            />
          </div>
        ) : null}
        <h3 className="name slide-right ">
          김민수 (KIM MINSU)
          <span>
            {" : : "}
            항상 새로운 것을 탐구하고 성장하는 개발자를 꿈꾸고 있습니다
          </span>
        </h3>
        <div className="contents">
          <div className="content slide-right dlay-1">
            <h3>About</h3>
            <p>
              chunjaeilu@naver.com | 010.2014.4350 | 1988.08.27 | 경기도 안양시
            </p>
          </div>
          <div className="content slide-right dlay-2">
            <h3>Stack</h3>
            <div className="icon-box">
              <div className="stack-icon">
                <HTML width={diviceWidth >= 768 ? 28 : 18} />
                <p>HTML</p>
              </div>
              <div className="stack-icon">
                <CSS width={diviceWidth >= 768 ? 28 : 18} />
                <p>CSS</p>
              </div>
              <div className="stack-icon">
                <JavaScript width={diviceWidth >= 768 ? 28 : 18} />
                <p>JavaScript</p>
              </div>
              <div className="stack-icon">
                <JQuery width={diviceWidth >= 768 ? 28 : 18} />
                <p>jQuery</p>
              </div>
              <div className="stack-icon">
                <Nodejs width={diviceWidth >= 768 ? 28 : 18} />
                <p>Node.js</p>
              </div>
              <div className="stack-icon">
                <Express width={diviceWidth >= 768 ? 28 : 18} />
                <p>Express</p>
              </div>
              <div className="stack-icon">
                <React width={diviceWidth >= 768 ? 28 : 18} />
                <p>React</p>
              </div>
              <div className="stack-icon">
                <SQLite width={diviceWidth >= 768 ? 28 : 18} />
                <p>SQLite</p>
              </div>
              <div className="stack-icon">
                <Figma width={diviceWidth >= 768 ? 28 : 18} />
                <p>Figma</p>
              </div>
              <div className="stack-icon">
                <Github width={diviceWidth >= 768 ? 28 : 18} />
                <p>Github</p>
              </div>
            </div>
          </div>
          <div className="content slide-right dlay-3">
            <h3>Career & License</h3>
            <p>
              UI/UX Web Design(Web Publisher & Frontend Developer) 900시간 수료
              | 웹디자인 기능사(필기합격)
            </p>
          </div>
          <div className="content advantage  slide-right dlay-4">
            <h3>Advantage</h3>
            <p>
              GROWTH : :<span> 항상 성장하는</span> | RESPONSIBILITY : :
              <span> 책임을 다 하는</span> | PATIENCE : :
              <span> 끈기있게 매진하는</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
