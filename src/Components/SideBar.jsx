import React, { useState } from 'react'
import { TbLayoutSidebarInactive } from "react-icons/tb";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { Tooltip } from 'react-tooltip';
import { GrCircleQuestion } from "react-icons/gr"
import { RiLogoutBoxLine } from "react-icons/ri";

const SideBar = () => {

    const [sidebar, setSidebar] = useState(true)

    const handleSidebarOpen = () => {

   setSidebar(!sidebar)
    }

    return (
        <div className={`bg-[#71717a30] ${sidebar ? 'w-[350px]' : 'w-[65px]'} h-full px-4 flex justify-between transition-all ease-in duration-500 flex-col rounded-lg`}>
            <div className=''>
                <div className='border-b border-[#71717a3f] py-3 '>
                    <div>
                        <TbLayoutSidebarInactive data-tooltip-id="sidebar-tooltip"
                            data-tooltip-content="close" size={25} className={`${sidebar ? 'flex text-[#9b9b9f] hover:text-[#c6c6c9] m-1 cursor-pointer outline-none' : 'hidden' } `} onClick={handleSidebarOpen} />
                        {/* <Tooltip id="sidebar-tooltip" place="bottom"  className="custom-tooltip"/> */}
                    </div>
                    <div>
                    <TbLayoutSidebarFilled size={25} className={`${sidebar ? 'hidden' : 'flex text-[#71717a] hover:text-[#c6c6c9] m-1 cursor-pointer outline-none' } `} onClick={handleSidebarOpen}/>
                    </div>
                </div>
                {sidebar ? <div className='w-full text-center text-lg text-[#71717a] '> no chat history </div> : ''


                }
            </div>
            <div className='text-xl px-4 py-6 space-y-4 '>
                <div className='flex space-x-4 items-center text-[#9b9b9f] hover:text-[#c6c6c9] cursor-pointer'>
                    <GrCircleQuestion />
                    <h1 className={`${sidebar ? 'opacity-100 duration-700' : 'opacity-0'}`}>About Us</h1>
                </div>
                <div className='flex space-x-4 items-center text-[#9b9b9f] hover:text-[#c6c6c9] cursor-pointer'>
                    <RiLogoutBoxLine />
                    <h1 className={`${sidebar ? 'opacity-100 duration-700' : 'opacity-0'}`}>Log Out</h1>
                </div>
            </div>
        </div>
    )
}

export default SideBar