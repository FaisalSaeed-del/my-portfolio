import React from "react";
import Img1 from "../../assets/images/hero.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient">
      <section className="container">
        <div className="p-5 main-hero flex flex-wrap justify-between">
          <div className="flex flex-col gap-3">
            <div className=" max-w-[191px]">
              <span className="text-white text-4xl font-semibold">
                Hello Buds
              </span>
            </div>
            <div className="max-w-100">
              <h1 className="text-white text-5xl font-semibold">
                I am <span className="text-purple">Fasial Saeed</span>{" "}
              </h1>
            </div>
            <div className="max-w-[349px] mb-10">
              <p className="text-para text-xl font-medium">
                React Js Front end Developer
              </p>
            </div>
            <div className=" border-2 rounded-md w-20 mb-5">
              <span className="border-b-para "></span>
            </div>
            <div className="max-w-xl text-justify text-para mb-14">
              <p className="text-xl font-normal">
                I'm a person who has a keen interest in the design layout. I
                think presenting an attractive design is a matter of concern in
                developing a branding of products. To creates a good design, I
                focus on proper composition and visual decoration details in
                order to make it more professional. For the time being, I’m
                developing the skill for acquiring the UI/UX design for dynamic
                application and web development.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 xsm:mb-10">
              <div className="w-52 h-14 bg-purple flex justify-center  align-middle   rounded-md">
                <a className="text-xl text-white flex  align-middle font-semibold">
                  <button>Download CV</button>
                </a>
              </div>
              <div className="w-52 h-14  flex justify-center align-middle   border border-white  rounded-md">
                <a className="text-xl text-white flex  align-middle font-semibold">
                  <button>More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full">
              <img src={Img1} alt="" />
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="w-28 pt-4">
                <span className="text-white text-xl font-semibold">
                  Find Me on
                </span>
              </div>
              <div className="flex justify-center  border rounded-full w-14 h-14 ">
                <a className="text-purple pt-5 w-4">
                  <FaFacebookF />
                </a>
              </div>
              <div className="flex justify-center  border rounded-full w-14 h-14 ">
                <a className="text-purple pt-5 w-4">
                  <AiFillInstagram />
                </a>
              </div>
              <div className="flex justify-center  border rounded-full w-14 h-14 ">
                <a className="text-purple pt-5 w-4">
                  <RiWhatsappFill />
                </a>
              </div>
              <div className="flex justify-center  border rounded-full w-14 h-14 ">
                <a className="text-purple pt-5 w-4">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
