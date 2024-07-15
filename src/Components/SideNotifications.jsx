import React from 'react'
import robot from '../Assets/robot-removedBg.png'

const SideNotifications = () => {
    return (
        <div className='flex w-[600px] h-full'>
            <div className='space-y-2'>
                <div className='flex text-sm space-x-6 bg-gradient-to-r from-[#71717a30]  p-4 rounded-lg '>
                    <div className='w-[15%] rounded-lg bg-zinc-950 h-fit p-2'>
                        <img src={robot} alt='robotic logo for messages' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold'>Chat With Documents </h1>
                        <div className='space-y-2'>
                            <p> <span className='App-link'> @Alerts</span> I got an alert from Prometheus: </p>
                            <p> Deployment '<span className='App-link'>alert-manager</span>' on namespace '<span className='App-link'>Openfaas</span>' is experiencing high traffic</p>
                        </div>
                    </div>
                </div>
                <div className='flex text-sm space-x-6 bg-gradient-to-r from-[#71717a30] p-4 rounded-lg '>
                    <div className='w-[15%] rounded-lg bg-zinc-950 h-fit p-2'>
                        <img src={robot} alt='robotic logo for messages' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold'>Chat with Databases</h1>
                        <div className='space-y-2'>
                            <p> <span className='App-link'> @Alerts</span> I got an alert from Prometheus: </p>
                            <p> Deployment '<span className='App-link'>alert-manager</span>' on namespace '<span className='App-link'>Openfaas</span>' is experiencing high traffic</p>
                        </div>
                    </div>
                </div>
                <div className='flex text-sm space-x-6 bg-gradient-to-r from-[#71717a30]  p-4 rounded-lg '>
                    <div className='w-[15%] rounded-lg bg-zinc-950 h-fit p-2'>
                        <img src={robot} alt='robotic logo for messages' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold'>Chat with SpreadSheets</h1>
                        <div className='space-y-2'>
                            <p> <span className='App-link'> @Alerts</span> I got an alert from Prometheus: </p>
                            <p> Deployment '<span className='App-link'>alert-manager</span>' on namespace '<span className='App-link'>Openfaas</span>' is experiencing high traffic</p>
                        </div>
                    </div>
                </div>
                <div className='flex text-sm space-x-6 bg-gradient-to-r from-[#71717a30]  p-4 rounded-lg '>
                    <div className='w-[15%] rounded-lg bg-zinc-950 h-fit p-2'>
                        <img src={robot} alt='robotic logo for messages' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold '>Chat with WebPages</h1>
                        <div className='space-y-2'>
                            <p> <span className='App-link'> @Alerts</span> I got an alert from Prometheus: </p>
                            <p> Deployment '<span className='App-link'>alert-manager</span>' on namespace '<span className='App-link'>Openfaas</span>' is experiencing high traffic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNotifications