import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function ImageCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused || images.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);  
    }, [isPaused, images.length]);

    const next = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-60 overflow-hidden rounded-t-xl group/carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <AnimatePresence initial={false} mode="wait">
                <motion.img key={index}
                    src={images[index]}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4}}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/40'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}