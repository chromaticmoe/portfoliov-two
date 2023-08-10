import { motion } from "framer-motion";
import Image from "next/image";

const LeftAbout: React.FC = () => {
    return ( 
        <motion.div 
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-5 lg:mb-auto mb-5">
            <Image 
                src="/images/ryan-photo.png"
                alt="Ryan Picture"
                height={300}
                width={300}
            />
            <div className="text-white text-center leading-loose">
            A dedicated programmer who spends his days coding and debugging. As someone who found passion for programming and software development, I've been constantly striving to improve my skills and take on new and challenging projects. In my free time, I continue to study and pick-up new technologies, new skill sets, and new ways to tackle the daily challenges of being a programmer. I unwind by playing video games and reading books.
            </div>
        </motion.div>
     );
}
 
export default LeftAbout;