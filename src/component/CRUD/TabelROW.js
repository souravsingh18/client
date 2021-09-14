import React from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableCell from "@material-ui/core/TableCell";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteStudent } from "../../action/student";

function TabelROW({ setCurrentId, data, name }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = () => {
    setCurrentId(data._id);
  };

  const handleDelete = () => {
    dispatch(deleteStudent(data._id));
  };

  return (
    <>
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>
      <TableCell component="th" scope="row" onClick={handleEdit}>
        <EditIcon />
      </TableCell>
      <TableCell component="th" scope="row">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </>
  );
}

export default TabelROW;
