import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

function ProductDialog() {
  const [products, setProducts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [search, setSearch] = useState();
  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    price: "",
    stock: "in-stock",
    quantitiy: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit, newProduct);
    if (isEdit !== null) {
      setProducts((prev) =>
        prev.map((products) => (products.id === isEdit ? newProduct : products))
      );
    } else {
      setProducts((prev) => [...prev, newProduct]);
    }
    setNewProduct({
      category: "",
      name: "",
      price: "",
      stock: "in-stock",
      quantitiy: "",
    });
    setIsEdit(null);
    setIsDialogOpen(false);
  };

  const handleOpen = () => {
    setIsDialogOpen(true);
  };
  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleSearch = () => {
    setProducts((prev) =>
      prev.filter((item) => item.name.toLowerCase() === search.toLowerCase())
    );
    setSearch();
  };
  return (
    <Container>
      <div>
        <Button
          variant="contained"
          endIcon={<AddCircleIcon />}
          sx={{
            bgcolor: "black",
            fontWeight: "bold",
            margin: "15px",
            float: "right",
          }}
          onClick={handleOpen}
        >
          Add Product
        </Button>

        <TextField
          sx={{ margin: "15px" }}
          placeholder="Serach"
          label="Search"
          // margin="normal"
          size="small"
          endIcon={<SearchIcon />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleSearch(search)}
          sx={{ mt: "15px", bgcolor: "green" }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
        <Dialog open={isDialogOpen} onClose={handleClose}>
          <DialogTitle variant="h4" sx={{ fontWeight: "bolder" }}>
            Add Product
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
                label="Category"
                fullWidth
                margin="normal"
                color="success"
                select
              >
                <MenuItem value="fruits">Fruits</MenuItem>
                <MenuItem value="vageables">Vegetables</MenuItem>
                <MenuItem value="flowers">Flowers</MenuItem>
              </TextField>
              <TextField
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct((prev) => ({ ...prev, name: e.target.value }))
                }
                label="Name"
                fullWidth
                margin="normal"
                color="success"
              />
              <TextField value={newProduct.id} type="hidden" />
              <TextField
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
                label="Price"
                fullWidth
                margin="normal"
                color="success"
              />
              <TextField
                value={newProduct.quantitiy}
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    quantitiy: e.target.value,
                  }))
                }
                label="Quantitty"
                fullWidth
                margin="normal"
                color="success"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error" variant="contained">
                Close
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: "green" }}
                type="submit"
              >
                Add Item
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </Container>
  );
}

export default ProductDialog;
