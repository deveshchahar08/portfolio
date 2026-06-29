import React from 'react'

const Education = () => {
    return (
        <section id="education" className="px-16 py-20 bg-black text-white ">
            <h2 className="text-3xl font-bold mb-2">Education</h2>
            <div className="w-16 h-1 bg-purple-500 mb-10"></div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-5 max-w-3xl flex items-center gap-5 w-[500px]">
                <div className="bg-purple-600/10 border border-purple-600 p-3 rounded-lg">
                    <span className="text-2xl">🎓</span>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold mb-1">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-purple-400 text-sm mb-1">University of Technology</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">2021 - 2024</p>
                </div>
            </div>
        </section>
    )
}

export default Education