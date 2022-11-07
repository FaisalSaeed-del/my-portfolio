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
          <div className="flex justify-around  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex gap-5 justify-center p-20  flex-wrap ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className="mt-20">
                <h2 className="text-white text-3xl font-semibold ">
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="w-32 h-[50px] mt-36 flex justify-center bg-purple rounded-md">
              <button className="text-white text-xl font-semibold">
                View Detail
              </button>
            </div>
          </div>
          <div className="flex justify-around m-auto  mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex flex-wrap gap-5  justify-center p-20 ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className="mt-20">
                <h2 className="text-white text-3xl font-semibold ">
                  {" "}
                  DaurUang Mobile Apps
                </h2>
              </div>
            </div>
            <div className="w-32 h-[50px] mt-36 flex justify-center bg-purple rounded-md">
              <button className="text-white text-xl font-semibold">
                View Detail
              </button>
            </div>
          </div>
          <div className="flex  justify-around m-auto mb-10  card-bg max-w-[1260px] min-h-72">
            <div className="flex flex-wrap gap-5 justify-center p-20 ">
              <div className="">
                <img className="w-full rounded-md" src={Frame} alt="" />
              </div>
              <div className="mt-20">
                <h2 className="text-white text-3xl font-semibold ">
                  {" "}
                  Ada Mekanik Mobile Apps
                </h2>
              </div>
            </div>
            <div className="w-32 h-[50px] mt-36 flex justify-center bg-purple rounded-md">
              <button className="text-white text-xl font-semibold">
                View Detail
              </button>
            </div>
          </div>
          <div className="flex  justify-around m-auto  card-bg max-w-[1260px] min-h-44">
            <div className="flex flex-wrap flex-col gap-1 justify-center p-20">
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
            <div className="flex gap-4">
              <div className="w-40 h-[50px] mt-16 border-2 border-white flex justify-center  rounded-md">
                <button className="text-white text-xl font-semibold">
                  More Projects
                </button>
              </div>
              <div className="w-36 h-[50px] mt-16  flex justify-center bg-purple rounded-md">
                <button className="text-white text-xl font-semibold">
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
