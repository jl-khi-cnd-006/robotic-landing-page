import React from 'react';
import robot from '../Assets/robot-removedBg.png';
import { useSprings, animated } from 'react-spring';

const messages = [
    {
        title: "Chat With Documents",
        alert: "Deployment 'alert-manager' on namespace 'Openfaas' is experiencing high traffic",
        delay: 500,
        config: { tension: 170, friction: 26 }, // Default config
    },
    {
        title: "Chat with Databases",
        alert: "Deployment 'alert-manager' on namespace 'Openfaas' is experiencing high traffic",
        delay: 1000,
        config: { tension: 170, friction: 26 }, // Default config
    },
    {
        title: "Chat with SpreadSheets",
        alert: "Deployment 'alert-manager' on namespace 'Openfaas' is experiencing high traffic",
        delay: 1500,
        config: { tension: 170, friction: 26 }, // Default config
    },
    {
        title: "Chat with WebPages",
        alert: "Deployment 'alert-manager' on namespace 'Openfaas' is experiencing high traffic",
        delay: 2000,
        config: { tension: 120, friction: 20 }, // Adjusted config for smoother rendering
    },
];

const SideNotifications = () => {
    const springs = useSprings(
        messages.length,
        messages.map((message, i) => ({
            from: { opacity: 0, transform: 'translateX(200px)' },
            to: { opacity: 1, transform: 'translateX(0px)' },
            delay: message.delay,
            config: message.config,
        }))
    );

    return (
        <div className='flex w-[600px] h-full'>
            <div className='space-y-2 overflow-hidden'>
                {springs.map((props, index) => (
                    <animated.div
                        key={index}
                        style={props}
                        className='flex text-sm space-x-6 bg-gradient-to-r from-[#71717a30] p-4 rounded-lg'
                    >
                        <div className='w-[15%] rounded-lg bg-zinc-950 h-fit p-2'>
                            <img src={robot} alt='robotic logo for messages' />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-lg font-bold'>{messages[index].title}</h1>
                            <div className='space-y-2'>
                                <p><span className='App-link'>@Alerts</span> I got an alert from Prometheus:</p>
                                <p>Deployment '<span className='App-link'>alert-manager</span>' on namespace '<span className='App-link'>Openfaas</span>' is experiencing high traffic</p>
                            </div>
                        </div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default SideNotifications;
