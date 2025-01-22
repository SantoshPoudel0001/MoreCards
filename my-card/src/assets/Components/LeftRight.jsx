import React from 'react'
import img from '.../images/Frame.png'

const LeftRight = () => {
  return (


  
        <div className='container'>
          <div className="flex flex-col items-center justify-center">
            <div className="p-1 border border-stone-800">
              <p className='text-blue-700'>Navigating The Perks</p>
            </div>
            <h1 className='text-[40px] font-bold text-[Poppins]'> <span className='text-blue-700'>Google Workspace</span> Offering with Nest Nepal</h1>
            <p>Efficiency Boost: Seamlessly integrate Microsoft 365 with Nest Nepal's services to empower teams and enhance productivity with streamlined operations.</p>
          </div>
          <div className='grid grid-cols-2 p-4'>
            <div>
                <h1 className=' text-[20px] font-light'>Hassle-Free Transfers</h1>
                <h1 className=' text-[35.6px] pb-10'>Seamless migration process</h1>
                <p className='text-[14.4px] pb-10'>At Nest Nepal, we work toward ensuring that the migration process is simple and hassle-free for all our clients. Our expert team ensures no data loss and minimal downtime. Migration processes at Nest Nepal are conducted in the following steps:</p>
                <div className='pb-10'>
                    <ul className='list-disc list-inside '>
 <li>Full assessment of your current infrastructure.</li>
<li>A customized migration plan to suit your needs.</li>
<li>Smooth and safe data transfer.</li>
<li>Ongoing support after migration for optimal performance.</li>
                    </ul>
                </div>
                <div className=''><button className='p-2 px-10  border border-black'>Get Started</button></div>
            </div>
            <div><img src={img} alt="" /></div>

          </div>
        </div>
      );
    };
    
  

export default LeftRight
