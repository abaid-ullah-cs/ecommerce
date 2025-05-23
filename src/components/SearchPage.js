import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
function SearchPage() {
    const [product,setProduct] = useState([]);
  const [search, setSearch] = useState();
  const [openDialog, setOpenDialog] = useState();
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setSearch();
  };

  const handleSearch =() => {
      
  };

  return (
    <div>
      <Button variant="contained" sx={{margin:2}} onClick={handleClickOpen}>
        Search Product
      </Button>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Searching Product</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            label="Search"
            margin="normal"
          />
          <Button variant="contained"  sx={{ mr: 1, mt: 2 }} onClick={() => handleSearch(search)}>
            Search
          </Button>
          <Button variant="contained" onClick={handleClose}  sx={{ mt: 2 }}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchPage;
