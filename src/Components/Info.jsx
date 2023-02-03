import React from 'react'
import pr  from '../assets/pr.svg'
import zo  from '../assets/zo.svg'
import g  from '../assets/g.svg'
import tick  from '../assets/tick.svg'


const Info = () => {
  return (
    <div className='font-[Ubuntu]'>
        <div className='flex h-[140px]'>
            <div><img className='w-[100px] mt-[30px] ml-[150px]' src="https://cdn.cookielaw.org/logos/ddb906c9-f57b-40fc-85a1-c8bcbc371b0d/1ce30484-b023-4ff1-a118-3a9dc53fce45/f83dd0bf-3d5c-47ca-b065-8f247adfeacd/rsz_slack_rgb.png" alt="" /></div>
            <div><img src={pr} className='w-[100px] mt-[30px] ml-[200px]' alt="" /></div>
            <div><img src="https://pngimg.com/uploads/microsoft/microsoft_PNG20.png" className='w-[100px] mt-[30px] ml-[200px]' alt="" /></div>
            <div><img src={zo} alt="" className='w-[100px] mt-[30px] ml-[200px]' /></div>
        </div>

        <div className='flex h-[200px]'>
            <div className='ml-[90px] '>
                <p className='text-[#F17216] text-[12px]'>SERVICES</p>
                <p className='text-[36px] font-[700]'>Our Capabilities</p>
                <p className='w-[250px] font-[12px] text-left'>We will bring the breathe of our experience and industry knowledge to help you succeed</p>
            </div>
            <div className='ml-[120px]'>
                <img src="" alt="" />
                <p className='text-[16px] font-[700]'>Consult</p>
                <p className='w-[230px] font-[10px] text-left'>Leverage agile framework to provide a robust high level synopsys overviews</p>
            </div>
            <div className='ml-[90px]'>
            <img src="" alt="" />
                <p className='text-[16px] font-[700]'>Create</p>
                <p className='w-[230px] font-[10px] text-left'>Bring to the table survival strategies to ensure proactive domination</p>
            </div>
            <div className='ml-[90px]'>
            <img src="" alt="" />
                <p className='text-[16px] font-[700]'>Collaborate</p>
                <p className='w-[230px] font-[10px] text-left'> Grow the holistic world view of disruptive innovation workspace</p>
            </div>
        </div>

        <div className='flex bg-[#282C4B]'>
            <div className='mt-[19px] mr-[110px] mb-[27px] ml-[210px]'>
                <img src={g} alt="" className='h-[504px] w-[384px]' />
            </div>

            <div>
                <p className='text-[#F17216] text-[16px] mt-[50px]'>WHY CHOOSE US</p>
                <div className='w-[380px] h-[120px]'><p className='text-[#FFFF] text-[36px] '>Take on any Challenge of the Digital world</p></div>
                
                <div className='flex text-[20px] mt-[20px] mb-[10px]'>
                    <img src={tick} alt="" />
                    <p className='text-[#CED1E5] '>Coporate Financial Advisory</p>
                </div>
                <div className='flex text-[20px] mt-[20px] mb-[10px]'>
                    <img src={tick} alt="" />
                    <p className='text-[#CED1E5]'>Developement of Financial Models</p>
                </div>
                <div className='flex text-[20px] mt-[20px] mb-[10px]'>
                    <img src={tick} alt="" />
                    <p className='text-[#CED1E5]'>Deal Structuring</p>
                </div>
                <div className='flex text-[20px] mt-[20px] mb-[10px]'>
                    <input type="Enter your mail id"  className='bg-[#282C4B] border-b-[2px]'/>
                    <button className='text-[#FFFF] bg-[#FF698D] w-[150px] h-[50px] rounded-3xl'>Get Started</button>
                </div>
            </div>


        </div>


      
    </div>
  )
}

export default Info
