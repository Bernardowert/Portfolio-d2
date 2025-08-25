import { ContainerGRID } from "@/components/containerGRID";
import { Skills } from "./skills";



export function SectionSkills(){
    return(
        <section className=" py-14 bg-white-01">
          <ContainerGRID>
             <div className="flex items-center justify-between flex-col gap-2 tablet:gap-0 tablet:flex-row">
                <h2 className="font-bold text-black-01 text-3xl">Tecnologias</h2>
                <p className="max-w-96 font-medium text-black-01 text-sm text-center tablet:text-right">Tecnologias que uso no meu dia a dia para criar páginas para a web com agilidade, qualidade e <strong>alta perfomance.</strong></p>
             </div>
             <Skills/>
          </ContainerGRID>
         </section> 
    )
}