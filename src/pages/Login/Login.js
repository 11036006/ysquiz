import React, { useState, useEffect } from "react"
import './Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const Login = () => {
        if (password === '0401') {
            navigate('/home')
            sessionStorage.setItem('verify', '驗證通過');

        }
    }

    useEffect(() => {
        if (localStorage.getItem('verify')) {
            navigate('/home')
        }
    })

    return (
        <>

            <div className="body">
                <div className="LoginMain">
                    <h1>驗證碼</h1>
                    <input className="input" type={'text'} onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <Button variant="contained" className="btn" onClick={Login}>驗證登錄</Button>
                </div>
            </div>


        </>

    );
}

export default Login