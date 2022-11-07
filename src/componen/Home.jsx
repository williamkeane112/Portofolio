import React from "react";
import HeroImage from "../aset/header-img.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="max-h-screen-xl w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl font-bold  font-inter2 mt-44 bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">I'm a Junior Forn End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md font-inter2">
             ipsum dolor, sit amet consectetur adipisicing elit. Ea suscipit tempore, harum voluptates blanditiis totam. 
          </p>

          <div>
            {" "}
            <div>
              <Link to="skill" smooth duration={500} className="group mt-28 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                <span className="font-inter2 uppercase">my skill</span>
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Home;
