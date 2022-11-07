import React from "react";
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import Location from "../../assets/images/location.svg";
import Fpg from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div className="pro-bg">
      <section className="container">
        <div className="p-10 ">
          <div className="sub-footer">
            <div className="">
              <div className="max-w-[228px] mb-8  ">
                <h1 className="text-white text-4xl font-semibold">
                  Get in Touch
                </h1>
              </div>
              <div className="mb-10 max-w-[700px]">
                <p className="text-gray-400 text-xl font-normal">
                  For business and partnership inquiry please contact me below!
                </p>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="pt-32">
                <div className="flex items-center gap-10 mb-4">
                  <div>
                    <img src={Phone} alt="" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-base font-normal">
                      0300-8384002
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-10 mb-4">
                  <div>
                    <img src={Mail} alt="" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-base font-normal">
                      mianfasi421@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div>
                    <img src={Location} alt="" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-base font-normal">
                      Faisalabad
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={Fpg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
