import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function EditDialog(props) {
  const [editTextfieldValue, seteditTextfieldValue] = useState(
    props.data.value
  );
  const onEditTextFieldChange = (event) => {
    seteditTextfieldValue(event.target.value);
  };

  const resetState = () => {
    seteditTextfieldValue("");
  };

  const handleClose = () => {
    resetState();
    props.onClose();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Todo"
          fullWidth
          variant="standard"
          value={editTextfieldValue}
          onChange={onEditTextFieldChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          disabled={!editTextfieldValue}
          onClick={() => {
            resetState();
            props.onSave(editTextfieldValue);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// class EditDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editTextfieldValue: props.data.value,
//     };
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps.data !== this.props.data) {
//   //     this.setState({ editTextfieldValue: this.props.data?.value || "" });
//   //   }
//   // }

//   onEditTextFieldChange = (event) => {
//     this.setState({ editTextfieldValue: event.target.value });
//   };

//   resetState = () => {
//     this.setState({ editTextfieldValue: "" });
//   };

//   handleClose = () => {
//     this.resetState();
//     this.props.onClose();
//   };

//   render() {
//     const { onSave } = this.props;
//     return (
//       <Dialog open={true} onClose={this.handleClose}>
//         <DialogTitle>Edit</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Todo"
//             fullWidth
//             variant="standard"
//             value={this.state.editTextfieldValue}
//             onChange={this.onEditTextFieldChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.handleClose}>Cancel</Button>
//           <Button
//             disabled={!this.state.editTextfieldValue}
//             onClick={() => {
//               this.resetState();
//               onSave(this.state.editTextfieldValue);
//             }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   }
// }

export default EditDialog;
