import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";

export function Header(){
    return(
        <header className="w-full h-20 flex items-center fixed top-0 left-0 backdrop-blur-[12px] border-b border-white/10">
            <ContainerGRID className="flex items-center justify-between">
                <strong className="text-lg">Bernardowert</strong>
                <div className="flex items-center gap-11">
                     <NavListing/>
                     <button className="hidden">Menu Hamburuger</button>
                     <Link href="#" className="inline-flex py-3 px-6 bg-white text-black rounded-2xl">Baixar Curriculo</Link>
                </div>
            </ContainerGRID>
        </header>
    )
}