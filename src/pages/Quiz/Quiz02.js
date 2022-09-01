import React, { useEffect, useState } from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './Quiz.css'
import { useNavigate } from 'react-router-dom';
function Quiz02() {
    const navigate = useNavigate()
    const [a02] = useState([{ no: "主管階級" }, { no: "公眾人物" }, { no: "發言人" }, { no: "演講人" }, { no: "社會名人" }, { no: "新聞主播" }, { no: "政治人物" }, { no: "行政高級官員" }, { no: "大企業負責人" }, { no: "講師" }, { no: "企業家" }])
    const [a02Total, setA02Total] = useState(0)
    const [b02] = useState([{ no: "公務人員" }, { no: "管理階層" }, { no: "法律" }, { no: "政治" }, { no: "金融保險" }, { no: "顧問" }, { no: "觀光事業" }, { no: "不動產" }, { no: "新聞業" }, { no: "教育界" }, { no: "醫師" }])
    const [b02Total, setB02Total] = useState(0)
    const [c02] = useState([{ no: "工程製造業" }, { no: "攝影" }, { no: "學生" }, { no: "體育界" }, { no: "老師"}, { no: "休閒旅遊" }, { no: "技術人員" }, { no: "園藝人員" }, { no: "餐飲業" }, { no: "娛樂業" }, { no: "自由業" }])
    const [c02Total, setC02Total] = useState(0)
    const [d02] = useState([{ no: "醫護" }, { no: "幼教" }, { no: "社會工作" }, { no: "心理諮商" }, { no: "營養保健" }, { no: "女性用品" }, { no: "兒童用品" }, { no: " 新娘禮服業" }, { no: "美容" }, { no: "媒姆" }, { no: "商品諮詢師" }])
    const [d02Total, setD02Total] = useState(0)
    const [e02] = useState([{ no: "演藝界" }, { no: "舞蹈" }, { no: "模特兒" }, { no: "俱樂部經營" }, { no: "酒促人員" }, { no: "展場展示人員" }, { no: "檳榔西施" }, { no: "鋼管表演" }, { no: "酒吧服務" }, { no: "伴遊" }, { no: "花車表演" }])
    const [e02Total, setE02Total] = useState(0)
    const [f02] = useState([{ no: "廣告" }, { no: "公關" }, { no: "設計師" }, { no: "建築師" }, { no: "形象顧問" }, { no: "設計助理" }, { no: "藝術工作者" }, { no: "活動主持" }, { no: "演藝界" }, { no: "晚會主持" }, { no: "舞台表演" }])
    const [f02Total, setF02Total] = useState(0)
    const [g02] = useState([{ no: "藝術" }, { no: "服裝" }, { no: "創意工作" }, { no: "造型" }, { no: "彩妝" }, { no: "演藝界" }, { no: "服裝銷售" }, { no: "形象顧問" }, { no:"宗教人士" }, { no: "藝術品銷售員" }, { no: "美甲人員" }])
    const [g02Total, setG02Total] = useState(0)
   


    const aCheck = (e) => {
        if (e === true) {
            setA02Total(a02Total + 1)
        } else {
            setA02Total(a02Total - 1)
        }

    }
    const bCheck = (e) => {
        if (e === true) {
            setB02Total(b02Total + 1)
        } else {
            setB02Total(b02Total - 1)
        }

    }
    const cCheck = (e) => {
        if (e === true) {
            setC02Total(c02Total + 1)
        } else {
            setC02Total(c02Total - 1)
        }
    }
    const dCheck = (e) => {
        if (e === true) {
            setD02Total(d02Total + 1)
        } else {
            setD02Total(d02Total - 1)
        }
    }
    const eCheck = (e) => {
        if (e === true) {
            setE02Total(e02Total + 1)
        } else {
            setE02Total(e02Total - 1)
        }
    }
    const fCheck = (e) => {
        if (e === true) {
            setF02Total(f02Total + 1)
        } else {
            setF02Total(f02Total - 1)
        }
    }

    const gCheck = (e) => {
        if (e === true) {
            setG02Total(g02Total + 1)
        } else {
            setG02Total(g02Total - 1)
        }
    }

        const save = () => {

            const a = localStorage.getItem('a')
            const aTotal =Number(a)+Number(a02Total)
            localStorage.setItem('a', aTotal);
            const b = localStorage.getItem('b')
            const bTotal =Number(b)+Number(b02Total)
            localStorage.setItem('b', bTotal);
            const c = localStorage.getItem('c')
            const cTotal =Number(c)+Number(c02Total)
            localStorage.setItem('c', cTotal);
            const d = localStorage.getItem('d')
            const dTotal =Number(d)+Number(d02Total)
            localStorage.setItem('d', dTotal);
            const e = localStorage.getItem('e')
            const eTotal =Number(e)+Number(e02Total)
            localStorage.setItem('e', eTotal);
            const f = localStorage.getItem('f')
            const fTotal =Number(f)+Number(f02Total)
            localStorage.setItem('f', fTotal);
            const g= localStorage.getItem('g')
            const gTotal =Number(g)+Number(g02Total)
            localStorage.setItem('g', gTotal);

            localStorage.setItem('router', 'quiz03');
            navigate('/quiz03')
        }


        useEffect(() => {
            if (localStorage.getItem('router') === 'quiz03') {
                navigate('/quiz03')
            }
         
       
            if (!localStorage.getItem('verify')) {
                navigate('/')
            }
        })

        return (
            <>

                <div className="QuizMain">

                    <FormGroup className="card">
                        {a02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => aCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {b02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => bCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {c02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => cCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {d02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => dCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {e02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => eCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {f02.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => fCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {g02.map((item) => (
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

    export default Quiz02