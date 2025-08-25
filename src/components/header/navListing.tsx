import Link from "next/link";


const linksNav = [
     {
        text: "Home",
        href: "#",
     },
     {
        text: "Sobre",
        href: "#",
     },
     {
        text: "Projetos",
        href: "#",
     },
     {
        text: "Projetos",
        href: "#",
     }
]

export function NavListing(){
    return(
        <nav className="flex items-center gap-4">
            {
                linksNav.map(({text,href}, index) => (
                    <Link key={index} href={href} className="transition-colors ease-linear [&:hover,&:focus]:text-amber-400">
                    {text}
                    </Link>
                )) 
            }
        </nav>
    )
}