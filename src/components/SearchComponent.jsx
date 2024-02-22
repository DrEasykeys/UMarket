import React, { useState } from "react";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //   const [modalIsOpen, setModalIsOpen] = useState(false);

  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    // Add more items as needed
  ];
  const api = "https://fakestoreapi.com/products/";
  fetch;
  //   function openModal() {
  //     setModalIsOpen(true);
  //   }

  //   function closeModal() {
  //     setModalIsOpen(false);
  //   }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    // Case-insensitive search using includes and filter
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter your search"
      />
      <button onClick={handleSearchClick}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
