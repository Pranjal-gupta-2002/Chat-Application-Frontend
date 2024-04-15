import React from "react";
import { Dialog, DialogTitle, DialogContent,Button,DialogActions } from "@mui/material";

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this Group</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} >No</Button>
        <Button onClick={deleteHandler} color="error">Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
