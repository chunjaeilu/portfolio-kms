const Content = ({ title, desc, url, button }) => {
  return (
    <div className="content">
      <h4 className="content-title">{title}</h4>
      <p>{desc}</p>
      <p>{url}</p>
      {button ? (
        <a href={url} target="_blank" rel="noreferrer">
          {title} 바로가기
        </a>
      ) : null}
    </div>
  );
};

export default function Contact({ toSlide }) {
  return (
    <section>
      <h2>CONTACT</h2>
      <div className="contents">
        <div className="f-logo content">
          <img
            src="./images/logo-mono.png"
            alt="logo"
            onClick={() => {
              toSlide(0);
            }}
          />
        </div>
        <div className="content-col">
          <Content title="email" url="chunjaeilu@naver.com" />
          <Content title="phone" url="010.2014.4350" />
        </div>
        <Content
          title="blog"
          desc="6개월간 배움의 기록"
          url="https://velog.io/@chunjaeilu"
          button
        />
        <Content
          title="github"
          desc="모든 프로젝트 확인하기"
          url="https://github.com/chunjaeilu"
          button
        />
      </div>
      <p className="copy">
        이 사이트는 상업용이 아닌 개인 포트폴리오 목적으로 제작된 사이트 입니다.
        일부 이미지의 저작권은 따로 있을 수 있습니다.
      </p>
    </section>
  );
}
