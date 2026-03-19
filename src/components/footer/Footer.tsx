import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {motion} from "framer-motion";

export default function Footer() {
    return (
        <div className="relative w-full bg-slate-950 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
            <div className="absolute top-[30%] right-[-5%] w-100 h-100 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-150 h-150 rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="flex gap-10 items-center justify-between w-full px-10 md:px-60 py-20">
                    <motion.div className="w-1/2 space-y-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{opacity: 1, x:0}}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-zinc-100 flex flex-col text-6xl">Vamos trabalhar <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">juntos?</span></h1>
                        <p className="text-zinc-100 text-xl">Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.</p>
                        <div className="space-y-5">
                            <motion.div className="flex text-zinc-50 gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                whileHover={{x:10}}
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <Mail className="size-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Email</p>
                                    <a href="mailto:raul.zc45@gmail.com" className="hover:text-blue-400 transition-colors">raul.zc45@gmail.com</a>
                                </div>
                            </motion.div>
                            <motion.div className="flex text-zinc-50 gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                whileHover={{x:10}}
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <Phone className="size-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Telefone</p>
                                    <a href="tel:+5511999999999" className="hover:text-blue-400 transition-colors">+55 11 98935-5294</a>
                                </div>
                            </motion.div>
                            <motion.div className="flex text-zinc-50 gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                whileHover={{x:10}}
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <MapPin className="size-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Localização</p>
                                    <p className=" transition-colors">São Paulo, Brasil</p>
                                </div>
                            </motion.div>

                        </div>
                        <motion.div className="flex gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                        >
                            <a href="https://github.com/R4ULz" target="_blank" rel="noopener noreferrer">
                                <button className="text-zinc-400 hover:text-zinc-50 cursor-pointer size-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center"><Github className="size-5"/></button>
                            </a>
                            <a href="https://www.linkedin.com/in/raularaujo45/" target="_blank" rel="noopener noreferrer">
                                <button className="text-zinc-400 hover:text-zinc-50 cursor-pointer size-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center"><Linkedin /></button>
                            </a>
                            <a href="mailto:raul.zc45@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button className="text-zinc-400 hover:text-zinc-50 cursor-pointer size-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center"><Mail /></button>
                            </a>
                        </motion.div>
                    </motion.div>
                    <div className="bg-blue-400 w-1/2">
                        asdasda
                    </div>
                </div>
            </div>
        </div>
    )
}