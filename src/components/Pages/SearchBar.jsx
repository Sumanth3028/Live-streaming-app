import React from "react";

import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";

const SearchBar = () => {
  return (
    <div className="pt-5  flex gap-x-[300px] pl-[300px]  justify-around text-white ">
      <div class="relative  ">
        <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400  text-center">
          <CiSearch size={21} />
        </div>

        <input
          type="text"
          class=" rounded-xl px-9 py-3 focus:outline-none focus:border-blue-500 transition duration-300 bg-[#1c1c1c] pl-[30%]  "
          placeholder="Search . . . ."
        />
      </div>
      <div className="py-2">
        <div className="flex gap-x-5">
          <button className="bg-[#302f2f] w-[190px] flex items-center py-2 rounded-xl justify-around font-semibold text-lg #47b76e shadow-lg shadow-[#47b76e] ">
            <p>Start Streaming</p>
            <IoVideocamOutline size={21} />
          </button>
          <button className="bg-[#302f2f] w-[50px] flex items-center py-2 rounded-xl justify-around font-bold shadow-lg shadow-[#47b76e]">
            <FaRegBell size={21} />
          </button>
          <button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
