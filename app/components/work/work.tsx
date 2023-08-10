import { motion } from "framer-motion";
import WorkCard from "./workcard";
import worklist from "./worklist";

const Work = () => {
    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="lg:h-screen lg:pt-24 pt-12 overflow-hidden">
            <div className="text-center text-color-primary mb-20 font-bold text-4xl sm:text-5xl">Work</div>
            <div className="flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center ">
                <div className="relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-color-bg-variant/20 scrollbar-thumb-color-primary/80p-10 snap-x snap-mandatory">
                    {worklist.map((work) => (
                        <WorkCard 
                            key={work.name}
                            name={work.name}
                            image={work.image}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
     );
}
 
export default Work;