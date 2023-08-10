import Image from "next/image";
import WorkButton from "./workbutton";
import { motion } from "framer-motion";

interface SkillcardProps {
    name: string;
    image: string;
}

const WorkCard: React.FC<SkillcardProps> = ({
    name,
    image
}) => {
    return ( 
        <div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center mb-12">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <Image 
                    className="md:mt-2 hover:scale-110 transition-transform sm:px-0 px-3"
                    src={image}
                    alt={name}
                    width="500"
                    height="500"
                />
            </motion.div>
            
            <h3 className="text-lg sm:text-2xl text-white font-bold">{name}</h3>
            <div className="flex flex-row space-x-5">
                <WorkButton name="Github"/>
                <WorkButton name="Live Page"/>
            </div>
        </div>
     );
}
 
export default WorkCard;