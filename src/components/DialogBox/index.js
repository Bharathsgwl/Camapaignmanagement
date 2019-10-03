import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import {Dialog,TextField,Button} from "@material-ui/core/";
import { CSVLink, CSVDownload } from "react-csv";

const DialogBox=({open,toggleDiolog})=>{

  console.log(open,"dialog");
  return(
    <Dialog
              onClose={toggleDiolog}
                aria-labelledby="simple-dialog-title"
                open={open}
              >
                <DialogTitle id="simple-dialog-title">Download CS</DialogTitle>
                <TextField
                  id="outlined-name" type="number"
                  label="start Data"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"type="number"
                  label="End Data"
                  margin="normal"
                  variant="outlined"
                />

              </Dialog>
  );
}
export default DialogBox;
