import { ExternalLink, Github } from "lucide-react";
import { projetos, type Projeto } from "../../data/projetos";
import { motion } from "framer-motion";
import { ImageCarousel } from "./ImageCarousel";

export default function Projetos() {
  return (
    <div className="flex justify-center items-center flex-col space-y-5">
      <motion.h1 className="text-4xl font-bold text-gray-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y:0 }} viewport={{once: true}} transition={{ duration: 0.5, ease: "easeIn" }}>
        Meus Projetos
      </motion.h1>
      <motion.h2 className="text-lg text-gray-600 text-center max-w-2xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y:0 }} viewport={{once: true}} transition={{ duration: 0.5, ease: "easeIn" }}>
        Confira alguns dos projetos que desenvolvi recentemente. Cada um representa um desafio único e uma oportunidade de aprendizado.
      </motion.h2>
      <div className="grid lg:grid-cols-2 w-full gap-10 justify-center px-6 md:px-60">
        {projetos.map((projeto : Projeto) => (
          <motion.div 
            className="bg-zinc-50 rounded-xl shadow-md hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            
          >
            <div>
              <ImageCarousel images={projeto.images} />
            </div>
            <div className="flex flex-col space-y-3 p-3 md:p-6">
              <p className="text-zinc-800 text-2xl">{projeto.name}</p>
              <p className="text-zinc-700">{projeto.description}</p>
              <ul className="flex gap-1 md:gap-2">
                {projeto.technologies.map((tech, index) => (
                  <motion.li 
                    key={index} 
                    className="text-sm text-blue-700 bg-blue-100 py-1 px-1 md:px-2 rounded-xl hover:bg-blue-200"
                    whileHover={{ scale: 1.06  }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-3">
              {projeto.demoUrl && 
                (<a href={projeto.demoUrl} target="_blank" rel="noopener noreferrer">
                <motion.button className="flex gap-1 items-center text-sm bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-800"
                  whileHover={{ scale: 1.08 }}>
                  <ExternalLink />Ver Demo
                </motion.button>
                </a>)
              }
              <a href={projeto.githubUrl} target="_blank" rel="noopener noreferrer">
                <motion.button className="flex gap-1 items-center text-sm bg-gray-300 text-gray-700 py-1 px-4 rounded-xl hover:bg-gray-400"
                  whileHover={{ scale: 1.08 }}
                >

                  <Github />Codigo
                </motion.button>
              </a>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}