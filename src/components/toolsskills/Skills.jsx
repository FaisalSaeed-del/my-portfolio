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
        <div className="pt-20">
          <div className="flex justify-center">
            <h1 className="text-white text-4xl font-semibold">
              Tools and Skills
            </h1>
          </div>
          <div className="flex flex-wrap justify-around py-16">
            <div>
              <img className="" src={Figma} alt="" />
            </div>
            <div>
              <img className="" src={PSD} alt="" />
            </div>
            <div>
              <img className="" src={HTML} alt="" />
            </div>
            <div>
              <img className="" src={XML} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
