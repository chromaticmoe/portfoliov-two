import { motion } from "framer-motion";
import LeftAbout from "./left-about/left-about";
import RightAbout from "./right-about/right-about";

const About: React.FC = () => {
    return ( 
        <div className="lg:h-screen lg:pt-24 pt-12">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center text-color-primary mb-20 font-bold text-4xl sm:text-5xl">About</motion.div>
            <div 
                className="
                    lg:grid
                    lg:grid-cols-2
                    lg:gap-x-12
                    xl:gap-x-24
                    items-center 
                    lg:justify-between 
                    sm:container
                    lg:px-24
                    px-6
                    mx-auto"
            >
                <LeftAbout />
                <RightAbout />
            </div>
            
        </div>
     );
}
 
export default About;