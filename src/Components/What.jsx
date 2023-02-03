import React from 'react'
import design from "../assets/design.svg"
import fed from "../assets/fed.svg"
import bd from "../assets/bd.svg"
import ad from "../assets/ad.svg"
import anal from "../assets/anal.svg"
import qa from "../assets/qa.svg"
import back from "../assets/back.svg"

const What = () => {
  return (
    <div className='font-[Ubuntu]'>
            <div className='mt-[-50px]'>
                 <p className='text-[70px]'>What We Do</p>
            </div>

          <div className='flex mt-[68px]'>
                <div  className='w-[200px] text-left'>
                    <p className='text-[36px] ml-[60px] '>Our Services</p>
                </div>
                <div className='h-[200px] w-[900px] text-left ml-[100px]'>
                    <p className='text-[23px]'>It has roots in a piece of classical Latin literature from 45 BC,
                         making it over 2000 years old. Richard McClintock, a Latin professor 
                         at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                           classical literature.</p>
                </div>
            </div>  

            <div className='flex'>
                <div className='bg-[#3F0598] w-[200px] ml-[115px] h-[200px]'>
                    <img src={design} alt="" className='ml-[50px]'/>
                    <p className='text-[#FFFF] text-[20px]'>Design</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={fed} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Front End Development</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={bd} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Back End Development</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={ad} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Application Development</p>
                </div>
            </div>


            <div className='flex mt-[50px]'>
            <div className=' w-[200px] ml-[115px] h-[200px] shadow-2xl'>
                    <img src={bd} alt="" className='ml-[50px]'/>
                    <p className=' text-[22px]'>Cloud Services</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={anal} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Analytics</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={qa} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Q-A And Testing</p>
                </div>

                <div className='w-[200px] ml-[100px] h-[200px] shadow-2xl'>
                    <img src={back} alt="" className='ml-[50px]'/>
                    <p className=' text-[24px]'>Back Office Support</p>
                </div>

            </div>
      
    </div>
  )
}

export default What
