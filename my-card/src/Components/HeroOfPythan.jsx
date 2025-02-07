import React from 'react';
import Hero from "../../images/Hero.png";
import Phone from "../../images/Phone.png";
import ".././index.css"
import { MoveUpRight } from 'lucide-react';


const HeroOfPythan = () => {
  return (
    <div className='container relative'>
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-4 pt-20 font-dmsans">
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-[32px] lg:text-[48px] leading-tight font-Montserrat'>
            Enhance your <span className="text-gradient">
              Python
            </span> Hosting Experience
          </h1>
          <div>
            <ul className='flex flex-col gap-y-4'>
              <li>&#10003; Pre-configured setups for Django, Flask, and FastAPI. </li>
              <li>&#10003; Secure apps with SSL, firewalls, and malware scans. </li>
              <li>&#10003; Scale CPU, memory, and storage effortlessly. </li>
              <li>&#10003; Maintain fast response times during high traffic. </li>
            </ul>
          </div>
          <div className='space-x-8 flex items-center mt-7'>
            <button className='bg-black text-white p-3'>Check Plans</button>
           <div className=''>  <button className=' flex justify-center items-center'>Get a quotation  <span className='flex items-center justify-center pl-2'><MoveUpRight size={16}/> </span></button></div>
          </div>
          <div className='flex space-x-6 divide-x-2 mt-7 divide-black h-[68px]'>
            <div>
              <h1 className='font-bold text-[32px] lg:text-[40.82px]'>10k+</h1>
              <div><h1>Clients Served</h1></div>
            </div>
            <div className='pl-8'>
              <h1 className='font-bold text-[32px] lg:text-[40.82px]'>30k+</h1>
              <div><h1>Websites Hosted</h1></div>
            </div>
            <div className='pl-8'>
              <h1 className='font-bold text-[32px] lg:text-[40.82px]'>390</h1>
              <div><h1>Resources</h1></div>
            </div>
          </div>
        </div>

        {/* Right side (hidden on small and medium devices) */}
        <div className="hidden lg:block">
          <img src={Hero} alt="Hero Image" />
        </div>
      </div>

    
      <div className="hidden lg:flex absolute bottom-[34px] left-[83%] w-[389px] h-[159.36px] bg-[#D8F0FF] text-black p-4 rounded-lg  items-center justify-center -translate-x-1/2">
        <div className="w-[72.5px] h-[72.5px] flex justify-center items-center">
          <img src={Phone} alt="Phone Icon" />
        </div>
        <div className="pl-5">
          <h2 className="text-xl font-bold">Book appointment</h2>
          <p className="text-[10.72px] mt-2">
            Speak with our experts about your goals
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition duration-300"
            aria-label="Schedule Consultation Call"
          >
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroOfPythan;
