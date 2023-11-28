import React from "react";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center">
        <CiSearch className="text-white bg-white h-10 w-7 px-10 py-10" />
        <input placeholder="Search..." className="text-center"></input>
      </div>
    </div>
  );
};

export default SearchBar;
