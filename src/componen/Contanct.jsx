import React from "react";
import img2 from "../aset/img/contact-img.svg";
const Contanct = () => {
  return (
    <div name="contanct" className="bg-gradient-to-b from-black to-gray-800 w-full ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8 mt-32">
          <span className="border-b-4 border-gray-500 inline text-4xl font-bold uppercase bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 ">Contanct</span>
          <div className="flex flex-wrap mt-10 ">
            <img src={img2} alt="icon" className="w-96 lg:w-1/2 animate-bounce  " />
            <div className=" max-w-lg border border-slate-400 my-10 rounded-xl mx-auto p-5 shadow-md font-serif lg:w-1/2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  className="w-full rounded-xl px-4 py-2 font-inter2  bg-transparent border-2 roun bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 focus:outline-none text-xl"
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-3 w-full rounded-xl px-4 py-2 font-inter2  bg-transparent border-2 roun bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 focus:outline-none text-xl"
                />
                <textarea 
                name="message" 
                placeholder="Enter your message" 
                rows="10" 
                className="p-2 mt-3 w-full bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500 focus:outline-none text-xl font-inter2 border-2 rounded-xl "></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
