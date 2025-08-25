import Image from "next/image";

interface CardSkillsProps{
    imageSrc: string;
    imageAlt:string;
    title:string;
}

export function CardSkills({imageSrc, imageAlt, title}:CardSkillsProps){
    return(
        <div className="w-full max-w-20">
             
             <div className="w-full max-w-16 h-16 flex items-center mx-auto justify-center">
                <Image
                 src={imageSrc}
                 alt={imageAlt}
                 title={imageAlt}
                />
             </div>
              <h3 className="font-bold text-black-01 text-center mt-3">{title}</h3>
        </div>
    )
}