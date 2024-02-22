import React from "react";

function SearchModal(props) {
  return (
    <div>
      <ul className="border-black border-[2px]">
        {props.searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchModal;
