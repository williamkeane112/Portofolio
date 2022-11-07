import React from "react";
import img1 from "../aset/foodweb.png";
const project = () => {
  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full p-4">
        <div className="mt-32">
          <span className="border-b-4 border-gray-500 inline text-4xl font-bold uppercase bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">project</span>
        </div>
        <div className="grid ">
          <div className="mt-10 font-inter2 mx-auto shadow-md shadow-gray-600 rounded-lg">
            <span className="bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 text-2xl">food web with bootstrap</span>
            <img src={img1} alt="foodweb" className="w-64  rounded-md duration-200 hover:scale-105" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6  m-4 duration-200 hover:scale-105">SEE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
