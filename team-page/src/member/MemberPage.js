import logo from '../images/logo.png';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import mail from '../images/mail.png';
import git from '../images/git.png';
import phone from '../images/phone.png';

const MemberPage = (props) => {
    return (
        <div className="app">
            <div className="container">
                <Link to={'/'}>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div style={{ display: 'flex', flexDirection: 'row', height: '50%', justifyContent: 'left' }}>
                    <div style={{ justifyContent: 'center', width: '50%' }}>
                        <img style={{ width: 400, height: 400 }} src={props.profile} />
                        <br></br>
                        <a style={{ fontSize: 48, fontWeight: 'bold' }}>{props.name}</a>
                        <div style={{ paddingLeft: 104, paddingTop: 45, textAlign: 'left', flexDirection: 'column' }}>
                            <div>
                                <img style={{ width: 30 }} src={mail} />
                                <a style={{ marginLeft: 15, fontSize: 24 }}>E-mail : {props.email}</a>
                            </div>
                            <br></br>
                            <div>
                                <img style={{ width: 30 }} src={git} />
                                <Link to={props.githubLink} style={{ marginLeft: 15, color: 'black', fontSize: 24, textDecorationLine: 'none' }}>Github : {props.github}</Link>
                            </div>
                            <br></br>
                            <div style={{ alignItems: 'center' }}>
                                <img style={{ width: 30 }} src={phone} />
                                <a style={{ marginLeft: 15, fontSize: 24 }}>Phone : {props.phone}</a>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '30%', textAlign: 'left', marginLeft: 80, marginTop: '5%' }}>
                        <div>
                            <a style={{ fontSize: 48, fontWeight: 'bold' }}>Education</a>
                            <br></br><br></br><br></br>
                            <a style={{ fontSize: 24 }}> {props.major} </a>
                            <br></br><br></br>
                            <div style={{ height: 6, backgroundColor: '#E9E7DB' }}></div>
                            <br></br><br></br>
                        </div>
                        <div>
                            <a style={{ fontSize: 48, fontWeight: 'bold' }}>Info</a>
                            <br></br><br></br><br></br>
                            <a style={{ fontSize: 24 }}>Birth : {props.birth}</a>
                            <br></br>
                            <a style={{ fontSize: 24 }}>Address : {props.address}</a>
                            <br></br>
                            <a style={{ fontSize: 24 }}>MBTI : {props.mbti}</a>
                            <br></br><br></br>
                            <div style={{ height: 6, backgroundColor: '#E9E7DB' }}></div>
                            <br></br><br></br>
                        </div>
                        <div>
                            <a style={{ fontSize: 48, fontWeight: 'bold' }}>Role</a>
                            <br></br><br></br><br></br>
                            <a style={{ fontSize: 24 }}>{props.role}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberPage;