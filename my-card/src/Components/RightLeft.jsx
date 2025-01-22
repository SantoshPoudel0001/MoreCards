import React from "react";

import img1 from "../../images/Group.png";

const LeftRight = () => {
  return (
    <div class="grid  lg:grid-cols-[53%_47%] sm:grid-cols-2 gap-10 p-14">
      <div className="hidden sm:block">
        <img src={img1} alt="Google Workspace" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className=" text-[22px]  text-blue-700 font-[600]">
          Optimized Hosting
        </h1>
        <h1 className=" text-[35.6px] pb-4 font-bold">
          Google Workspace for Business Productivity
        </h1>
        <p className="text-[14.4px] text-[DM Sans] max-w-[560px]">
          One-stop productivity suites to manage the operations of business
          without any hurdle. Google Workspace keeps businesses of all sizes
          running efficiently and fast with secure cloud storage, easy
          administration, and advanced protection.
        </p>
        <div className="">
          <ul className="list-disc list-outside text-[DM Sans] space-y-4 pb-4 max-w-[530px] ps-3">
            <li>
              Easily control user and permission settings using a single admin
              console.
            </li>
            <li>
              Protect sensitive data using Google’s advanced encryption
              technologies.
            </li>
            <li>
              Access emails and files anytime with mobile-friendly applications.
            </li>
            <li>
              Receive 24/7 expert support for uninterrupted business
              productivity.
            </li>
          </ul>
        </div>
        <div className="">
          <button className=" px-16 py-3  font-[600] border border-black ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftRight;
