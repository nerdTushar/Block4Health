import React from 'react';
import B4hStatistics from './B4hStatistics';
import EventSlider from './EventSlider';

const HomeScreen = () => {
  return (
    <>
    <B4hStatistics />
      <div className='flex my-10 md:my-20 justify-center'>
           <div className='flex-[0.9] flex md:flex-row flex-col justify-between gap-4 md:gap-0'>

              <div className='md:w-1/2 md:h-full h-52 w-full'>
              <iframe className='w-full md:w-5/6 h-full' src="https://www.youtube.com/embed/CDk-38P9PYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div className='md:w-1/2 w-full md:p-0 p-4 flex flex-col items-center md:items-start justify-start gap-6'>
                 <h1 className='font-bold text-4xl text-teal-900 hover:text-light2 md:text-left text-center'>A Smart Medical Ecosystem</h1>
                 <h1 className='md:text-left text-center'>Our Web 3.0 platform empowers individuals to securely trade and share their data, creating a patient-centered care experience. Join us now and embrace the future of personalized healthcare. Take charge of your health like never before!</h1>
                 <h1 className='md:text-left text-center'>Experience convenient access to your medical records anywhere, connect with leading healthcare professionals, and maintain privacy.</h1>
                 <h1 className='md:text-left text-center'>Own and trade your Electronic Health Data for financial benefits.</h1>
                 <h1 className='md:text-left text-center'>Join us today for empowerment and convenience.</h1>
                 <button className='bg-teal-900 hover:bg-light2 text-white rounded-full p-2 w-1/2 md:w-1/4'>How To Learn</button>
              </div>
           </div>
      </div>
      
      <div className='flex my-10 md:my-20 justify-center'>
           <div className='flex-[0.9] flex md:flex-row flex-col justify-between gap-4 md:gap-0'>

              <div className=' md:w-1/2 w-full md:p-0 p-4 flex flex-col items-center md:items-start justify-start gap-6'>
                 <h1 className='font-bold text-4xl text-teal-900 hover:text-light2 md:text-left text-center'>Patient's EHR Trading Platform</h1>
                 <h1 className='md:text-left text-center'>Creating a integrated environment where user i.e. patient the sole owner of health data can share their data in form of Non-Fungible Token (NFT)</h1>
                 <h1 className='md:text-left text-center'>Can sell NFT to research facilities</h1>
                 <h1 className='md:text-left text-center'>Can sell NFT to insurance agencies</h1>
                 <h1 className='md:text-left text-center'>Gain benefits in form of insurance or monitory benefits</h1>
                 <button className='bg-teal-900 hover:bg-light2 text-white rounded-full p-2 w-1/2 md:w-1/4'>How To Learn</button>
              </div>

              <div className='md:w-1/2 md:h-full h-52 flex justify-end w-full'>
              <iframe className='md:w-5/6 w-full h-full' src="https://www.youtube.com/embed/ABOKawimMxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              
           </div>
      </div>
      <EventSlider />
    </>
  )
}

export default HomeScreen
