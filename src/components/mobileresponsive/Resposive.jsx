import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Resposive = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black">
      <section className="container">
        <div>
          <div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla"
            >
              <div>
                <ul className="flex flex-col p-10 gap-5 mb-10 justify-center text-black text-xl font-semibold ">
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
              <div className=" w-52 h-14 border-black m-auto border-4 flex justify-center  align-middle   rounded-md">
                <button className="text-xl text-black   align-middle font-semibold ">
                  Contact Me
                </button>
              </div>
            </Drawer>
            <button className="text-white" onClick={toggleDrawer}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resposive;
