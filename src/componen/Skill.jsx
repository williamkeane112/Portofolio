import React from "react";
import html from "../aset/html.png";
import css from "../aset/css.png";
import js from "../aset/javascript.png";
import tailwind from "../aset/tailwind.png";
import react from "../aset/react.png";

const Skill = () => {
  const MySkill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
  ];
  return (
    <div name="skill" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <span className="uppercase text-4xl font-bold border-b-4 border-gray-500 p-2 inline bg-gradient-to-l text-transparent bg-clip-text from-sky-600 to-teal-500">skill</span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 font-inter2">
          {MySkill.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
