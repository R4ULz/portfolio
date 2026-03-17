import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";

export default function ParticulasBackground() {
  const [init, setInit] = useState(false)
  
  useEffect(() => {
    initParticlesEngine(async (engine) =>{
        await loadSlim(engine);

    }).then(() => setInit(true))
  }, [])

  const options: any = {
    background: {color: {value: "transparent"}},
    fpsLimit: 60,
    Fullscreen: {enable: false},
    particles:{
        number:{value: 120, density:{enable: true}},
        color:{value: "#306cda"},
        links:{enable: true, color: "#306cda", distance: 150, opacity: 0.2, width: 1},
        move:{enable: true, speed: 1.2, outModes: {default: "out"}},
        opacity:{value: 0.5},
        size:{value: {min: 1, max: 3}},
        shape: {type: "circle"},
    },
    detectRetina: true,
  }

  if (!init) return null
  return (
    <Particles id="tsparticles" options={options} className="absolute inset-0 w-full pointer-events-none" style={{position: 'absolute'}}/>
  )
}