import React from 'react';
import './App.css'; // 스타일시트 임포트
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Sojeong from "./member/Sojeong";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sojeong" element={<Sojeong />} />
    </Routes>
  );

}

export default App;
