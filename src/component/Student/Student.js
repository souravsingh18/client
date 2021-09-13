import React,{useEffect} from 'react'
import Crud from '../CRUD/Crud'

import {useDispatch,useSelector} from 'react-redux'

import './style.css'

function Student() {
    const dispatch = useDispatch();
    const result = useSelector(state=>state.studentReducer.students);

    // console.log(result);
    
    return (
        <div className="main--container">
            <Crud students={result}/>
        </div>
    )
}

export default Student
