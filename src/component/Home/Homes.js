import React,{useEffect} from 'react';
import Home from './Home';

import {useDispatch,useSelector} from 'react-redux'

import './style.css' 

function Homes() {
    const dispatch = useDispatch();
    const studentCount = useSelector(state=>state.studentReducer.studentCount);
    const courseCount = useSelector(state=>state.courseReducer.courseCount);
    const teacherCount = useSelector(state=>state.teacherReducer.teacherCount);

    console.log(studentCount,courseCount,teacherCount);

    return (
        <div className="main--container">
            <div className="box">
                <Home name={"Students"} student={studentCount}/>
                <Home name={"courses"} student={courseCount}/>
                <Home name={"teachers"} student={teacherCount}/>
            </div>
        </div>
    )
}

export default Homes
