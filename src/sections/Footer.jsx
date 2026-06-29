import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800 px-16 py-4">
            <div className="flex flex-row justify-center md:justify-between items-center gap-3 max-w-6xl mx-auto">
                
                

                <div className="flex flex-row gap-3">
                    <a href="https://github.com/deveshchahar08" target="_blank" rel="noreferrer"
                        className="text-gray-500 hover:text-purple-400 transition">
                        <FaGithub className="text-lg" />
                    </a>
                    <a href="https://linkedin.com/in/devesh-chahar-347400219" target="_blank" rel="noreferrer"
                        className="text-gray-500 hover:text-purple-400 transition">
                        <FaLinkedin className="text-lg" />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Devesh Chahar. All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer