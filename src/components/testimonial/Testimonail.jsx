import React from "react";
import Mask from "../../assets/images/mask.png";

const Testimonail = () => {
  return (
    <div className="pro-bg">
      <section className="container">
        <div className="pt-24">
          <div className="flex flex-col gap-4 ">
            <div className="max-w-[131px] m-auto">
              <h1 className="text-gray-400 text-xl font-semibold">
                Testimonials
              </h1>
            </div>
            <div className="max-w-[513px] m-auto">
              <h1 className="text-white text-4xl font-semibold ">
                What do they say about me
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 pt-20">
            <div className="bg-black border-2 rounded-md">
              <img src={Mask} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="max-w-[618px]">
                <p className="text-gray-400 text-base font-normal">
                  SamCreative has been the best designer I have ever worked
                  with. The UI designs he created are top-notch and the design
                  system he integrated allows for straight forward fixes
                  throughout every area of the app. I'm looking forward to
                  partner up with him on upcoming projects.{" "}
                </p>
              </div>
              <div>
                <h1 className="text-purple text-3xl font-semibold">
                  Iqbal Hafish
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonail;
