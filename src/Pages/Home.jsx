import React from 'react'
import SideNotifications from '../Components/SideNotifications'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar />
    <div className='flex justify-center items-center h-screen'>
      <div className='h-full w-full flex md:flex-row justify-evenly items-center flex-col'>
        <div className="flex flex-col items-start space-y-8 text-2xl w-[500px]">
          <div className="space-y-2">
            <h1 className="font-orbitron text-7xl leading-tight ">
              <span className='mr-6 text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-purple-500'>
                AI
              </span>
              <span className='text-white'>for </span>  
              <span className='text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-purple-500'>
              RAG
              </span>
              
              </h1>
            <p className="font-semibold font-poppins mt-[-15px]">Supercharge your creativity and productivity</p>
          </div>
          <div>
            <p className="text-base">
              Chat to start writing, planning, learning and more with Infoverse AI
            </p>
          </div>
          <div class="container">
            <button className="button " onClick={() => navigate('/chat')}> Chat with AI </button>
          </div>
        </div>
        <div> <SideNotifications /></div>
      </div>
    </div>
    </div>
  )
}

export default Home