const Content = ({ title, desc, url }) => {
  return (
    <div className="content">
      <h4 className="content-title">{title}</h4>
      <p>{desc}</p>
      <p>{url}</p>
    </div>
  );
};

export default function Contact() {
  return (
    <section id="contact">
      <h2>CONTACT</h2>
      <div className="contents">
        <div className="f-logo content">
          <img src="./images/logo-mono.png" alt="logo" />
        </div>
        <Content title="email" url="chunjaeilu@naver.com" />
        <Content title="blog" url="https://velog.io/@chunjaeilu" />
        <Content title="github" url="https://github.com/chunjaeilu" />
      </div>
      <p className="copy">Copyright 2023. KMS All rights reserved.</p>
    </section>
  );
}
