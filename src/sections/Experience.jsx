import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  return (
    <section className="w-full my-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="head-text text-center mb-16">My Work Experience</h3>
        <div className="flex justify-center px-4">
          <div className="work-content max-w-3xl w-full bg-[#151030] rounded-2xl p-8">
            {workExperiences.map(
              ({ id, name, pos, icon, duration, title, animation }) => (
                <div
                  key={id}
                  className="work-content_container group mb-8 last:mb-0"
                >
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="work-content_logo w-12 h-12 rounded-full overflow-hidden bg-black">
                        <img
                          src={icon}
                          alt="logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="work-content_bar w-[2px] h-full bg-gray-600 mt-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white">
                        {name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {pos} {duration}
                      </p>
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
