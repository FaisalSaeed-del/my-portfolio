import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <section className="container">
        <div className="flex self-center flex-wrap justify-between p-5">
          <div className="nav-items self-center">
            <h1 className="text-2xl font-semibold text-white">
              <span className="text-purple">Faisal</span> Saeed
            </h1>
          </div>
          <div className="flex flex-wrap  gap-10">
            <div className="self-center">
              <ul className="flex  flex-wrap text-white  gap-10 text-xl font-semibold ">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Project</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div className=" py-2 px-3 border-purple border-4 flex justify-center    rounded-md">
              <button className="text-xl text-purple  font-semibold ">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
