import {
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Container,
  Box,
  Stack,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
const TodosF = () => {
  const [products, setProducts] = useState([]); /// tackle multiple
  const [isEdit, setIsEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [newProduct, setNewProduct] = useState({
    /// tackle different
    category: "",
    name: "",
    price: "",
    stock: true,
    quantity: "",
  });

  //   const [title, setTitle] = useState(""); tackle only one
  //   const [checked, setChecked] = useState(false);
  console.log(isEdit);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1st
    //ttiel string, addd array, multple show
    // array.push(), array.unshift()
    // console.log(title);
    // setProducts([title, ...products]);

    // 2nd

    if (isEdit) {
      // let getProduct = products.find((item, index) => index === isEdit);
      setProducts((prev) =>
        prev.map((item, index) =>
          item.id === isEdit
            ? {
                category: newProduct.category,
                name: newProduct.name,
                price: newProduct.price,
                stock: newProduct.stock,
                quantity: newProduct.quantity,
                id: isEdit,
              }
            : {
                category: item.category,
                name: item.name,
                price: item.price,
                stock: item.stock,
                quantity: item.quantity,
                id: item.id,
              }
        )
      );
      setIsEdit(null);
    } else {
      setProducts((prev, index) => [
        ...prev,
        {
          id: Date.now(),
          category: newProduct.category,
          name: newProduct.name,
          price: newProduct.price,
          stock: newProduct.stock,
          quantity: newProduct.quantity,
        },
      ]);
    }
    setNewProduct({
      /// tackle different
      category: "",
      name: "",
      price: "",
      stock: true,
      quantity: "",
    });
  };

  //map arrayLoop(products)
  // 1st
  // products.map(()=>{return()})

  const handleDelete = (indexToRemove) => {
    console.log("Deleted item ", products[indexToRemove]);
    setProducts((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleEdit = (item, itemId) => {
    console.log("Edit item ", item);
    setNewProduct(item);
    setIsEdit(itemId);
  };
  const handleSearch = () => {
    setProducts((prev) =>
      prev.filter((item) => item.name.toLowerCase() === search.toLowerCase())
    );
  };
  return (
    <Container sx={{ py: 4 }}>
      <h1>Ecomerce Products</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, category: e.target.value }))
          }
          fullWidth
          margin="normal"
          label={"Category"}
        />
        <TextField
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
          fullWidth
          margin="normal"
          label={"Name"}
        />
        <TextField
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: e.target.value }))
          }
          fullWidth
          margin="normal"
          label={"Price"}
        />

        <TextField
          value={newProduct.quantity}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, quantity: e.target.value }))
          }
          fullWidth
          margin="normal"
          label={"quantity"}
        />

        <Checkbox
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, stock: e.target.value }))
          }
        />
        <Button
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </form>
      <TableContainer component={Container}>
        <Stack direction={"row"} gap={5}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            margin="normal"
            label={"Search"}
          />
          <Button
            variant="contained"
            sx={{ mr: 1 }}
            onClick={() => handleSearch(search)}
            endIcon={<Search />}
          >
            Search
          </Button>
        </Stack>
        <Table>
          <thead>
            <tr>
              <TableCell>{"Name"}</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <TableRow>
                <TableCell>{item.name} </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.stock ? "in-stock" : "Out"}</TableCell>
                <TableCell>{item.quantity}</TableCell>

                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ mr: 1 }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(item, item.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      {/* <Counter /> */}
    </Container>
  );
};

export default TodosF;
