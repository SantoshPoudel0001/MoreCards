import React from "react";
import img1 from "../../images/google/1.png";
import img2 from "../../images/google/2.png";
import img3 from "../../images/google/3.png";
import img4 from "../../images/google/4.png";
import { MoveUpRight } from "lucide-react";
import "./GoogleWorkspace.css";

import Frame from "../../images/google/Frame.png";
import Calender from "../../images/google/Calendar.png";
import Frame2 from "../../images/google/Frame2.png";
import Frame1 from "../../images/google/Frame1.png";

const GoogleWorkspace = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2  pb-5">
        {/* Left Column */}
        <div>
          <div>
            <div>
              <span className="font-poppins bg-gradient-google font-semibold text-[14px] p-2">
                Managed GCC Services in Nepal
              </span>
            </div>
            <h1 className="font-montserrat font-bold text-[50px] leading-tight ">
              Boost your Productivity and efficiency with
              <span className="text-gradient-google"> Google Workspace</span>
            </h1>
            <p className="font-dmsans pt-5">
              Google Cloud Console simplifies cloud management with real-time
              performance tracking, Easy resource scaling, built-in security,
              and customizable dashboards.
            </p>
          </div>

          <div className="grid grid-cols-2 pt-10 gap-5">
            <div className="flex gap-2 items-center">
              <img src={img1} alt="" className="w-[15px] h-[18px]" />
              <div>Email Archiving</div>
            </div>
            <div className="flex gap-2 items-center">
              <img src={img2} alt="" className="w-[15px] h-[18px]" />
              <div>Fortified</div>
            </div>
            <div className="flex gap-2 items-center">
              <img src={img3} alt="" className="w-[15px] h-[18px]" />
              <div>Effortless Migration</div>
            </div>
            <div className="flex gap-2 items-center">
              <img src={img4} alt="" className="w-[15px] h-[18px]" />
              <div>Branded Email</div>
            </div>
          </div>
          <div className="flex flex-row space-x-3 items-center mt-6">
            <button className="bg-[#2C77F4] p-2 rounded-sm text-white font-dmsans">
              Check Plans
            </button>
            <button className="flex justify-center items-center">
              Get a quotation{" "}
              <span className="flex items-center justify-center pl-2">
                <MoveUpRight size={16} />{" "}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:flex">
          <div
            className={`bg-cover bg-center grid grid-cols-10 gap-1.5 h-[550px] bg-[url("../../images/google/bg.png")] w-full`}
          >
            <div className="mt-16 col-span-3">
              <div className="bg-white h-[430px] flex justify-end items-end rounded-lg shadow-lg">
                <img src={Frame} className="h-[380px] w-[220px]" alt="Frame" />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-2 mt-16 col-span-6">
              <div className="grid grid-cols-2 h-[231px] bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center justify-center">
                  <div>
                    <h1 className="font-semibold font-poppins text-[20px]">
                      Google Mail
                    </h1>
                    <p className="font-[500px] font-dmsans text-[12px] p-5">
                      Secure and Efficient Communication with Lorem ipsum.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <img src={Frame1} alt="Frame1" />
                </div>
              </div>
              <div className="grid grid-cols-10 gap-1 w-full">
                <div className="grid grid-cols-[60%_40%] h-[180px] justify-center items-center bg-white rounded-lg shadow-xl col-span-7">
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
                    <img src={Calender} alt="Calender" className="h-[100px]" />
                  </div>
                </div>
                <div className="bg-white h-[180px] shadow-xl rounded-lg pt-5 col-span-3">
                  <img src={Frame2} alt="Frame2" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleWorkspace;
