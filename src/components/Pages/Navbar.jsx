import React from "react";

import SearchBar from "./SearchBar";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";

import { IoDiamondOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <p className="text-white text-xl">Test</p>
      <div>
        <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 rounded-md flex gap-5 items-center  text-center ml-4 mt-[80px] mr-[120px] focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
          <AiOutlineHome className="text-green-500" size={25} />
          Home
        </button>
      </div>
      <div>
        <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[30px] mr-[120px] focus:outline-none  focus:shadow-lg  focus:shadow-[green] ">
          <AiOutlineCompass className="text-green-500" size={25} />
          Discover
        </button>
      </div>
      <div>
        <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[30px] mr-[120px] focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
          <FaUser className="text-green-500" size={25} />
          Followers
        </button>
      </div>
      <div>
        <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[30px] mr-[120px] focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
          <CiVideoOn className="text-green-500" size={25} />
          Your Content
        </button>
      </div>
      <div>
        <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[30px] mr-[120px] focus:outline-none  focus:shadow-lg  focus:shadow-[green] ">
          <IoDiamondOutline className="text-green-500" size={25} />
          Earnings
        </button>
      </div>
    </div>
  );
};

export default Navbar;
