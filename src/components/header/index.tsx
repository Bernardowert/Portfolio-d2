import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import { Menu } from 'lucide-react';

export function Header(){
    return(
        <header className="w-full h-20 flex items-center fixed top-0 left-0 backdrop-blur-[12px] border-b border-white/10">
            <ContainerGRID className="flex items-center justify-between">
                <strong className="text-lg">Bernardowert</strong>
                <div className="hidden tablet:flex tablet:items-center tablet:gap-11">
                     <NavListing/>
                     <Button isLink href="https://google.com.br" styleType="btnPrimary">Baixar Curriculo</Button>
                </div>
                 <button className="inline-block tablet:hidden" aria-label="Menu para abrir painel mobile">
                    <Menu />
                 </button>
            </ContainerGRID>
        </header>
    )
}