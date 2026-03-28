import {  Github, Linkedin, Mail, MapPin,  Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import { useRef, useState } from "react";

export default function Footer() {

    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("sending")

        emailjs.sendForm(
            "service_qk4o9ds",
            "template_uk1xuzm",
            formRef.current!,
            "h5Lsk-Ubsa1840DSp"
        )
        .then(() => {
            setStatus("success")
            formRef.current?.reset()
            setStatus("idle")
        }, () => {
            setStatus("error")
        })
    }

    return (
        <div className="relative w-full bg-slate-950 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
            <div className="absolute top-[30%] right-[-5%] w-100 h-100 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-150 h-150 rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full md:px-20 lg:px-60 py-20">
                    <motion.div className="w-full px-10 lg:px-0 lg:w-1/2 space-y-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{opacity: 1, x:0}}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-zinc-100 flex flex-col text-6xl">Vamos trabalhar <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">juntos?</span></h1>
                        <p className="text-zinc-100 text-xl">Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.</p>
                        <div className="space-y-5">
                            <motion.div className="flex text-zinc-50 gap-3 w-50"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
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
                            <motion.div className="flex text-zinc-50 gap-3 w-50"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                                whileHover={{x:10}}
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <Phone className="size-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Telefone</p>
                                    <p className="hover:text-blue-400 transition-colors">+55 11 98935-5294</p>
                                </div>
                            </motion.div>
                            <motion.div className="flex text-zinc-50 gap-3 w-50"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
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
                        </motion.div>
                    </motion.div>
                    <motion.div className=" w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{opacity: 1, x:0}}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="flex">
                            <motion.form 
                                ref={formRef} 
                                onSubmit={handleSubmit}
                                className="flex flex-col space-y-2 w-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                <motion.label 
                                htmlFor="name" className="text-zinc-100"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    Nome
                                </motion.label>
                                <motion.input 
                                    type="text" id="name" name="from_name"
                                    placeholder="Seu nome" 
                                    className="w-full p-2 rounded-md bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-zinc-50 focus:ring-zinc-50"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                />
                                <motion.label 
                                    htmlFor="email" className="text-zinc-100 mt-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                >
                                    Email
                                </motion.label>
                                <motion.input 
                                    type="email" id="email" name="from_email" 
                                    placeholder="Seu email" 
                                    className="w-full p-2 rounded-md bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500  focus:ring-blue-500"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                />
                                <motion.label 
                                    htmlFor="message" className="text-zinc-100 mt-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                >
                                    Mensagem
                                </motion.label>
                                <motion.textarea 
                                    id="message" rows={6} name="message" placeholder="Sua mensagem" className="w-full p-2 rounded-md bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500  focus:ring-blue-500 resize-none"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                />
                                <motion.button 
                                    type="submit"  
                                    disabled={status === "sending"}
                                    className="mt-4 bg-linear-to-r to-blue-700 from-purple-600 hover:bg-linear-to-r hover:to-blue-800 hover:from-purple-700 text-white py-2 px-4 rounded-md transition-colors flex justify-center items-center gap-2 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                                    >
                                        {status === "sending" ? "Enviando..." :   
                                        status === "success" ? "✅ Enviado!" :   
                                        status === "error"   ? "❌ Erro, tente novamente" :   
                                        <><Send className="size-4" /> Enviar Mensagem</>}
                                    </motion.button>
                            </motion.form>
                        </div>
                    </motion.div>
                </div>
                <div className="w-3/4 border-t border-slate-700">
                    <motion.p 
                        className="text-md text-slate-500 text-center mt-5 px-10 py-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                    >
                        © 2026 Raul Araujo. Todos os direitos reservados.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}