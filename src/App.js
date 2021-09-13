import React,{useEffect} from 'react'
import './style.css'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Home from './component/Home/Homes'
import Student from './component/Student/Student'
import Course from './component/Course/Course'
import Teacher from './component/Teacher/Teacher'
import NavBar from './component/NavBar/NavBar'

import {getAll,getStudentCounts} from './action/student'
import {getCoursesCounts} from './action/course'
import {getTeachersCounts} from './action/teacher'

import {useDispatch,useSelector} from 'react-redux'
function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll());
        dispatch(getStudentCounts());
        dispatch(getTeachersCounts());
        dispatch(getCoursesCounts());
    },[])

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/student" exact component={Student}/>
                <Route path="/course" exact component={Course}/>
                <Route path="/teacher" exact component={Teacher}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
