// SearchResultPage.js
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import OptionModal from "../components/OptionModal";
import { useSearchResult } from "../components/SearchResultContext";

const SearchResultPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setResults } = useSearchResult();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const items = [
  //   { id: 1, name: "Apple" },
  //   { id: 2, name: "Banana" },
  //   { id: 3, name: "Orange" },
  // ];

  // const display = items.filter((item) => {
  //   return item && item.name && item.name.toLowerCase().includes(searchQuery);
  // });

  const fakeApi = () => {
    const api = "https://fakestoreapi.com/products/";

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });

    // handleSearchClick();
  };

  const handleSearchClick = () => {
    const results = fakeApi.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    closeModal();
    setResults(results);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    openModal();
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div>
        <div className="flex w-[38vw] justify-between  border-black border-[3px]">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder=" search products"
            className=" w-[31vw] h-8 border-[1px]  border-slate-300 pl-8   outline-none rounded-md "
          />
          <CiSearch className="absolute left-3 top-3 text-xl " />

          <NavLink to="/result">
            <div className="w-[6vw] h-8 ">
              <button
                onClick={fakeApi}
                className=" bg-orange-400 w-[83px] h-8 rounded-[4px] text-l text-white shadow-md hover:opacity-75"
              >
                SEARCH
              </button>
            </div>
          </NavLink>

          {modalIsOpen && <OptionModal />}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
