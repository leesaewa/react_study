# React Router
- 컴포넌트의 모음집
- 
## 설치
- `npm i react-router-dom`
- **본 실습은 "5.3.0"버전을 사용함**

## 사용법
<img src="https://user-images.githubusercontent.com/97646713/201387783-b3fd2bf7-fd57-404b-a9e8-a1e7d22daa71.png">
- basic home router `/`은 **가장 마지막(하단)에 있어야 함.** >> nodejs 라우터랑 똑같음
- 앞에 넣어야만 한다면, `Route exact path="/"`처럼 중간에 `exact`를 넣으면 완전일치로 판정이 바뀌므로 순서에 상관없이 출력됨.

------

## Switch
- 한 번에 하나의 Route만 렌더링할 때 사용 (리액트 라우터는 두 개의 라우트를 한 번에 렌더링 하는 것도 가능하기 때문)

## Link
- 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트.

#### 사용
<img src="https://user-images.githubusercontent.com/97646713/201388949-904cd670-3b3e-45ff-9663-dff012b8dfcc.png">

## Browser Router와 Hash Router의 차이점
#### Browser Router
- URL이 보통의 웹사이트와 같음.
  - ex) `www.naver.com/movie`
- 보통은 이 라우터를 사용함.

#### Hash Router
- URL이 조금 다름. `#`이 붙음.
  - ex) `www.naver.com/#/movie`

------

## dynamic url -> url에 변수를 넣을 수 있음.

## Parameters
- id값을 불러올 수 있음.
