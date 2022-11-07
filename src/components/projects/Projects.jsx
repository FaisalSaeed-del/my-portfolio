import React from "react";
import Frame from "../../assets/images/project.png";

const Projects = () => {
  return (
    <div className="pro-bg">
      <section className="contianer">
        <div className="">
          {/* <div className="max-w-6xl ">
            <h1 className="text-textcl text-lg font-semibold ">My Project</h1>
          </div> */}
          <div className=" p-20">
            <h2 className="text-white text-xl font-semibold text-center">
              My Latest Projects
            </h2>
          </div>
        </div>
        <div className="  gap-5 p-10">
          <div className="flex justify-around m-auto  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex gap-5 justify-center p-20  flex-wrap ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className=" self-center">
                <h2 className="text-white text-3xl font-semibold ">
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="self-center  bg-purple py-3 px-3 rounded-md">
              <button className="text-white text-xl font-semibold">
                More Projects
              </button>
            </div>
          </div>
          <div className="flex justify-around m-auto  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex gap-5 justify-center p-20  flex-wrap ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className=" self-center">
                <h2 className="text-white text-3xl font-semibold ">
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="self-center  bg-purple py-3 px-3 rounded-md">
              <button className="text-white text-xl font-semibold">
                More Projects
              </button>
            </div>
          </div>
          <div className="flex justify-around m-auto  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex gap-5 justify-center p-20  flex-wrap ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className=" self-center">
                <h2 className="text-white text-3xl font-semibold ">
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="self-center  bg-purple py-3 px-3 rounded-md">
              <button className="text-white text-xl font-semibold">
                More Projects
              </button>
            </div>
          </div>
          <div className="flex justify-around m-auto  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex gap-5 justify-center p-20  flex-wrap ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className=" self-center">
                <h2 className="text-white text-3xl font-semibold ">
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="self-center  bg-purple py-3 px-3 rounded-md">
              <button className="text-white text-xl font-semibold">
                More Projects
              </button>
            </div>
          </div>

          <div className="flex py-10 justify-around m-auto flex-wrap  card-bg max-w-[1260px] ">
            <div className="flex flex-wrap flex-col gap-1 justify-center ">
              <div>
                <h1 className="text-white text-3xl font-semibold">
                  Have any Project in mind
                </h1>
              </div>
              <div>
                <h2 className="text-xl font-normal text-gray-400">
                  I am available for Freelancing
                </h2>
              </div>
            </div>
            <div className="flex self-center gap-4 ">
              <div className="py-3 px-3 border-2 border-white flex justify-center  rounded-md">
                <button className="text-white text-xl font-semibold">
                  More Projects
                </button>
              </div>
              <div className="py-3 px-7 flex justify-center bg-purple rounded-md">
                <button className="text-white   text-xl font-semibold">
                  Email Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
