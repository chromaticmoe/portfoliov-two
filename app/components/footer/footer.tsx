import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <footer className="bg-color-primary py-12 mt-28 text-center text-sm">
            <a href='#' className='text-color-bg text-2xl mb-8 inline-block font-bold hover:text-white transition-all duration-300 ease-in-out'>Ryan Rasuman</a>

            <div className='flex justify-center gap-4 mb-16'>
                <a href="https://www.linkedin.com/in/ryan-rasuman/" target="_blank" rel="noopener noreferrer" className='bg-color-bg text-white p-3 rounded-xl flex border-transparent hover:bg-transparent hover:text-color-bg transition-all duration-300 ease-in-out cursor-pointer' ><AiFillLinkedin size={40}/></a>
                <a href="https://github.com/chromaticmoe" target="_blank" rel="noopener noreferrer" className='bg-color-bg text-white p-3 rounded-xl flex border-transparent hover:bg-transparent hover:text-color-bg transition-all duration-300 ease-in-out cursor-pointer' ><AiFillGithub size={40}/></a>
                <a href="https://twitter.com/chromaticmoe" target="_blank" rel="noopener noreferrer" className='bg-color-bg text-white p-3 rounded-xl flex border-transparent hover:bg-transparent hover:text-color-bg transition-all duration-300 ease-in-out cursor-pointer' ><AiFillTwitterCircle size={40}/></a>
            </div>

            <div className='mb-16'>
                <small>&copy; RYAN RASUMAN. All rights reserved.</small>
            </div>
        </footer>
     );
}
 
export default Footer;