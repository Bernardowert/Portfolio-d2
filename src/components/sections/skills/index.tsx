import { ContainerGRID } from "@/components/containerGRID";

export function SectionSkills(){
    return(
            <section className=" py-14 border-t border-white/20">
          <ContainerGRID>
             <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl">Meus diferenciais</h2>
                <p className="max-w-96 font-medium"><strong>Transformo design</strong> em páginas para a web com agilidade, qualidade e <strong>alta perfomance.</strong></p>
             </div>
             <div>
                  <div className="w-full max-w-96 h-52 bg-white rounded-2xl">
                     exemplo
                  </div>
             </div>
          </ContainerGRID>
         </section> 
    )
}