import React from 'react';
import img from "../../images/Frame.png";

const LeftRight = () => {
  return (
    <div className='container pt-20'>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="p-1 border border-stone-800 rounded-sm ">
          <p className='text-blue-700'>Navigating The Perks</p>
        </div>
        <h1 className='text-[40px] font-bold text-[Poppins]'>
          <span className='text-blue-700 font-[600]'>Google Workspace</span> Offering with Nest Nepal
        </h1>
        <p className='text-[Poppins]  font-[400] max-w-5xl'>
          Efficiency Boost: Seamlessly integrate Microsoft 365 with Nest Nepal's services to empower teams and enhance productivity with streamlined operations.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 p-4'>
        <div className='flex flex-col justify-center'>
          <h1 className=' text-[22px]  text-blue-700 font-[600]'>Optimized Hosting</h1>
          <h1 className=' text-[35.6px] pb-4 font-bold'>Google Workspace for Smarter Collaboration</h1>
          <p className='text-[14.4px] text-[DM Sans] max-w-[560px]'>
            Give your team the communication tools and seamless collaboration they need. Google Workspace covers it all, from emails to real-time documentation, to keep a team connected and productive from anywhere.
          </p>
          <div className=''>
            <ul className="list-disc list-outside text-[DM Sans] space-y-4 pb-4 max-w-[530px] ps-3">
              <li>Manage emails and schedules within a single integrated solution with ease.</li>
              <li>Collaborate on documents, spreadsheets, and presentations from anywhere.</li>
              <li>Securely access and share files using cloud-based storage solutions.</li>
              <li>Set up virtual meetings using the excellent features of Google Meet.</li>
            </ul>
          </div>
          <div className=''>
            <button className='px-16 py-3   font-[600] border border-black '>Get Started</button>
          </div>
        </div>
        
        <div className="hidden sm:block">
          <img src={img} alt="Google Workspace" />
        </div>
      </div>
    </div>
  );
};

export default LeftRight;
