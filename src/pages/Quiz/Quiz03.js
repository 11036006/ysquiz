import React, { useEffect, useState } from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './Quiz.css'
import { useNavigate } from 'react-router-dom';
function Quiz03() {
    const navigate = useNavigate()
    const [a03] = useState([{ no: "正式餐會" }, { no: "開幕典禮" }, { no: "上電視" }, { no: "婚禮" }, { no: "文化活動 " }, { no: "高端社交集會 " }, { no: "扶輪、同濟社團" }, { no: "高階經理人聚會" }, { no: "品酒會 " }, { no: "政商會議" }, { no: "宴請外國賓客" }])
    const [a03Total, setA03Total] = useState(0)
    const [b03] = useState([{ no: "面試" }, { no: "政治活動" }, { no: "出席法庭" }, { no: "商業活動" }, { no: "社區委員會" }, { no: "家長會" }, { no: "學術研討會" }, { no: "職場正式會議" }, { no: "拜訪傳產業顧客" }, { no: "扶輪、同濟社團" }, { no: "演講" }])
    const [b03Total, setB03Total] = useState(0)
    const [c03] = useState([{ no: "義工" }, { no: "運動" }, { no: "園藝" }, { no: "戶外活動" }, { no: "旅遊"}, { no: "寵物相關活動" }, { no: "運動賽觀賞" }, { no: "專業技能學習" }, { no: "舞蹈瑜珈抒壓" }, { no: "電影欣賞" }, { no: "手工藝活動" }])
    const [c03Total, setC03Total] = useState(0)
    const [d03] = useState([{ no: "宗教活動" }, { no: "親子活動" }, { no: "家庭聚會" }, { no: "慈善活動" }, { no: "婚宴" }, { no: "茶會" }, { no: "花藝表演" }, { no: "彩粧活動" }, { no: "廚藝學習" }, { no: "文學研讀創作" }, { no: "音樂欣賞及彈奏" }])
    const [d03Total, setD03Total] = useState(0)
    const [e03] = useState([{ no: "勁歌會" }, { no: "舞會" }, { no: "夜間社交" }, { no: "聯誼派對" }, { no: "夜店" }, { no: "節目活動" }, { no: "服裝秀" }, { no: "酒店" }, { no: "人體攝影主角" }, { no: "人體彩繪主角" }, { no: "舞台性感演出" }, { no: "內衣代言" }])
    const [e03Total, setE03Total] = useState(0)
    const [f03] = useState([{ no: "藝術欣賞" }, { no: "畫廊" }, { no: "工藝市集" }, { no: "歌舞劇" }, { no: "戲劇表演" }, { no: "日常派對" }, { no: "創意比賽" }, { no: "創意表演" }, { no: "時尚交流會" }, { no: "藝術創作" }, { no: "美學人物交誼" },{ no: "藝術交流" }])
    const [f03Total, setF03Total] = useState(0)
    const [g03] = useState([{ no: "開幕" }, { no: "晚宴" }, { no: "媒體發表" }, { no: "首映會" }, { no: "服裝秀" }, { no: "表演活動" }, { no: "時尚演說" }, { no: "主題商品展演" }, { no:"電視節目演出" }, { no: "平面媒體拍攝" }, { no: "影片媒體拍攝" }, { no: "餘興場合主角" }])
    const [g03Total, setG03Total] = useState(0)
   


    const aCheck = (e) => {
        if (e === true) {
            setA03Total(a03Total + 1)
        } else {
            setA03Total(a03Total - 1)
        }

    }
    const bCheck = (e) => {
        if (e === true) {
            setB03Total(b03Total + 1)
        } else {
            setB03Total(b03Total - 1)
        }

    }
    const cCheck = (e) => {
        if (e === true) {
            setC03Total(c03Total + 1)
        } else {
            setC03Total(c03Total - 1)
        }
    }
    const dCheck = (e) => {
        if (e === true) {
            setD03Total(d03Total + 1)
        } else {
            setD03Total(d03Total - 1)
        }
    }
    const eCheck = (e) => {
        if (e === true) {
            setE03Total(e03Total + 1)
        } else {
            setE03Total(e03Total - 1)
        }
    }
    const fCheck = (e) => {
        if (e === true) {
            setF03Total(f03Total + 1)
        } else {
            setF03Total(f03Total - 1)
        }
    }

    const gCheck = (e) => {
        if (e === true) {
            setG03Total(g03Total + 1)
        } else {
            setG03Total(g03Total - 1)
        }
    }

        const save = () => {

            const a = sessionStorage.getItem('a')
            const aTotal =Number(a)+Number(a03Total)
            sessionStorage.setItem('a', aTotal);
            const b = sessionStorage.getItem('b')
            const bTotal =Number(b)+Number(b03Total)
            sessionStorage.setItem('b', bTotal);
            const c = sessionStorage.getItem('c')
            const cTotal =Number(c)+Number(c03Total)
            sessionStorage.setItem('c', cTotal);
            const d = sessionStorage.getItem('d')
            const dTotal =Number(d)+Number(d03Total)
            sessionStorage.setItem('d', dTotal);
            const e = sessionStorage.getItem('e')
            const eTotal =Number(e)+Number(e03Total)
            sessionStorage.setItem('e', eTotal);
            const f = sessionStorage.getItem('f')
            const fTotal =Number(f)+Number(f03Total)
            sessionStorage.setItem('f', fTotal);
            const g= sessionStorage.getItem('g')
            const gTotal =Number(g)+Number(g03Total)
            sessionStorage.setItem('g', gTotal);
            navigate('/quizcomplete')
        }


        useEffect(() => {
        
            if (!sessionStorage.getItem('verify')) {
                navigate('/')
            }
        })

        return (
            <>

                <div className="QuizMain">

                    <FormGroup className="card">
                        {a03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => aCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {b03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => bCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {c03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => cCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {d03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => dCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {e03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => eCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {f03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => fCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <FormGroup className="card">
                        {g03.map((item) => (
                            <FormControlLabel control={<Checkbox />} label={item.no} onChange={(e) => gCheck(e.target.checked)} />
                        ))}
                    </FormGroup>


                    <br />
                    <Button variant="contained" className="btn" onClick={save}>完成</Button>
                    <br/>


                </div>

            </>

        );
    }

    export default Quiz03