// import React from 'react'
// import ProductCategory from './ProductCategory'
// import ProductRow from './ProductRow'

// function ProductTable({Product}) {
//   return (
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             <ProductCategory />
//             <ProductRow/>
//         </tbody>
//     </table>
//   )
// }

// export default ProductTable



import React from "react";

const ProductTable = () => {
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

  // Group by Category
  const grouped = Product.reduce((acc, item) => {
    if (!acc[item.Category]) {
      acc[item.Category] = [];
    }
    acc[item.Category].push(item);
    return acc;
  }, {});

  const handleClick = (item) => {
    console.log("Clicked Product:", item);
    alert(`You clicked on ${item.Name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Table</h2>
      {Object.keys(grouped).map((category) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <h3>{category}</h3>
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stocked</th>
              </tr>
            </thead>
            <tbody>
              {grouped[category].map((item) => (
                <tr
                  key={item.Name}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(item)}
                >
                  <td style={{ color: item.Stocked ? "black" : "red" }}>
                    {item.Name}
                  </td>
                  <td>{item.Price}</td>
                  <td>{item.Stocked ? "true" : "false"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
