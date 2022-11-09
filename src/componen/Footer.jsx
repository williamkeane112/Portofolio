import React from "react";
import wa from "../aset/wa.png";
import gmail from "../aset/gmail.png";
import { Link } from "react-scroll";
const Footer = () => {
  
  return (
    <div className="w-full h-30 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="p-4  max-w-full ">
      <div className="">
          
          <div className="text-xl font-bold mt-16 flex items-center">
            <img src={wa} alt="" className=" float-left w-20 items-center" />
            <p className="">+6281282059789</p>
          </div>
          <div className="text-xl font-bold  font-inter2 flex items-center">
            <img src={gmail} alt="" className=" float-left w-20 items-center" />
            <p className="">williamkeanekeane@gmail.com</p>
          </div>
          <div className="bg-black  flex max-w-full">
          <h1 className=" text-2xl mx-auto text-center w-full  font-inter2">Copyright ©By William Keane 2022 </h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
