import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleRunScript = () => {
    const { name, email, message } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email format.');
      return;
    }
    setError('');

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:saisushwanth17@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 font-mono">
      <SectionHeader 
        command="./contact.exe" 
        comment=""
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden mt-8 shadow-2xl">
        {/* Left side: Contact JSON info */}
        <motion.div 
          className="p-6 border-b lg:border-b-0 lg:border-r border-gray-800 bg-[#111]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center text-xs text-gray-500 mb-6 pb-2 border-b border-gray-800 uppercase tracking-widest">
            contact_info.json
          </div>
          
          <pre className="text-sm md:text-md text-gray-300 leading-loose">
<span className="text-gray-600 mr-4 select-none"> 1</span><span className="text-gray-400">{"{"}</span><br/>
<span className="text-gray-600 mr-4 select-none"> 2</span>  <span className="text-purple-300">"status"</span>: <span className="text-green-300">"open_to_work"</span>,<br/>
<span className="text-gray-600 mr-4 select-none"> 3</span>  <span className="text-purple-300">"email"</span>: [<br/>
<span className="text-gray-600 mr-4 select-none"> 4</span>    <a href="mailto:saisushwanth17@gmail.com" className="text-cyan-400 hover:underline">"saisushwanth17@gmail.com"</a><br/>
<span className="text-gray-600 mr-4 select-none"> 5</span>  ],<br/>
<span className="text-gray-600 mr-4 select-none"> 6</span>  <span className="text-purple-300">"socials"</span>: <span className="text-gray-400">{"{"}</span><br/>
<span className="text-gray-600 mr-4 select-none"> 7</span>    <span className="text-purple-300">"github"</span>: <a href="https://github.com/saisushwanth17-dot" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">"@saisushwanth17-dot"</a>,<br/>
<span className="text-gray-600 mr-4 select-none"> 8</span>    <span className="text-purple-300">"linkedin"</span>: <a href="https://www.linkedin.com/in/sushwanth-varma-1b5a55376" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">"@sushwanth-varma"</a><br/>
<span className="text-gray-600 mr-4 select-none"> 9</span>  <span className="text-gray-400">{"}"}</span>,<br/>
<span className="text-gray-600 mr-4 select-none">10</span>  <span className="text-purple-300">"location"</span>: <span className="text-green-300">"Chennai, India"</span><br/>
<span className="text-gray-600 mr-4 select-none">11</span><span className="text-gray-400">{"}"}</span><br/>
<span className="text-gray-600 mr-4 select-none">12</span><span className="text-gray-500 italic">// Waiting for connection...</span>
          </pre>
        </motion.div>

        {/* Right side: Contact TS Form mock */}
        <motion.div 
          className="p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-2 border-b border-gray-800 tracking-widest">
            <span className="text-yellow-400">_TS</span> <span>sendMessage.ts</span>
            <span className="cursor-pointer hover:text-white">×</span>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            <p className="text-gray-500 italic mb-4">// Run this script to send a message</p>
            
            <p className="text-purple-400">const <span className="text-blue-300">send</span> <span className="text-white">=</span> <span className="text-blue-300">async</span> () {"=>"} {"{"}</p>
            
            <div className="pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 w-24">const name = </span>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder='" "' 
                  className="bg-transparent border-b border-gray-700 outline-none flex-1 text-green-300 placeholder-gray-600 focus:border-cyan-400 pb-1" 
                />
                <span className="text-white">;</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-purple-400 w-24">const email = </span>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder='" "' 
                  className="bg-transparent border-b border-gray-700 outline-none flex-1 text-green-300 placeholder-gray-600 focus:border-cyan-400 pb-1" 
                />
                <span className="text-white">;</span>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <span className="text-blue-300 w-16">await</span>
                <span className="text-white">api.</span><span className="text-yellow-200">submit</span><span className="text-white">({"{"}</span>
                <div className="flex-1 space-y-2">
                  <span className="block pl-4 text-white">name,</span>
                  <span className="block pl-4 text-white">email,</span>
                  <div className="flex pl-4 w-full">
                    <span className="text-white">message: `</span>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder=" " 
                      rows={3} 
                      className="bg-transparent border border-gray-800 outline-none flex-1 text-green-300 placeholder-gray-600 focus:border-cyan-400 rounded-sm p-2 text-xs" 
                    />
                    <span className="text-white">`</span>
                  </div>
                </div>
                <span className="text-white self-end">{"});"}</span>
              </div>
            </div>
            
            <p className="text-white">{"}"}</p>

            <button 
              onClick={handleRunScript}
              className="mt-8 w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 rounded tracking-widest text-sm transition-colors uppercase"
            >
              RUN SCRIPT
            </button>
            {error && (
              <div className="mt-3 text-red-500 text-xs text-center border border-red-500/30 bg-red-500/10 p-2 rounded">
                [{error}]
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4 md:gap-0">
        <div>Sushwanth Varma | Software Engineer</div>
        <div>Built with &lt;3 using React, Tailwind & Vite</div>
        <div>© 2026. All rights reserved.</div>
      </div>
    </section>
  );
}