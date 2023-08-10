interface WorkButtonProps {
    name: string;
    link?: string;
}

const WorkButton: React.FC<WorkButtonProps> = ({
    name,
    link,
}) => {
    return ( 
        <a 
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
                bg-color-primary 
                w-max 
                font-bold 
                text-xs
                sm:text-sm 
                inline-block 
                py-2
                px-4
                sm:py-3 
                sm:px-5
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
            {name}
        </a>
     );
}
 
export default WorkButton;