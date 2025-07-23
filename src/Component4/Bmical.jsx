import React, { useState } from 'react'

const Bmical = () => {
      const [Height, setHeight] = useState(0);
      const [Weight, setWeight] = useState(0);
      const [Cal, doCal] = useState();
      const fetchHeight = (e)=>{
          setHeight(Number(e.target.value));
      }
      const fetchWeight = (e)=>{
          setWeight(Number(e.target.value));
      }
      const doCalculate = ()=>{
          var H = (Height)*(Height);
          doCal(Weight/(H));
          //console.log(`Height ${Height} , Weight ${Weight}, Result ${(Weight)/(Height)*(Height)}`)
          
      }

  return (
    <>
     <div className='flex'>
        <div className='md:w-3/12 sm:w-1/12'></div>
        <div className='md:w-6/12 sm:w-10/12 bg-green-400'>
            <h1 className='text-3xl font-bold text-center mb-5'>BMI Calculator</h1>
            <input className='w-full h-10 p-4 bg-green-200 mb-3' placeholder='Enter Your Height (in Metres)' onChange={fetchHeight}></input><br />
            <input className='w-full h-10 p-4 bg-green-200 mb-5 ' placeholder='Enter Your Weight (in Kgs)' onChange={fetchWeight}></input><br />
            <div className='text-center'>
            <button className='btn mb-5' onClick={doCalculate}>Calculate</button>
            </div>
            <div className='flex'>
              <div className='w-3/12'></div>
              <div className='w-6/12 h-10 bg-green-200 mb-5  '><span className='font-bold text-3xl '>Your BMI:</span>  {Cal}</div>
              <div className='w-3/12'></div>
            </div>
        </div>
        <div className='md:w-3/12 sm:w-1/12'></div>
    </div>
    </>
  )
}

export default Bmical