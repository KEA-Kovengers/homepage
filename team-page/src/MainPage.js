import './App.css';
import logo from './images/logo.png';
import team from './images/team.png';
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import GuestBook from './GuestBook';
import AddGuestBook from './AddGuestBook';
import { Container, List, Paper } from "@mui/material";
import hyewon from './images/hyewon.png';
import hyunseo from './images/hyunseo.png';
import miso from './images/miso.png';
import sangyeon from './images/sangyeon.png';
import sojeong from './images/sojeong.png';
import somi from './images/somi.png';
import sunghoon from './images/sunghoon.png';

const MainPage = () => {
    const [items, setItems] = useState([
    ]);
    const navigate = useNavigate();

    const addItem = (item) => {
        item.id = "ID-" + items.length;
        item.done = false;
        setItems([...items, item]);
        console.log("items:", items);
    };

    const editItem = () => {
        setItems([...items]);
    };

    const deletItem = (item) => {
        const newItems = items.filter(e => e.id !== item.id);
        setItems([...newItems]);
    }

    const movePage = (name) => {
        console.log(name);
        navigate(name);
    }
    let guestItems =
        items.length > 0 && (
            <Paper style={{ margine: 16 }} >
                <List>
                    {items.map((item) => (
                        <GuestBook item={item} key={item.id}
                            editItem={editItem}
                            deletItem={deletItem} />
                    ))}
                </List>
            </Paper>);
    return (
        <div className="app">
            <div className="container" >
                <img src={logo} alt="Logo" className="logo" />
                <img style={{ width: 772 }} src={team} ></img>
                <br></br><br></br>
                <a style={{ fontSize: 30, paddingTop: 30 }}>2024 KEA Project Team</a>
                <br></br><br></br>
                <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', paddingBottom: 30 }}>
                        <Link to={'/sunghoon'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={sunghoon} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>정성훈</a>
                        </Link>
                        <Link to={'/sangyeon'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={sangyeon} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>변상연</a>
                        </Link>
                        <Link to={'/hyunseo'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={hyunseo} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>박현서</a>
                        </Link>
                        <Link to={'/hyewon'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={hyewon} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>윤혜원</a>
                        </Link>
                    </div>

                </div>
                <div style={{ width: '100%', justifyContent: 'center', display: 'flex', paddingBottom: 150 }}>

                    <div style={{ display: 'flex', flexDirection: 'row', width: '60%', justifyContent: 'space-between' }}>
                        <Link to={'/sojeong'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={sojeong} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>이소정</a>
                        </Link>
                        <Link to={'/miso'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={miso} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>김미소</a>
                        </Link>
                        <Link to={'/somi'} style={{ textDecoration: 'none' }}>
                            <img style={{ width: 200 }} src={somi} />
                            <br></br>
                            <a style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>남소미</a>
                        </Link>

                    </div>
                </div>
                <a style={{ fontSize: 48, fontWeight: 'bold' }}>GUEST BOOK</a>
                <Container maxWidth="md" style={{ paddingTop: 38 }}>
                    <AddGuestBook addItem={addItem} />
                    <div className='GuestList'>{guestItems}</div>
                </Container>
            </div>
        </div >
    );
};

export default MainPage;