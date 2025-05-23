import {
  Button,
  Container,
  TableBody,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";


function SearchBar() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    price: "",
    stocked: "in-stock",
    quantity: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, newProduct]);
    setNewProduct({
      category: "",
      name: "",
      price: "",
      stocked: "in-stock",
      quantity: "",
    });
  };
  // const handelDelete = (index) => {
  //   setProducts((prev) => prev.filter((i) => i !== index));
  // };
  const handleDelete = (indexToRemove) => {
    console.log("Deleted item ", products[indexToRemove]);
    setProducts((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  // const handleEdit=(index) => {
  //   console.log('Edit item',products [index]);
  // };
 

  return (
    <div>
       {/* <Dialog/> */}
      <Container sx={{ py: 4 }}>
        <h1>Ecommerce Product</h1>
        <form onSubmit={handelSubmit}>
          <TextField
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
            margin="normal"
            label={"Name"}
            color="secondary"
          />
          <TextField
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, category: e.target.value }))
            }
            fullWidth
            margin="normal"
            label={"category"}
            color="secondary"
          />
          <TextField
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: e.target.value }))
            }
            fullWidth
            margin="normal"
            label={"Price"}
            color="secondary"
          />
          <TextField
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, quantity: e.target.value }))
            }
            fullWidth
            margin="normal"
            label={"quantity"}
            color="secondary"
          />
            <Checkbox
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, stocked: e.target.value }))
              }
              color="secondary"
            />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100px", bgcolor: "purple", fontWeight: "bolder" }}
          >
            Add
          </Button>
        </form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.stocked}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                    sx={{ mr: 1, fontWeight: "bolder" }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "purple", fontWeight: "bolder" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}

export default SearchBar;
