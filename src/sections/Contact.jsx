import React, {useState} from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail, HiOutlineLocationMarker} from 'react-icons/hi'

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message:''})
    const [sent, setSent] = useState(false)

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch('https://portfolio-backend-n8na.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (data.success) {
            setSent(true)
        } else {
            alert('Something went wrong. Please try again.')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Failed to send message. Please check your connection.')
    }
}

    return(
        <section id='contact' className='px-16 py-20 bg-gray-950 text-white '>
            <h2 className='text-3xl font-bold mb-2'>Contact</h2>
            <div className='w-16 h-1 bg-purple-500 mb-10'></div>

            <div className='grid grid-cols-2 gap-16 max-w-6xl ml-[100px]'>

                {/* left */}

                <div className='flex flex-col justify-center '>
                    <h3 className='text-4xl font-bold mb-3 leading-tight'>let's Build Something <span className='text-purple-400'>Epic</span></h3>
                    <p className='text-gray-400 text-sm mb-8 leading-relaxed'>Weather you have a question abiut  my work or just want to talk about tech - reach out. i'm currentrly open to full timr roles and freelance opportunities</p>
                     
                   <div className='flex flex-col gap-4 mb-8'>
                        <div className='flex items-center gap-4 border border-gray-800 rounded-lg px-4 py-3'> 
                            <HiOutlineMail className='text-purple-400 text-xl' />
                         <div>
                            <p className='text-gray-500 text-xs uppercase tracking-widest'>Email ame  at</p>
                            <p className='text-white text-sm'>deveshchahar08@gmail.com</p>
                        </div>
                     </div>
                     <div className='flex items-center gap-4 border border-gray-800 rounded-lg px-4 py-3'>
                        <HiOutlineLocationMarker className='text-purple-400 text-xl'/>
                        <div>
                          <p className='text-gray-500 text-xs uppercase tracking-widest'>Based in</p>
                          <p className='text-white text-sm'>Jaipur, Rajasthan, India </p>
                        </div>
                     </div>
                </div>
                 <div className='flex gap-4'>
                <a href="https://github.com/deveshchahar08" target='_blank' rel='noreferrer' className='border border-gray-800 p-3 rounded-lg hover:border-purple-500 transition '>
                <FaGithub className='text-white text-xl'/>
                </a>
                <a href="https://linkedin.com/in/devesh-chahar-347400219" target='_blank' rel='noreferrer' className='border border-gray-800 p-3 rounded-lg hover:border-purple-500 transition'>
                <FaLinkedin className='text-white text-xl'/>
                </a>
            </div>
            </div>

           

        {/* Right form */}

        <div className='bg-gray-950 p-8 rounded-xl border border-gray-800 '>
            {sent ?(
                <p className='text-purple-400 font-semibold text-lg'>✅ Message has been sent! i'll be get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div>
                        <label className='text-gray-500 text-xs uppercase tracking-widest mb-2 block'>Your Name</label>
                        <input type="text" name='name' placeholder='John Doe' value={formData.name} onChange={handleChange} required
                        className='w-full bg-black text-white px-4 py-3 rounded-lg outline-none border border-gray-800 focus:border-purple-500 transition' />
                    </div>
                    <div>
                        <label className='text-gray-500 text-xs uppercase tracking-widest mb-2 block'>Email Adrdess </label>
                        <input type="email" name='email' placeholder='johndoe@example.com' value={formData.email} onChange={handleChange} required
                        className='w-full bg-black text-white px-4 py-3 rounded-lg outline-none border border-gray-800 focus:border-purple-500 transition' />
                    </div><div>
                        <label className='text-gray-500 text-xs uppercase tracking-widest mb-2 block'>Message</label>
                        <textarea type="text" name='message' placeholder='Tell me about your project...' value={formData.message} onChange={handleChange} required rows={6}
                        className='w-full bg-black text-white px-4 py-3 rounded-lg outline-none border border-gray-800 focus:border-purple-500 transition'/>
                    </div>
                    <button type='submit' className='w-full bg-indigo-200 hover:bg-indigo-300 text-indigo-900 font-semibold py-3 rounded-lg transition'>Transit Message</button>
                </form>                
            )}
        </div>
            
            </div>  
        </section>
    )
}

export default Contact