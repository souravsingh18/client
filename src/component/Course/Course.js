import React from 'react'
import Crud from '../CRUD/Crud'

import {useSelector} from 'react-redux'

import './style.css'

function Courses() {
    const result = useSelector(state=>state.courseReducer.courses);

    return (
        <div className="main--container">
            <Crud data={result} name={"CourseName"}/>
        </div>
    )
}

export default Courses;