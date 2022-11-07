import React from "react";
import ig from "../aset/ig-2.png";
import fb from "../aset/fb-2.png";
import tw from "../aset/tw.png";
import tt from "../aset/tt.png";
const About = () => {
 

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:flex-row">
        <div className="pb-8 mt-32 ">
          <h1 className="uppercase text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">about</h1>
          <div className="flex flex-wrap">
            <div className="mt-20 w-full lg:w-1/2">
              <span className="font-inter2 text-1xl border-b-4 border-slate-600">ABOUT ME</span>
              <p className="mt-10 font-inter2 text-slate-400  mr-10">Helo everyone my name is William, im 15 Age old and I'm school in SMK Cinta kasih Tzu Chi</p>
            </div>
            <div className="mt-20 w-full lg:w-1/2 ">
              <span className="font-inter2 text-1xl border-b-4 border-slate-600 uppercase">come be friends</span>
              <p className="mt-10 font-inter2 text-slate-400 mr-10">because I'm friendly so let's be friends on</p>
              <div className="border w-10 rounded-full mt-3 flex">
              <img src={ig} alt="ig" className="" />
              <img src={fb} alt="ig" className="border w-10 rounded-full ml-4 md:w-20" />
              <img src={tw} alt="ig" className="border w-10 rounded-full ml-4" />
              <img src={tt} alt="ig" className="border w-10 rounded-full ml-4" />
              
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
