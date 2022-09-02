import React, { useState,useEffect } from "react"
import './QuizCompleted.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function QuizCompleted() {
    const [a,setA]= useState('')
    const [b,setB]= useState('')
    const [c,setC]= useState('')
    const [d,setD]= useState('')
    const [e,setE]= useState('')
    const [f,setF]= useState('')
    const [g,setG]= useState('')
   
    const objArray = [ { "id": 1, "name": '高貴優雅', 'total': a },{ "id": 2,  "name": '傳統經典', 'total': b },
    { "id": 3,  "name": '運動休閒', 'total': c },
    { "id": 4,  "name": '復古浪漫', 'total': d },
    { "id": 5,  "name": '性感誘惑', 'total': e },
    { "id": 4,  "name": '時髦搶眼', 'total': f },
    { "id": 5,  "name": '創意變化', 'total': g }]
   
    const toatalMax = Math.max(...objArray.map(p => p.total))
    const retest = ()=>{
        sessionStorage.clear()
        window.location.reload()
    }
   
    
    const navigate = useNavigate()
    useEffect(() => {

        setA(sessionStorage.getItem('a'))
        setB(sessionStorage.getItem('b'))
        setC(sessionStorage.getItem('c'))
        setD(sessionStorage.getItem('d'))
        setE(sessionStorage.getItem('e'))
        setF(sessionStorage.getItem('f'))
        setG(sessionStorage.getItem('g'))

        if (!sessionStorage.getItem('verify')) {
            navigate('/')
        }
    },)

    return (
        <>
            <div className="body">
                <div className="QuizCompletedMain">
                    <img src="https://i.imgur.com/GJus2We.png" alt="照片" className="img"></img>
                    <h1>測驗結果</h1>
                    <br/>
                    {objArray.map((item) => (
                         Number(item.total) === toatalMax && Number(item.total)!==0
                            ? <h3 className="result">{item.name}</h3>
                            : null

                    ))}
                    <br/>
                      <Button variant="contained" className="btn" onClick={retest}>重新測驗</Button>

                </div>
            </div>

        </>

    );
}

export default QuizCompleted