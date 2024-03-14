import './App.css';
import logo from './logo.png';
const MainPage = () => {
    return (
        <div className="app">
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                {/* 여기에 다른 컴포넌트나 내용 추가 */}
            </div>
        </div>
    );
};

export default MainPage;