import React from 'react';
import './App.css'; // 스타일시트 임포트
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MemberPage from "./member/MemberPage";
import sojeongProfile from "./images/sojeong.png";
import misoProfile from "./images/miso.png";
import somiProfile from "./images/somi.png";
import sangyeonProfile from "./images/sangyeon.png";
import hyewonProfile from "./images/hyewon.png";
import sunghoonProfile from "./images/sunghoon.png";
import hyunseoProfile from "./images/hyunseo.png";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sojeong" element={<MemberPage profile={sojeongProfile} name='Sojeong Lee' email='thwjd0828@gachon.ac.kr' github='2sojeong' githubLink='https://github.com/2sojeong' phone='010-3511-6248' role='backend' birth='2001.08.28' mbti='ISTJ' address='경기도 성남시 수정구' />} />
      <Route path="/miso" element={<MemberPage profile={misoProfile} name='Miso Kim' email='althcjstk08@gachon.ac.kr' github='bamb14' githubLink='https://github.com/bamb14' phone='010-7930-7725' role='frontend' birth='2002.09.08' mbti='INFP' address='서울특별시 동작구' />} />
      <Route path="/somi" element={<MemberPage profile={somiProfile} name='Somi Nam' email='somi4219@gachon.ac.kr' github='somi4219' githubLink='https://github.com/somi4219' phone='010-2312-5186' role='backend' birth='2002.10.23' mbti='ESTJ' address='경기도 안양시' />} />
      <Route path="/sangyeon" element={<MemberPage profile={sangyeonProfile} name='Sangyeon Byeon' email='' github='' githubLink='' phone='' role='' birth='' mbti='' address='' />} />
      <Route path="/hyewon" element={<MemberPage profile={hyewonProfile} name='Hyewon Yoon' email='iey704@gachon.ac.kr' github='iey704' githubLink='https://github.com/iey704' phone='010-9107-6619' role='frontend' birth='2001.03.20' mbti='ISFP' address='서울특별시 강남구 ' />} />
      <Route path="/sunghoon" element={<MemberPage profile={sunghoonProfile} name='Sunghoon Jung' email='' github='' githubLink='' phone='' role='' birth='' mbti='' address='' />} />
      <Route path="/hyunseo" element={<MemberPage profile={hyunseoProfile} name='Hyunseo Park' email='' github='' githubLink='' phone='' role='' birth='' mbti='' address='' />} />
    </Routes>
  );

}

export default App;
