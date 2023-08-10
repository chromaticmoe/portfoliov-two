import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <footer className="bg-color-primary py-12 mt-28 text-center text-sm">
            <a href='#' className='text-color-bg text-2xl mb-8 inline-block font-bold'>Ryan Rasuman</a>

            <div className='flex justify-center gap-4 mb-16'>
                <a className='bg-color-bg text-white p-3 rounded-xl flex border-transparent' ><AiFillLinkedin size={40}/></a>
                <a className='bg-color-bg text-white p-3 rounded-xl flex border-transparent' ><AiFillGithub size={40}/></a>
                <a className='bg-color-bg text-white p-3 rounded-xl flex border-transparent' ><AiFillTwitterCircle size={40}/></a>
            </div>

            <div className='mb-16'>
                <small>&copy; RYAN RASUMAN. All rights reserved.</small>
            </div>
        </footer>
     );
}
 
export default Footer;