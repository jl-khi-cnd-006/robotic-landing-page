import React, {useState} from 'react'
import Card from './Card'

const Chatting = () => {

  const [chat, setChat] = useState('')

  return (
    <div className='bg-[#71717a30] h-full p-4 rounded-lg '>  
    <div className='h-full  '>
      
      <div className='flex justify-center items-end h-full '>
          <input 
          type='text'
          value={chat}
          onChange={ (e) => setChat(e.target.value)}
          placeholder='Lets Chat!'
          className=' text-base outline-none w-full mx-[5%] bg-slate-300'
          />
          
      </div>
    </div>
    </div>
  )
}

export default Chatting