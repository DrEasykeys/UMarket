import { useSearchResult } from "../components/SearchResultContext";
import React, { useState } from "react";
import AllProducts from "../pages/AllProducts2";

const ResultPage = () => {
  // const { searchResults } = useSearchResult();
  // const [products, setProducts] = useState([]);

  // const main = {
  //   display: "flex",
  //   alignItems: "center",
  //   height: "100vh",
  //   justifyContent: "space-around",
  //   flexWrap: "wrap",
  //   marginBottom: "20px",
  //   border: "3px solid black",
  // };

  // const div = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   height: "87vh",
  //   padding: "10px 0px",
  //   width: "20vw",
  //   border: "1px solid black",
  // };

  // const img = {
  //   height: "250px",
  //   padding: "10px 0px",
  //   width: "250px",
  //   // border: "1px solid black",
  // };

  return (
    <div>
      <AllProducts />
      {/* //     <div id="main" style={main}>
  //       {searchResults.map((results) => (
  //         <div key={results.id} style={div}>
  //           <img src={results.image} alt="Product" style={img} />
  //           <strong>{results.price}</strong>
  //           <span className="text-xs ">{results.description}</span>
  //         </div>
        ))} */}
      {/* </div> */}
    </div>
  );

  // -----------------------------------
  // <div className="h-[550vh] border-black border-[4px] ">
  //   <h2>Search Results</h2>
  //   <ul className="h-[550vh] border-black border-[4px] ">
  //     {searchResults.map((result) => (
  //       <li key={result.id}>{result.name}</li>
  //     ))}
  //   </ul>
  // </div>
};

export default ResultPage;
