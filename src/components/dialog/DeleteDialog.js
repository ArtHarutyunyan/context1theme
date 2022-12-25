import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

class DeleteDialog extends React.Component {
  render() {
    const { onRemove, onClose } = this.props;
    return (
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <span>{`are you sure you want to delete ${this.props.date.value}`}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onRemove}>Remove</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteDialog;
