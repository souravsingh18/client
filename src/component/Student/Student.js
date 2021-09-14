import React, { useEffect, useState } from "react";
import Crud from "../CRUD/Crud";

import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";

import { getStudent } from "../../action/student";
// import {getCourse} from '../../action/course'
// import {getTeacher} from '../../action/teacher'

import "./style.css";

function Student() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  const result = useSelector((state) => state.studentReducer.students);

  useEffect(() => {
    if (currentId) {
      dispatch(getStudent(currentId));
    }
  }, [currentId]);

  return (
    <div className="main--container">
      <Crud setCurrentId={setCurrentId} data={result} name={"StudentName"} />
      {/* <Form
        currentId={currentId}
        setCurrentId={setCurrentId}
        name={"StudentName"}
      /> */}
    </div>
  );
}

export default Student;
