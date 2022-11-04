import React from "react";
import Content from "../../assets/images/content.png";
import Mobile from "../../assets/images/mobile.png";
import Web from "../../assets/images/web.png";

const Offer = () => {
  return (
    <div className="bg-gradient">
      <section className="container">
        <div className="pt-40">
          <div className="flex flex-col gap-8">
            <div className="max-w-[152px] m-auto">
              <span className="text-para  text-xl font-semibold">
                What Do I Offer
              </span>
            </div>
            <div className="max-w-[634px] m-auto">
              <h1 className="text-white text-4xl font-semibold">
                Creates Professional Design That’s Oriented Towards Client Needs
              </h1>
            </div>
          </div>
        </div>
        <div className="p-20">
          <div className="flex justify-around flex-wrap">
            <div className="border-purple rounded-md border-2 w-[364px] h-[364px] bg-cardbg flex flex-col justify-center  ">
              <div className="w-[100%] flex justify-center">
                <img src={Content} alt="" />
              </div>
              <div className="text-center  ">
                <h3 className="text-3xl font-semibold text-purple">
                  Content Design
                </h3>
              </div>
            </div>
            <div className="border-purple rounded-md border-2 w-[364px] h-[364px] bg-cardbg flex flex-col justify-center  ">
              <div className="w-[100%] flex justify-center">
                <img src={Mobile} alt="" />
              </div>
              <div className="text-center  ">
                <h3 className="text-3xl font-semibold text-purple">
                  Content Design
                </h3>
              </div>
            </div>
            <div className="border-purple rounded-md border-2 w-[364px] h-[364px] bg-cardbg flex flex-col justify-center  ">
              <div className="w-[100%] flex justify-center">
                <img src={Web} alt="" />
              </div>
              <div className="text-center  ">
                <h3 className="text-3xl font-semibold text-purple">
                  Content Design
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
