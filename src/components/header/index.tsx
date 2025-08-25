import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";

export function Header(){
    return(
        <header className="w-full h-20 flex items-center fixed top-0 left-0 backdrop-blur-[12px] border-b border-white/10">
            <ContainerGRID className="flex items-center justify-between">
                <strong className="text-lg">Bernardowert</strong>
                <div className="flex items-center gap-11">
                     <NavListing/>
                     <button className="hidden">Menu Hamburuger</button>
                     <Button isLink href="https://google.com.br" styleType="btnPrimary">Baixar Curriculo</Button>
                </div>

                {/* <Button styleType="btnPrimary">Entrar em contato</Button> */}
            </ContainerGRID>
        </header>
    )
}