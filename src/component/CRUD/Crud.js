import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import TabelROW from "./TabelROW";
import { Link } from "react-router-dom";

import "./style.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Crud = ({ setCurrentId, data, name }) => {
  const classes = useStyles();

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row._id}>
              <TabelROW setCurrentId={setCurrentId} data={row} name={name} />
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <Button variant="outlined" component={Link} to="/form">
                CREATE
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Crud;
