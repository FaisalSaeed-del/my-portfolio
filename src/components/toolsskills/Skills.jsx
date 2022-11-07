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
        <div>
          <div className="flex justify-center">
            <h1 className="text-white">Tools and Skills</h1>
          </div>
          <div className="p-20 flex justify-center gap-3">
            <div className="bg-slate-900  max-w-[182px] min-h-[182px] rounded-md ">
              <div className="">
                <img src={Figma} alt="" />
              </div>
            </div>
            <div className="bg-slate-900  max-w-[182px] min-h-[182px] rounded-md ">
              <div className="">
                <img src={PSD} alt="" />
              </div>
            </div>
            <div className="bg-slate-900  max-w-[182px] min-h-[182px] rounded-md ">
              <div className="">
                <img src={CSS} alt="" />
              </div>
            </div>
            <div className="bg-slate-900  max-w-[182px] min-h-[182px] rounded-md ">
              <div className="">
                <img src={HTML} alt="" />
              </div>
            </div>
            <div className="bg-slate-900  max-w-[182px] min-h-[182px] rounded-md ">
              <div className="">
                <img src={XML} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
