import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHelo = () => setNav(!nav);

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
    <div className="flex   bg-black   items-center justify-between w-full fixed h-20 px-4 text-white">
      <div className="font-bold text-2xl ml-2">
        <h1 className="bg-gradient-to-l text-transparent bg-clip-text from-sky-600 font-inter2 to-teal-500">WILLIAM.K</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li key={id} className="font-inter2 cursor-pointer capitalize font-medium  text-gray-400 hover:scale-105 duration-300 ml-10 bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={navHelo} className="cursor-pointer pr-4 z-10 text-slate-400 hover:scale-105 duration-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/*  */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0
       left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600  my-5 md:hidden"
        >
            {links.map(({ id, link }) => (
          <li key={id} className="font-inter2 cursor-pointer capitalize font-medium mt-4 text-gray-400 hover:scale-105 duration-300 ml-10 bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 ">
            <Link to={link} 
             onClick={() => setNav(!nav)}smooth duration={500}>
              {link}
             
            </Link>
          </li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
