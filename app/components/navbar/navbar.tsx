import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BiCodeBlock } from 'react-icons/bi';

const Navbar = () => {

    return ( 
        <nav 
            className='
                bg-black/30 
                z-40 
                w-max 
                py-3 
                px-7 
                fixed 
                flex 
                gap-3 
                rounded-[32px] 
                backdrop-blur-[15px]
                transform 
                -translate-x-1/2
                left-1/2
                bottom-6
                '>
            <a href='#' className=' hbg-transparent p-4 flex hover:opacity-80 text-color-primary '><AiOutlineHome /></a>
            <a href='#about' className='bg-transparent p-4 flex hover:opacity-80 text-color-primary '><AiOutlineUser /></a>
            <a href='#work' className='bg-transparent p-4 flex hover:opacity-80 text-color-primary '><BiCodeBlock /></a>
            <a href='#contact' className='bg-transparent p-4 flex hover:opacity-80 text-color-primary '><AiOutlineMessage /></a>
        </nav>
     );
}
 
export default Navbar;