import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

import { useDispatch, useSelector } from "react-redux";
import ChipInput from "material-ui-chip-input";
import Button from "@material-ui/core/Button";

import "./style.css";

function Form({ currentId, setCurrentId }) {
  const [form, setForm] = useState({
    name: "",
    courses: [],
  });

  const result = useSelector((state) =>
    currentId
      ? state.studentReducer.students.find((el) => el === currentId)
      : null
  );

  console.log(result);

  const handleAddChip = (course) => {
    setForm({ ...form, courses: [...form.courses, course] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setForm({
      ...form,
      courses: form.courses.filter((course) => course !== chipToDelete),
    });
  };

  return (
    <div className="main--container">
      <form className="form--container" autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={form.name}
          onChange={() => {}}
        />
        <div style={{ padding: "5px 0", width: "94%" }}>
          <ChipInput
            name="courses"
            variant="outlined"
            label="Courses"
            fullWidth
            value={form.courses}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <Button variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
