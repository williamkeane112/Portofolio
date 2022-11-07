import React from "react";
import wa from "../aset/wa.png";
import gmail from "../aset/gmail.png";
import { Link } from "react-scroll";
const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "skill",
    },
    {
      id: 5,
      link: "contanct",
    },
  ];
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4  justify-center w-full h-full">
        <div className="">
          <span className="uppercase text-4xl font-bold bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">WILLIAM.K</span>
        </div>
        <div className="mt-10 "> 
        <span className="font-inter2 text-2xl
        ">LINK</span>
        {links.map(({ id, link }) => (
          <li key={id} className="font-inter2 cursor-pointer capitalize font-medium mt-4 text-gray-400 hover:scale-105 duration-300 ml-10 bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 ">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        </div>
       
        <div>
          <div className="text-2xl font-bold mt-16 flex items-center">
            <img src={wa} alt="" className=" float-left w-20 items-center" />
            <p className="">+6281282059789</p>
          </div>
          <div className="text-2xl font-bold  font-inter2 flex items-center">
            <img src={gmail} alt="" className=" float-left w-20 items-center" />
            <p className="">williamkeanekeane@gmail.com</p>
          </div>
        </div>
        <div className="bg-black mt-3 flex">
          <h1 className=" text-2xl mx-auto font-inter2">Copyright ©By William Keane 2022 </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
