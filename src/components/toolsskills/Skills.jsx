import React from "react";
import Figma from "../../assets/images/figma.svg";
import PSD from "../../assets/images/psd.svg";
import CSS from "../../assets/images/css.svg";
import HTML from "../../assets/images/html.svg";
import XML from "../../assets/images/xml.svg";

const Skills = () => {
  return (
    <div className="pro-bg">
      <section className="container">
        <div className="p-20">
          <div className="flex justify-center">
            <h1 className="text-white text-4xl font-semibold">
              Tools and Skills
            </h1>
          </div>
          <div className="flex justify-around flex-wrap p-16">
            <div className="bg-slate-900   max-w-[182px] rounded-md ">
              <img className="w-[100%] " src={Figma} alt="" />
            </div>
            <div className="bg-slate-900   max-w-[182px] rounded-md ">
              <img className="w-[100%] " src={PSD} alt="" />
            </div>
            <div className="bg-slate-900   max-w-[182px] rounded-md ">
              <img className="w-[100%] " src={HTML} alt="" />
            </div>
            <div className="bg-slate-900   max-w-[182px] rounded-md ">
              <img className="w-[100%] " src={CSS} alt="" />
            </div>
            <div className="bg-slate-900   max-w-[182px] rounded-md ">
              <img className="w-[100%] " src={XML} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
