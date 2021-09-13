import React from 'react'
import Crud from '../CRUD/Crud'

import {useSelector} from 'react-redux'

import './style.css'

function Teachers() {
    const result = useSelector(state=>state.teacherReducer.teachers);

    return (
        <div className="main--container">
            <Crud data={result} name={"TeachersName"}/>
        </div>
    )
}

export default Teachers;