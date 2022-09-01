import React, { useEffect, useState } from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './Quiz.css'
import { useNavigate } from 'react-router-dom';
function Quiz01() {
    const navigate = useNavigate()
    const [a01] = useState([{ no: "講究的" }, { no: "文雅的" }, { no: "尊重的" }, { no: "莊重的" }, { no: "氣質的" }, { no: "優美的" }, { no: "細緻的" }, { no: "含蓄的" }, { no: "心思細膩的" }, { no: "眼光敏銳的" }])
    const [a01Total, setA01Total] = useState(0)
    const [b01] = useState([{ no: "保守的" }, { no: "理性的" }, { no: "可靠的" }, { no: "嚴謹的" }, { no: "忠誠的" }, { no: "有系統的" }, { no: "責任感的" }, { no: "可信賴的" }, { no: "高效率的" }, { no: "規律的" }])
    const [b01Total, setB01Total] = useState(0)
    const [c01] = useState([{ no: "不拘小節的" }, { no: "活力充沛的" }, { no: "自然的" }, { no: "敏捷的" }, { no: "樂觀的" }, { no: "不矯飾的" }, { no: "積極的" }, { no: "有趣的" }, { no: "友善的" }, { no: "隨和好相處的" }])
    const [c01Total, setC01Total] = useState(0)
    const [d01] = useState([{ no: "女性化的" }, { no: "敏感的" }, { no: "擅於照顧人的" }, { no: "溫柔的" }, { no: "浪漫的" }, { no: "體貼的" }, { no: "有愛心的" }, { no: "熱心的" }, { no: "順服的" }, { no: "寬容的" }])
    const [d01Total, setD01Total] = useState(0)
    const [e01] = useState([{ no: "擅調情的" }, { no: "性感的" }, { no: "刺激的" }, { no: "大膽的" }, { no: "迷人的" }, { no: "令人興奮的" }, { no: "魅力的" }, { no: "吸引人的" }, { no: "誘惑挑逗的" }, { no: "豔感的" }])
    const [e01Total, setE01Total] = useState(0)
    const [f01] = useState([{ no: "時髦的" }, { no: "自信的" }, { no: "醒目的" }, { no: "強烈的" }, { no: "不落俗套的" }, { no: "武斷的" }, { no: "有想像力的" }, { no: "現代的" }, { no: "冷酷的" }, { no: "高標準的" }])
    const [f01Total, setF01Total] = useState(0)
    const [g01] = useState([{ no: "獨立的" }, { no: "自由的" }, { no: "有創意的" }, { no: "富藝術性的" }, { no: "冒險的" }, { no: "勇於嘗試的" }, { no: "特別的" }, { no: "自然感性的" }, { no: "神秘的" }, { no: "無畏的" }])
    const [g01Total, setG01Total] = useState(0)


    const aCheck = (e) => {
        if (e === true) {
            setA01Total(a01Total + 1)
        } else {
            setA01Total(a01Total - 1)
        }

    }
    const bCheck = (e) => {
        if (e === true) {
            setB01Total(b01Total + 1)
        } else {
            setB01Total(b01Total - 1)
        }

    }
    const cCheck = (e) => {
        if (e === true) {
            setC01Total(c01Total + 1)
        } else {
            setC01Total(c01Total - 1)
        }
    }
    const dCheck = (e) => {
        if (e === true) {
            setD01Total(d01Total + 1)
        } else {
            setD01Total(d01Total - 1)
        }
    }
    const eCheck = (e) => {
        if (e === true) {
            setE01Total(e01Total + 1)
        } else {
            setE01Total(e01Total - 1)
        }
    }
    const fCheck = (e) => {
        if (e === true) {
            setF01Total(f01Total + 1)
        } else {
            setF01Total(f01Total - 1)
        }
    }

    const gCheck = (e) => {
        if (e === true) {
            setG01Total(g01Total + 1)
        } else {
            setG01Total(g01Total - 1)
        }
    }

        const save = () => {
            localStorage.setItem('a', a01Total);
            localStorage.setItem('b', b01Total);
            localStorage.setItem('c', c01Total);
            localStorage.setItem('d', d01Total);
            localStorage.setItem('e', e01Total);
            localStorage.setItem('f', f01Total);
            localStorage.setItem('g', g01Total);
            localStorage.setItem('router', 'quiz02')
            navigate('/quiz02')

        }


        useEffect(() => {
            if (localStorage.getItem('router') === 'quiz03') {
                navigate('/quiz03')
            }
       
            
            if (localStorage.getItem('router') === 'quiz02') {
                navigate('/quiz02')
            }
            if (!localStorage.getItem('verify')) {
                navigate('/')
            }
        })

        return (
            <>

                <div className="QuizMain">

                    <FormGroup className="card">
                        {a01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => aCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {b01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => bCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {c01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => cCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {d01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => dCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {e01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => eCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {f01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => fCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {g01.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => gCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <Button variant="contained" className="btn" onClick={save}>下一步</Button>
                    <br/>


                </div>

            </>

        );
    }

    export default Quiz01