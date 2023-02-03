import React from 'react'
import logo from '../assets/1.svg'
import or from '../assets/or.svg'

const Header = () => {
  return (
    <div className='font-[Ubuntu]'>

        <div >
            <div className='flex h-[140px] mt-[40px]'>
                <div><p className='text-[26px] text-[#FB3F6C] ml-[115px]'>Websure Technology</p></div>
                <div className='flex'>
                    <p className='ml-[115px]'>About Us</p>
                    <p className='ml-[50px]'>Services</p>
                    <p className='ml-[50px]'>Careers</p>
                    <p className='ml-[50px]'>ROI stories</p>
                    <p className='ml-[50px]'>Blog</p>
                    <p className='ml-[50px]'>Contact Us</p>
                    <button className='mb-[200px] ml-[20px] border-2 w-[100px] h-[50px] rounded-md'>Lets Talk</button>
                </div>
                
            </div>

            <div className='flex'>
                <div className='ml-[115px]'>
                  <div className='flex '>
                     <img src={or} alt="" />
                     <p className='text-[#F17216]'>Best Bussiness Platform -World Record 2022</p>
                 </div>
              <div>
                <p className='w-[550px] text-[50px] font-[700]'>Reach Your Bussiness Goals in Record Time</p>
             </div>

             <div className='w-[450px] h-[108px]'>
                <p >Support small bussiness and join the nationwide movement to encourage commercial support for millions
                    of minority owend bussiness helping world economy
                </p>
            </div>

            <div className='flex'>
                <button className='w-[150px] h-[50px] rounded-xl bg-[#FF698D] text-[#FFFF]'>Gets Started</button>
                <p className='ml-[50px] font-[700]'>Book a 30 Min Quick Meeting</p>

            </div>
        </div>

                <div>
                    <img src={logo} alt=""  className='w-[496px] h-[416px] mb-[50px] ml-[50px]'/>
                </div>

            </div>
           

        </div>
      
    </div>
  )
}

export default Header
