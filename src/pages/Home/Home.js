import React, { useEffect } from "react"
import './Home.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()

    const quiz = () => {
        navigate('/quiz01')
    }
    useEffect(() => {
        if (!localStorage.getItem('verify')) {
            navigate('/')
        }
    })
    return (
        <>
            <div className="body">
                <div className="HomeMain">
                    <img src="https://i.imgur.com/CH0FTIU.png" alt="照片" className="img"></img>
                    <br />
                    <Button variant="contained" className="btn" onClick={quiz}>開始測驗</Button>
                </div>
            </div>

        </>

    );
}

export default Home