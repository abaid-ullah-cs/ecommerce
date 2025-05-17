import logo from "./logo.svg";
import "./App.css";
import Filterable from "./components/Filterable";

const Product = [
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: true,
    Name: "Apple",
  },
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: true,
    Name: "Mango",
  },
  {
    Category: "Fruits",
    Price: "$100",
    Stocked: false,
    Name: "Orange",
  },
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: true,
    Name: "Carrot",
  },
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: false,
    Name: "Broccoli",
  },
  {
    Category: "Vegetables",
    Price: "$100",
    Stocked: true,
    Name: "Bell Pepper",
  },
];




// const java=new Set(Product);
// console.log(Array.from(java));



function App() {
  return (
    <>
      <Filterable  Product={Product}/>
    </>
  );
}

export default App;
