import Button from "@/app/components/button";
import { motion } from "framer-motion";

const Header: React.FC = () => {
    return ( 
        <div className='
                flex 
                flex-col 
                items-center 
                justify-center 
                h-screen 
                space-y-2 
                sm:space-y-4 
                mx-auto 
                relative'>
            <motion.div 
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='text-4xl sm:text-6xl font-bold relative text-white'>
                Hi, I'm <span className='text-color-primary relative'>Ryan</span>.
            </motion.div>
            <motion.div 
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='text-white text-lg sm:text-3xl relative'>a Full Stack Developer</motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1 }}
            >
                <Button />
            </motion.div>
        </div>
     );
}
 
export default Header;