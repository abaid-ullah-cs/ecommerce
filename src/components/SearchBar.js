import React from "react";

function SearchBar({ search, check, setSearch, setCheck }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <input
          id="unique"
          type="checkbox"
          value={check}
          onChange={(e) => setCheck(e.target.value)}
        />
        <label htmlFor="unique">Show only inStock</label>
      </div>
    </div>
  );
};


export default SearchBar;
