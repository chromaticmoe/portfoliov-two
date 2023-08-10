import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

const Contact = () => {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href= `mailto:ryan.rasuman@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:h-screen lg:pt-24 pt-12 overflow-hidden">
            <div className="text-center text-color-primary mb-20 font-bold text-4xl sm:text-5xl">Contact</div>
            <div className="flex flex-col space-y-10">
                <h4 className="text-xl sm:text-4xl text-white font-semibold text-center sm:mx-auto mx-3">
                    I have got just what you need. Let&apos;s talk!
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-color-primary h-6 w-6 animate-pulse"/>
                        <p className="text-md sm:text-xl text-white">ryan.rasuman@outlook.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-color-primary h-6 w-6 animate-pulse"/>
                        <p className="text-sm sm:text-xl text-white">+639154477334</p>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col space-y-2 w-fit mx-auto sm:text-base text-[10px]">
                        <div className="flex space-x-2">
                            <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
                            <input {...register('email')} className="contactInput" type="email" placeholder="Email"/>
                        </div>
                        <input {...register('subject')} className="contactInput" type="text" placeholder="Subject"/>

                        <textarea {...register('message')}className="contactInput h-36 resize-none overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-color-bg-variant/20 scrollbar-thumb-color-primary/80p-10" placeholder="Message"/>
                        <button
                            className="
                                bg-color-primary 
                                font-bold 
                                text-sm
                                sm:text-xl 
                                inline-block 
                                py-3 
                                px-5
                                rounded-lg
                                cursor-pointer
                                hover:bg-white
                                hover:text-color-bg
                                border-transparent
                                transition-all
                                duration-300
                                ease-in-out
                                "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Contact;