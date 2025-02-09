import React from "react";
import img1 from "../../images/google/1.png";
import img2 from "../../images/google/2.png";
import img3 from "../../images/google/3.png";
import img4 from "../../images/google/4.png";
import { MoveUpRight } from "lucide-react";
import "./GoogleWorkspace.css";

import Window from "../../images/Window2/1.png";
import Book from "../../images/Window2/Book.png";
import Kt from "../../images/Window2/kt.png";

import Frame1 from "../../images/google/Frame1.png";

const Windows2 = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-5">
        {/* Left Column */}
        <div>
          <div>
            <div>
              <span
                className="font-poppins font-semibold text-[14px] p-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(235, 201, 255, 0.7) 0%, rgba(180, 195, 255, 0.7) 94.6%)",
                }}
              >
                Microsoft Windows
              </span>
            </div>
            <h1 className="font-montserrat font-bold text-[50px] leading-tight">
              Elevate Your Productivity with Microsoft Windows
            </h1>
            <p className="font-dmsans pt-5">
              Google Cloud Console simplifies cloud management with real-time
              performance tracking, easy resource scaling, built-in security,
              and customizable dashboards.
            </p>
          </div>

          <div className="grid grid-cols-2 pt-10 gap-5">
            <div className="flex gap-2 items-center">
              <img
                src={img1}
                alt="Email Archiving"
                className="w-[15px] h-[18px]"
              />
              <div>Email Archiving</div>
            </div>
            <div className="flex gap-2 items-center">
              <img src={img2} alt="Fortified" className="w-[15px] h-[18px]" />
              <div>Fortified</div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={img3}
                alt="Effortless Migration"
                className="w-[15px] h-[18px]"
              />
              <div>Effortless Migration</div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={img4}
                alt="Branded Email"
                className="w-[15px] h-[18px]"
              />
              <div>Branded Email</div>
            </div>
          </div>

          <div className="flex flex-row space-x-3 items-center mt-6">
            <button className="p-2 rounded-sm text-white font-dmsans bg-gradient-to-r from-[#1638D5] to-[#3853D3]">
              Check Plans
            </button>
            <button className="flex justify-center items-center">
              Get a quotation{" "}
              <span className="flex items-center justify-center pl-2">
                <MoveUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column */}

        <div className="container mx-auto p-4 ">
          <div className="hidden lg:flex h-full w-full">
            <div className="grid grid-cols-2 gap-4 h-full w-full">
              <div
                className=" text-white p-4  rounded-md"
                style={{
                  background:
                    "linear-gradient(160.68deg, #BAC9F2 17.44%, #F9E6FF 78.62%)",
                }}
              >
                <img src={kt} alt="" />
              </div>
              <div className="grid grid-row-10 gap-4">
                
                    <div className="bg-[#E3E8FF] rounded-md">
                      <div className="flex items-center grid-cols-6">
                      <img src={Window} alt="" className=""/>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 h-[180px] justify-center items-center bg-[#E3E8FF] rounded-md ">
                  <div className="flex flex-col pl-6">
                    <h1 className="font-semibold font-montserrat text-[16px]">
                      Book an{" "}
                      <span className="font-bold text-[20px]">Appointment</span>
                    </h1>
                    <p className="font-medium text-[12px] py-2">
                      Speak with our experts about your goals.
                    </p>
                    <div>
                      <button className="text-white bg-blue-600 px-3.5 py-1.5 rounded-sm">
                        Check Plans
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={Book} alt="Calender" className="" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Windows2;
