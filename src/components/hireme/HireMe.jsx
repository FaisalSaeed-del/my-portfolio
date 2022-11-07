import React from "react";
import Time from "../../assets/images/time.svg";
import MSG from "../../assets/images/msg.svg";
import Thumb from "../../assets/images/thumb.svg";
import Tick from "../../assets/images/tick.svg";

const HireMe = () => {
  return (
    <div className="pro-bg">
      <section className="container">
        <div>
          <div className="max-w-fit m-auto">
            <h1 className="text-white  text-4xl font-semibold">Why Hire Me</h1>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-32 pt-32">
          <div className="border-2 max-w-[200px] border-gray-400  rounded-full p-10">
            <div className=" flex justify-center p-6  max-w-[198px] border-purple border-2 rounded-full">
              <div className="m-auto">
                <img src={Time} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="border-2 max-w-[200px] border-gray-400  rounded-full p-10">
            <div className=" flex justify-center p-6  max-w-[198px] border-purple border-2 rounded-full">
              <div className="m-auto">
                <img src={MSG} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="border-2 max-w-[200px] border-gray-400  rounded-full p-10">
            <div className=" flex justify-center p-6  max-w-[198px] border-purple border-2 rounded-full">
              <div className="m-auto">
                <img src={Thumb} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="border-2 max-w-[200px] border-gray-400  rounded-full p-10">
            <div className=" flex justify-center p-6  max-w-[198px] border-purple border-2 rounded-full">
              <div className="m-auto">
                <img src={Tick} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-3 ">
              <div className="max-w-[175px]">
                <h2 className="text-white text-3xl font-medium text-center">
                  Workholic
                </h2>
              </div>
              <div className="max-w-[258px]">
                <p className="text-white text-base font-normal">
                  I’m a kind of person who can’t just stand around and doing
                  nothing. I have a tendency to do something productive.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="max-w-[175px]">
                <h2 className="text-white text-3xl font-medium text-center">
                  Workholic
                </h2>
              </div>
              <div className="max-w-[258px]">
                <p className="text-white text-base font-normal">
                  I’m a kind of person who can’t just stand around and doing
                  nothing. I have a tendency to do something productive.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="max-w-[175px]">
                <h2 className="text-white text-3xl font-medium text-center">
                  Workholic
                </h2>
              </div>
              <div className="max-w-[258px]">
                <p className="text-white text-base font-normal">
                  I’m a kind of person who can’t just stand around and doing
                  nothing. I have a tendency to do something productive.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-3 ">
              <div className="max-w-[175px]">
                <h2 className="text-white text-3xl font-medium text-center">
                  Workholic
                </h2>
              </div>
              <div className="max-w-[258px]">
                <p className="text-white text-base font-normal">
                  I’m a kind of person who can’t just stand around and doing
                  nothing. I have a tendency to do something productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireMe;
