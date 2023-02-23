# PORTFOLIO SITE

## Distribution
> Vercel
>
> https://portfolio-kms.vercel.app/

## Goal
> React 라이브러리를 활용해 포트폴리오 웹페이지 제작
>
> Swiper를 이용해 스크롤시 페이지 부드럽게 이동

## Skills & Tools
<p align='center'><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <br> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></p>

## Screenshot

## Install
  ```cmd
  $ npm install
  ```

## Run
  ```cmd
  $ npm start
  ```
- http://localhost:3000

## projects

### project 01. DamDam
> Team Project
> 
> 금연 동기부여 어플리케이션

#### Feature
- Node.js 환경에서 제작
- DB에 접근하여 CRUD 작업 수행
- 시간 흐름에 따른 조건 달성여부 체크

#### Using Stack
> HTML | CSS | JavaScript | jQuery | Node.js | Express | EJS | JSON | Figma

#### Link
> [사이트 링크](https://port-0-damdam3-fyyf25lbohiha7.gksl2.cloudtype.app/)
>
> [깃허브 링크](https://github.com/chunjaeilu/damdam3.git)

### project 02. Kolon Global
> Individual Project
>
> 노후 사이트 리뉴얼 및 반응형 페이지 구현

#### Feature
- 반응형 웹페이지 제작
- CSS, JavaScript를 활용해 다양항 효과 구현

#### Using Stack
> HTML | CSS | JavaScript | jQuery | Figma

#### Link
> [사이트 링크](https://chunjaeilu.github.io/kolon_global/)
>
> [깃허브 링크](https://github.com/chunjaeilu/kolon_global.git)

### project 03. Public Service
> Individual Project
>
> 공공 API 활용 모바일 앱 제작

#### Feature
- React 라이브러리를 활용하여 웹앱 제작
- 공공 API 활용
- 조건에 따른 검색기능 구현
- Expo 프레임워크를 활용하여 앱 패키징

#### Using Stack
> HTML | CSS | JavaScript | React | Axios | Expo | Figma

#### Link
> [사이트 링크](https://web-my-public-service-cf24lcehrrvk.gksl2.cloudtype.app/)
>
> [깃허브 링크](https://github.com/chunjaeilu/My_Public_Service.git)

## 주요 기능

### swiper
> swiper 라이브러리를 활용, 스크롤및 드래그시 페이지 이동 효과 구현
>
> swiper 컴포넌트를 `useRef()`로 관리하고, navigation 클릭시 ref를 참조하여 페이지 이동함수 실행

  ```javascript
  // App.js
  function App() {
    const swiperRef = useRef();
    const toSlide = (num) => {
      swiperRef.current.swiper.slideTo(num);
    };

    return (
      <div className="wrap">
        <Header toSlide={toSlide} scrollIndex={scrollIndex} />
        <Swiper ref={swiperRef}>
          ...
        </Swiper>
      </div>
    );
  }
  ```
  ```javascript
  // Header.js
  <nav>
    <ul>
      <li onClick={() => {toSlide(0);}}>
        HOME
      </li>
      ...
    </ul>
  </nav>
  ```