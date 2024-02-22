import React, { useState } from "react";

const ItemLists = (searchResults) => {
  <div>
    <ul className="h-[80vh] w-[100%] absolute top-24 right-20 border-black border-[3px] ">
      {searchResults.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  </div>;
};

export default ItemLists;
