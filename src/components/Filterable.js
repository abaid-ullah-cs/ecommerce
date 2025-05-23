import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, TextField, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
//array[ ] for multiple,   object {} for different, string|number|boolean for single  variable tackle
const Product = [
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: true,
    Name: "Apple",
    Quantity: "15/Box",
  },
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: true,
    Name: "Mango",
    Quantity: "9/Box",
  },
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: false,
    Name: "Orange",
    Quantity: "0/Box",
  },
];

const Veg = [
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: true,
    Name: "Carrot",
    Quantity: "23/Box",
  },
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: false,
    Name: "Broccoli",
    Quantity: "0/Box",
  },
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: true,
    Name: "Bell Pepper",
    Quantity: "17/Box",
  },
];

const Flowers = [
  {
    Category: "Flowers",
    Price: "$100",
    Stocked: true,
    Name: "Sunflower",
    Quantity: "23/Flower pot",
  },
  {
    Category: "Flowers",
    Price: "$100",
    Stocked: false,
    Name: "lilies",
    Quantity: "0/Flower pot",
  },
  {
    Category: "Flowers",
    Price: "$100",
    Stocked: true,
    Name: "carnations",
    Quantity: "17/Flower pot",
  },
  {
    Category: "Flowers",
    Price: "$100",
    Stocked: true,
    Name: "tulips",
    Quantity: "13/Flower pot",
  },
];

function Filterable() {
  const [products, setProducts] = useState(Product);
  return (
    <div>
      <Container  sx={{ py: 4 }}> 
     
        {/* <SearchBar setProducts={setProducts} /> */}
        <TableContainer component={Paper}>
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            Fruits
          </Typography>
          <Table>
            <thead>
              <tr>
                <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
              </tr>
            </thead>
            <tbody>
              {products.map((Product) => (
                <TableRow>
                  <TableCell>{Product.Name}</TableCell>
                  <TableCell>{Product.Price}</TableCell>
                  <TableCell
                    style={{ color: Product.Stocked ? "black" : "red" }}
                  >
                    {Product.Stocked ? "true" : "false"}
                  </TableCell>
                  <TableCell>{Product.Quantity}</TableCell>
                </TableRow>
              ))}
            </tbody>
            <Typography variant="h5" sx={{ fontWeight: "bolder", mt: "15px" }}>
              Vegetables
            </Typography>
            <thead>
              <tr>
                <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
              </tr>
            </thead>
            <tbody>
              {Veg.map((Veg) => (
                <TableRow>
                  <TableCell>{Veg.Name}</TableCell>
                  <TableCell>{Veg.Price}</TableCell>
                  <TableCell style={{ color: Veg.Stocked ? "black" : "red" }}>
                    {Veg.Stocked ? "true" : "false"}
                  </TableCell>
                  <TableCell>{Veg.Quantity}</TableCell>
                </TableRow>
              ))}
            </tbody>
            <Typography variant="h5" sx={{ fontWeight: "bolder", mt: "15px" }}>
              Flowers
            </Typography>
            <thead>
              <tr>
                <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Stocked</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
              </tr>
            </thead>
            <tbody>
              {Flowers.map((Flowers) => (
                <TableRow>
                  <TableCell>{Flowers.Name}</TableCell>
                  <TableCell>{Flowers.Price}</TableCell>
                  <TableCell
                    style={{ color: Flowers.Stocked ? "black" : "red" }}
                  >
                    {Flowers.Stocked ? "true" : "false"}
                  </TableCell>
                  <TableCell>{Flowers.Quantity}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
     
      </Container>
    </div>
  );
}

export default Filterable;
