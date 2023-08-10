const Button: React.FC = () => {
    return ( 
        <a 
            href="#about"
            className="
                bg-color-primary 
                w-max 
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
            View my Portfolio ↓
        </a>
     );
}
 
export default Button;