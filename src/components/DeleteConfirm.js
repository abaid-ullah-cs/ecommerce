import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
function DeleteConfirm() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectIndex, setSelectIndex] = useState(null);

  const handleDelete = () => {
    setProducts((prev) => prev.filter((item) => item.name !== selectIndex));
    setSelectIndex(null);
    closeDialog(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle variant="h4" sx={{ fontWeight: "bold" }}>
          Delete Product
        </DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this item?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary" variant="contained">
            Close
          </Button>
          <Button
            onClick={() => handleDelete()}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteConfirm;
