import Link from "next/link";
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";



const btnStyles = {
    btnPrimary: {
        style: "text-black [&:hover,:focus]:opacity-70",
        isFlex: true
    },
    btnSecondary: {
        style: "text-black rounded-2xl",
        isFlex: true
    },
    btnThird: {
        style: "text-black rounded-2xl",
        isFlex:true
    }
}


type ButtonType = keyof typeof btnStyles;

interface ButtonProps{
    children:ReactNode;
    styleType: ButtonType;
    className?:string;
    isLink?:boolean;
    href?:string;
    target?:string;
}

export function Button({children, styleType,className,isLink,target,href}:ButtonProps){

    const {style, isFlex} = btnStyles[styleType];
    
    const defaultClass = `py-3 px-6 bg-white text-black rounded-2xl transition-all ease-linear ${style}`;

    const combinedClass = twMerge(defaultClass, className);
    return(
         isLink && href ?(
            <Link target={target} href={href} className={`${isFlex ? "inline-flex" : "inline-block"} ${combinedClass}`}>{children}</Link>
         ): (
            <button className={`${isFlex ? "inline-flex" : "inline-block"} ${combinedClass}`}>{children}</button>
         )
    )
}