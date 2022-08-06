import React from "react";
import "./search.css";

function Search(props) {
  const { placeholder } = props;
  return (
    <>
      <div className="search">
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
}

export default Search;
