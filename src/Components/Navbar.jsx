import React from 'react'
import logo from '../Assets/robot_2752828.png'

const Navbar = () => {
    return (
        <div className='fixed flex w-full justify-between items-end h-[65px] pr-[5%] pl-[4%]' >
            <div className='flex text-zinc-400 space-x-3 items-end'>
                <div className='w-11'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='font-orbitron-logo text-4xl tracking-widest'>Infoverse</h1>
                </div>
            </div>
            <div className='text-white sign-button '>
                <button className='btn' >Sign In</button>
            </div>
        </div>
    )
}

export default Navbar