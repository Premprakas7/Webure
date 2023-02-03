import React from 'react'
import Cosmetic from "../assets/Cosmetic.svg"
import Sales from "../assets/Sales.svg"
import Fashion from "../assets/Fashion.svg"
import Laura from "../assets/Laura.svg"
import Seo from "../assets/Seo.svg"

const Fotter = () => {
  return (
    <div>
        <div className='flex ml-[100px]'>
            <div className='mt-[20px] shadow-2xl'>
                <img src={Cosmetic} alt="" />
                <p className='text-[20px] font-[700]'>Cosmetic Forcest Marketing</p>
            </div>

            <div className='mt-[20px] shadow-2xl ml-[30px]'>
                <img src={Sales} alt="" />
                <p className='text-[20px] font-[700]'>Sales Analytic</p>
            </div>

            <div className='mt-[20px] shadow-2xl ml-[30px]'>
                <img src={Fashion} alt="" />
                <p className='text-[20px] font-[700]'>Fashion Store Mobile Apps</p>
            </div>

        </div>

        <div className='flex ml-[100px]'>
            <div className='mt-[20px] shadow-2xl'>
                <img src={Laura} alt="" />
                <p className='text-[20px] font-[700]'>Laura’s Clore Branding Identity</p>
            </div>

            <div className='mt-[20px] shadow-2xl ml-[30px]'>
                <img src={Seo} alt="" />
                <p className='text-[20px] font-[700]'>SEO Marketing 4.0</p>
            </div>

            <div className='mt-[20px] shadow-2xl ml-[30px] w-[250px]'>
                <p className='text-[#F17216] mt-[25px]'>PROJECTS</p>
                <p className='text-[25px] w-[200px] font-[700] text-left mt-[10px]'>Selected Works from Us</p>
                <button className='w-[150px] h-[50px] border-2 rounded-2xl mt-[20px]'>See more</button>
            </div>

        </div>
      
    </div>
  )
}

export default Fotter
