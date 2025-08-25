import { CardSkills } from "@/components/cardSkills";
import html from "@/assets/icons/icon-html5.png";
import javinha from "@/assets/icons/icon-javscript.svg";
import typescript from "@/assets/icons/icon-typescript.svg";
import react from "@/assets/icons/icon-react.svg";
import nextJS from "@/assets/icons/icon-nextjs.svg";
import NodeJS from "@/assets/icons/icon-nodejs.svg";
import css from "@/assets/icons/icon-Css3.png";
import sass from "@/assets/icons/icon-sass.svg";
import postGree from "@/assets/icons/icon-postgresql.svg";
import tailwind from "@/assets/icons/icon-tailwindcss.svg";
import styledComponent from "@/assets/icons/icon-styledComponents.png";
import git from "@/assets/icons/icon-git.svg";
import wordpressCMS from "@/assets/icons/icon-wordpress.png";
import cosmiCMS from "@/assets/icons/icon-cosmic.svg";
const skills = [
     {
        imageSrc: html,
        imageAlt: "Icon HTML5",
        title: "HTML5"
    },
    {
        imageSrc: javinha,
        imageAlt: "Icon Java",
        title: "JavaScript"
    },
    {
        imageSrc: typescript,
        imageAlt: "Icon Typescript",
        title: "Typescript"
    },
    {
        imageSrc: react,
        imageAlt: "Icon React",
        title: "React"
    },
    {
        imageSrc: nextJS,
        imageAlt: "Icon NodeJS",
        title: "NodeJS"
    },
    {
        imageSrc: NodeJS,
        imageAlt: "Icon NodeJS",
        title: "NodeJS"
    },
    {
        imageSrc: postGree,
        imageAlt: "Icon Scss/Sass",
        title: "PostgreSQL"
    },
    {
        imageSrc: css,
        imageAlt: "Icon CSS3",
        title: "CSS3"
    },
    {
        imageSrc: sass,
        imageAlt: "Icon postgre",
        title: "Scss/Sass"
    },
    {
        imageSrc: tailwind,
        imageAlt: "Icon tailwind",
        title: "TailwindCSS"
    },
     {
        imageSrc: styledComponent,
        imageAlt: "Icon styledComponent",
        title: "Styled Components"
    },
    {
        imageSrc: git,
        imageAlt: "Icon git",
        title: "Git"
    },
    {
        imageSrc: wordpressCMS,
        imageAlt: "Icon wordpressCMS",
        title: "Wordpress CMS"
    },
    {
        imageSrc: cosmiCMS,
        imageAlt: "Icon Cosmic CMS",
        title: "Cosmic CMS"
    },
]
export function Skills(){
    return(
    <div className="mt-20 grid grid-cols-2 bg-white shadow-2xs gap-y-10 justify-items-center tablet:grid-cols-4 laptop:grid-cols-8 border border-white/50 rounded-2xl p-5 tablet:p-9">
         {
            skills.map(({imageSrc, imageAlt, title}, index) => (
             <CardSkills key={index} imageSrc={imageSrc} title={title} imageAlt={imageAlt} />
            ))
         }
    </div>
    )
}