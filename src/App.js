import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Quiz01 from "./pages/Quiz/Quiz01"
import Quiz02 from "./pages/Quiz/Quiz02"
import Quiz03 from "./pages/Quiz/Quiz03"
import QuizCompleted from "./pages/QuizCompleted/QuizCompleted"

function App() {
  return (
    <>

      <Router>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/quiz01' element={<Quiz01 />} />
          <Route path='/quiz02' element={<Quiz02 />} />
          <Route path='/quiz03' element={<Quiz03 />} />
          <Route path='/quizcomplete' element={<QuizCompleted />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
