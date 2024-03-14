import logo from '../logo.png';
import '../App.css';


const MemberPage = (props) => {
    return (
        <div className="app">
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <img src={props.profile} />
                <div>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default MemberPage;