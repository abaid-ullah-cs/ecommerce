import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";

function TableProduct() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [selectIndex, setSelectIndex] = useState(null);
  const [search, setSearch] = useState();
  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    price: "",
    stock: "in-stock",
    quantitiy: "",
  });

  const openDialog = (delName) => {
    setOpen(true);
    setSelectIndex(delName);
  };

  const handleEdit = (products) => {
    console.log(products);
    setNewProduct(products);
    setIsEdit(products.id);
    setIsDialogOpen(true);
  };
  return (
    <div>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Quantitty</TableCell>
              {/* <TableCell sx={{ fontWeight: "bolder" }}>action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.quantitiy}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                    sx={{ fontWeight: "bold", mr: 1 }}
                    onClick={() => {
                      openDialog(item.name);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "green", fontWeight: "bold" }}
                    onClick={() => handleEdit(item)}
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

export default TableProduct;
