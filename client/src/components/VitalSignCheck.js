import React from 'react'

const VitalSignCheck = () => {
  return (
    <>
      <div className="md:px-20 px-4 py-10 flex md:flex-row flex-col justify-between">
        <div className="md:w-4/5 w-full">
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-xl w-full">Vital Sign Check</h1>
           <h1 className='md:w-32'><span className="font-semibold">Documented :</span> 20/Jan/2018</h1>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between gap-2 py-4">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-semibold">Heart Rate :</h1>
                <h1>73 per min ( Normal range : 60-100 per min )</h1>
              </div>
              <div>
                <h1 className="font-semibold">Respiration Rate :</h1>
                <h1>17 per min ( Normal range : 12-20 per min )</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-semibold">Blood Pressure :</h1>
                <h1>120/75 ( Normal range : 110-130/75-85 )</h1>
              </div>
              <div>
                <h1 className="font-semibold">Temprature :</h1>
                <h1>36.7'C ( Normal range : 36.5'C-37.5'C )</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-between"></div>
        </div>
        <button className="bg-white border-2 border-solid h-min border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          View Report
        </button> 
      </div>

      <div className="md:px-20 px-4 py-10 flex md:flex-row flex-col justify-between">
        <div className="w-full">
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-xl w-full">Allergies</h1>
           <h1 className='md:w-32'><span className="font-semibold">Documented :</span> 20/Jan/2018</h1>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between gap-2 py-4">

                <div className='flex w-full justify-start gap-11 md:gap-56'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Date</h1>
                <h1>20-06-2023</h1>
                </div>
 
                <div>
                <h1 className="font-semibold">Symptoms</h1>
                <h1>Headache</h1>
                </div>
                </div>

                <div className='flex md:flex-row flex-col gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Substance</h1>
                <h1>Dolo</h1>
                </div>
                
                <div>
                <h1 className="font-semibold">Status</h1>
                <h1>Clear</h1>
                </div>
                </div>
                </div>

                <div className='flex flex-col gap-4 w-32'>
                <button className="bg-white border-2 border-solid h-min border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                   View Note
                </button>
                </div>
          </div>
        </div>
      </div>

      <div className="md:px-20 px-4 py-10 flex md:flex-row flex-col justify-between">
        <div className="w-full">
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-xl w-full">Medical History</h1>
           <h1 className='md:w-32'><span className="font-semibold">Documented :</span> 20/Jan/2018</h1>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between gap-2 py-4">

                <div className='flex w-full justify-start gap-11 md:gap-56'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Date</h1>
                <h1>20-06-2023</h1>
                </div>
 
                <div>
                <h1 className="font-semibold">Strength</h1>
                <h1>Headache</h1>
                </div>
                </div>

                <div className='flex md:flex-row flex-col gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Medication</h1>
                <h1>Dolo</h1>
                </div>

                <div>
                <h1 className="font-semibold">Quantity</h1>
                <h1>Clear</h1>
                </div>
                </div>
                </div>

                <div className='flex flex-col gap-4 w-32'>
                <button className="bg-white border-2 border-solid h-min border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                   View Note
                </button>
                </div>
          </div>
        </div>
      </div>

      <div className="md:px-20 px-4 py-10 flex md:flex-row flex-col justify-between">
        <div className="w-full">
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-xl w-full">Clinical Visit</h1>
           <h1 className='md:w-32'><span className="font-semibold">Documented :</span> 20/Jan/2018</h1>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between gap-2 py-4">

                <div className='flex w-full justify-start gap-11 md:gap-56'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Date of visit</h1>
                <h1>20-06-2023</h1>
                </div>
 
                <div>
                <h1 className="font-semibold">Practisioner</h1>
                <h1>Headache</h1>
                </div>
                </div>

                <div className='flex md:flex-row flex-col gap-4 md:gap-56'>
                <div>
                <h1 className="font-semibold">Purpose of visit</h1>
                <h1>Dolo</h1>
                </div>
                </div>
                </div>

                <div className='flex flex-col gap-4 w-32'>
                <button className="bg-white border-2 border-solid h-min border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                   View Note
                </button>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VitalSignCheck
