import { motion } from "framer-motion";
import Image from "next/image";

interface SkillcardProps {
    name: string;
    image: string;
    index: number;
}

const Skillcard: React.FC<SkillcardProps> = ({
    name,
    image,
    index,
}) => {
    const delay = index * 0.1;

    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: delay }}
            className="
                flex 
                flex-col 
                items-center 
                justify-center 
                rounded-lg 
                border-2 
                border-color-primary 
                object-cover
                hover:bg-color-bg-variant
                transition-all
                duration-300
                ease-in-out 
                sm:w-24 
                sm:h-24 
                w-14 
                h-14">
            <Image 
                className="md:mt-2"
                src={image}
                alt={name}
                width="40"
                height="40"
            />
            <div className="mt-2 text-white text-sm hidden sm:block">
                {name}
            </div>
        </motion.div> 
    );
}
 
export default Skillcard;