import React, {useState} from 'react'
import { GoPaperclip } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";


const Chatting = () => {

  const [chat, setChat] = useState('')

  return (
    <div className='bg-[#71717a30] h-full p-4 rounded-lg w-full'>  
    <div className='h-full  w-full'>
      
      <div className='flex  items-end h-full w-full'>
        <div className='mx-[2%]  border border-[#71717a70] w-full  rounded-lg focus:border-2 focus:border-[#71717a]'>
          <div className='border-b border-[#71717a70] ' >
          <input 
          type='text'
          value={chat}
          onChange={ (e) => setChat(e.target.value)}
          placeholder='Lets Chat!'
          className=' text-base outline-none w-full bg-transparent  px-3 py-7'
          />
          </div>
          <div className='p-3 bg-[#71717a4e] w-full rounded-b-lg flex justify-between'>
            <GoPaperclip size={20}/>
            <BsArrowRight size={20} />
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Chatting