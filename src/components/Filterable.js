import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function Filterable({Product}) {
  const [search, setSearch] = React.useState("");
  const [StockOnly, setStockOnly] = React.useState(false);

  return (
    <div>
      <SearchBar
        search={search}
        StockOnly={StockOnly}
        setSearch={setSearch}
        setStockOnly={setStockOnly}
      />
      <ProductTable
        search={search}
        check={StockOnly}
        setSearch={setSearch}
        setStockOnly={setStockOnly}
        Product={Product}
      />
    </div>
  );
}

export default Filterable;
