import logo from "./logo.svg";
import "./App.css";
import Filterable from "./components/Filterable";
import TodosF from "./components/Todos";
import SearchBar from "./components/SearchBar";
import Dialog from "./components/DialogPage";
import SearchPage from "./components/SearchPage";
import TableProduct from "./components/TableProduct";
import ProductDialog from "./components/ProductDialog";
import DeleteConfirm from "./components/DeleteConfirm";

// const Product = [
//   {
//     Category: "Fruits",
//     Price: "$100",
//     Stocked: true,
//     Name: "Apple",
//   },
//   {
//     Category: "Fruits",
//     Price: "$100",
//     Stocked: true,
//     Name: "Mango",
//   },
//   {
//     Category: "Fruits",
//     Price: "$100",
//     Stocked: false,
//     Name: "Orange",
//   },
//   {
//     Category: "Vegetables",
//     Price: "$100",
//     Stocked: true,
//     Name: "Carrot",
//   },
//   {
//     Category: "Vegetables",
//     Price: "$100",
//     Stocked: false,
//     Name: "Broccoli",
//   },
//   {
//     Category: "Vegetables",
//     Price: "$100",
//     Stocked: true,
//     Name: "Bell Pepper",
//   },
// ];

// const java=new Set(Product);
// console.log(Array.from(java));

function App() {
  return (
    <>
      {/* <Filterable /> */}
      {/* <SearchBar/> */}
      {/* <Dialog/> */}
      {/* <SearchPage/> */}
      {/* <TableProduct/> */}
      <ProductDialog/>
      <DeleteConfirm/>
    
      
      {/* <TodosF /> */}
    </>
  );
}

export default App;
