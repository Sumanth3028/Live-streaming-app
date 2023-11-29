import React, { useRef } from "react";
import Navbar from "./Pages/Navbar";
import SearchBar from "./Pages/SearchBar";

const MainPage = () => {
  const ref = useRef();
  return (
    <div className="flex">
      <div>
        <Navbar ref={ref} />
      </div>
      <div className="min-h-screen border ml-8 w-0 opacity-20 "></div>
      <div>
        <SearchBar ref={ref} />
      </div>
    </div>
  );
};

export default MainPage;
