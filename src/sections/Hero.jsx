
import React from "react";

const Hero = ( ) =>{
    return(
        <section name="hero" className="flex flex-col md:flex-row justify-between items-center px-20 py-24 bg-black text-white min-h-screen">
            <div className="ml-[100px]">
            <p className="text-purple-400 text-sm mb-2">👋 Hello, I'm</p>
            <h1 className="text-5xl font-bold mb-2 ">Devesh Chahar</h1>
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">MERN Stack Developer</h2>
            <p className="text-gray-400 max-w-lg text-lg mb-8">
                Building modern full-stack web applications with MongoDB, Express, React & Node.js. Based in Jaipur, Rajasthan</p>

                <div className=" flex gap-4">
                    <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition ">View Projects</a>
                    <a href="#contact" className="border border-purple-600 text-purple-400 hover:bg-purple-900 px-6 py-3 rounded-lg transition ">Contact Me</a>
                </div>
                </div>

                    {/* Right - Floating Icons */}
            <div className="relative w-[400px] h-[400px] hidden md:block mr-[160px] mt-10">

                {/* Center badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-purple-900 border-2 border-purple-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-purple-300 font-bold text-xl">DC</span>
                </div>

                {/* React */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-gray-900 border border-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
                    <span className="text-blue-400 text-2xl">⚛</span>
                </div>

                {/* Node */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gray-900 border border-green-500 rounded-full flex items-center justify-center animate-bounce-slow-delay1">
                    <span className="text-green-400 text-xl font-bold">N</span>
                </div>

                {/* MongoDB */}
                <div className="absolute bottom-16 left-0 w-20 h-20 bg-gray-900 border border-teal-500 rounded-full flex items-center justify-center animate-bounce-slow-delay2">
                    <span className="text-teal-400 text-xl">🍃</span>
                </div>

                {/* Express */}
                <div className="absolute bottom-16 right-0 w-20 h-20 bg-gray-900 border border-gray-500 rounded-full flex items-center justify-center animate-bounce-slow">
                    <span className="text-gray-300 text-lg font-bold">EX</span>
                </div>

                {/* JS */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-900 border border-yellow-500 rounded-full flex items-center justify-center animate-bounce-slow-delay1">
                    <span className="text-yellow-400 text-sm font-bold">JS</span>
                </div>

            </div>

        </section>
    )
}

export default Hero 