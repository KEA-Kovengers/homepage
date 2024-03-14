import React from 'react';
import './App.css'; // 스타일시트 임포트
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MemberPage from "./member/MemberPage";
import sojeongProfile from "./profile/sojeong.png";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sojeong" element={<MemberPage profile={sojeongProfile} name='Sojeong Lee' />} />
      <Route path="/miso" element={<MemberPage profile='sojeongProfile' name='Miso Kim' />} />
    </Routes>
  );

}

export default App;
