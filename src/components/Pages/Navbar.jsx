import React, { useRef } from "react";

import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";

import { IoDiamondOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  const handleDiscover = () => {
    props.ref.focus();
    console.log("discover");
  };
  return (
    <div>
      <div className="mr-[200px]">
        <div className="fixed">
          <p className="text-green-300 shadow-md font-bold italic mt-8 ml-6  text-3xl ">
            Stream<span className="text-orange-500 ">Buzz</span>
          </p>
          <div>
            <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 rounded-md flex gap-5 items-center  text-center ml-4 mt-[30px]  focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
              <AiOutlineHome className="text-green-500" size={25} />
              Home
            </button>
          </div>
          <div>
            <button
              className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[10px]  focus:outline-none  focus:shadow-lg  focus:shadow-[green] "
              onClick={handleDiscover}
            >
              <AiOutlineCompass className="text-green-500" size={25} />
              Discover
            </button>
          </div>
          <div>
            <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[10px]  focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
              <FaUser className="text-green-500" size={25} />
              Followers
            </button>
          </div>
          <div>
            <button className="text-white text-xl  pl-[15px] pr-[30px] py-3 flex gap-5 items-center  text-center ml-4 mt-[10px]  focus:outline-none  focus:shadow-lg  focus:shadow-[green]  ">
              <CiVideoOn className="text-green-500" size={25} />
              Your Content
            </button>
          </div>
          <div>
            <button className="text-white text-xl  pl-[15px] pr-[70px] py-3 flex gap-5 items-center  text-center ml-4 mt-[10px]  focus:outline-none  focus:shadow-lg  focus:shadow-[green] ">
              <IoDiamondOutline className="text-green-500" size={25} />
              Earnings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
