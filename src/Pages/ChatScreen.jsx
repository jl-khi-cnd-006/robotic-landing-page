import React from 'react'
import logo from '../Assets/robot_2752828.png'
import SideBar from '../Components/SideBar'
import Chatting from '../Components/Chatting'

const ChatScreen = () => {
    return (
        <div className='h-screen w-full'>
            <div className='flex text-zinc-400 space-x-3 items-end p-6'>
                <div className='w-9'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='font-orbitron-logo text-3xl tracking-widest'>Infoverse</h1>
                </div>
            </div>
            <div className='px-6 flex gap-4 w-auto h-[90vh]'>
                <div><SideBar /></div>
                <div className='grow '><Chatting /></div>
            </div>
        </div>
    )
}

export default ChatScreen