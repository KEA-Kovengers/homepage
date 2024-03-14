import React from 'react';
import './App.css'; // 스타일시트 임포트
import logo from './logo.png'; // 로고 이미지 임포트

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        {/* 여기에 다른 컴포넌트나 내용 추가 */}
      </div>
    </div>
  );
}

export default App;
