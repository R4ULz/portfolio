import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, MoveDown } from "lucide-react";
import { useRef, useState } from "react";
import ParticulasBackground from "./particulas";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useSpring(mouseX, { stiffness: 300, damping: 40 })
  const y = useSpring(mouseY, { stiffness: 300, damping: 40 })

  function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div ref={ref} id="hero-container" onMouseMove={handleMouseOver} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='relative min-h-screen w-full bg-indigo-950 flex flex-col md:flex-row items-center overflow-hidden justify-center px-10 py-10 md:px-35 gap-20'>
      <ParticulasBackground />
      <motion.div className="pointer-events-none absolute"
        style={{
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
          width: 300,
          height: 300,
          borderRadius: 9999,
          filter: "blur(90px)",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0.08) 35%, transparent 70%)",
          opacity: isHover ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}/>
      <div className="md:w-1/2 space-y-4 relative z-10">
        <motion.p className="text-2xl text-indigo-500 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
        >Desenvolvedor Javascript</motion.p>
        <motion.p 
          className="text-5xl lg:text-7xl flex justify-center text-white font-montserrat font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}  
        >Olá, sou Raul Araujo</motion.p>
        <motion.p 
          className="text-zinc-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >Desenvolvedor apaixonado por criar experiências digitais incríveis. Especializado em React, Node.js e TypeScript, transformando ideias em soluções web modernas e eficientes.</motion.p>
        <motion.div className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
        >
            <button className=" bg-white text-indigo-950 px-4 py-2 rounded-md mr-2 gap-1 flex items-center transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">Ver Projetos <MoveDown size={15} className="animate-bounce"/></button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">Entrar em contato</button>
        </motion.div>
        <motion.div className="flex gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <button className="text-zinc-400 hover:text-zinc-50"><Github /></button>
          <button className="text-zinc-400 hover:text-zinc-50"><Linkedin /></button>
          <button className="text-zinc-400 hover:text-zinc-50"><Mail /></button>
        </motion.div>
      </div>
      <motion.div className=" relative z-10 w-72 h-96 flex items-center justify-center group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
      >
        <motion.div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, rgba(99,112,241,0.6) 0%, rgba(99,102,241,0.2) 50%, transparent 75%)",
            filter:"blur(20px)",
            zIndex: -1
          }}
          whileHover={{scale: 2}}
        />
        <motion.img 
          src="/20251025_155345.jpg" 
          alt="Raul Araujo" 
          className="rounded-2xl h-full w-full overflow-hidden object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          whileHover={{scale:1.05}}
        />
      </motion.div>
    </div>
  )
}