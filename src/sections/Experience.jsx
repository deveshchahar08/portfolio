const Experience = () => {
    return (
        <section id="experience" className="px-16 py-20 bg-gray-950 text-white">
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <div className="w-16 h-1 bg-purple-500 mb-10"></div>

            <div className="relative max-w-3xl pl-8">
                {/* Vertical line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gray-700"></div>

                <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-purple-600 ring-4 ring-black"></div>

                    {/* Card */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-4 w-[500px]">
                        <h3 className="text-white text-lg font-semibold mb-1">MERN Stack Developer Intern</h3>
                        <p className="text-purple-400 text-sm mb-1">REGex Software</p>
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">May 2025 - Nov 2025 · 6 Months</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            Worked on full-stack web applications using MongoDB, Express, React and Node.js.
                            Collaborated on building RESTful APIs, integrating frontend with backend services,
                            and following modern development practices.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">React.js</span>
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Node.js</span>
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Express.js</span>
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">MongoDB</span>
                            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">REST API</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience