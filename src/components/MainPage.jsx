import React from "react";
import Navbar from "./Pages/Navbar";
import SearchBar from "./Pages/SearchBar";

const MainPage = () => {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div className="h-screen border w-0 bg-yellow-300"></div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPage;
