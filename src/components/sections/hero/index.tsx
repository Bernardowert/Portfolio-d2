import { Button } from "@/components/buttons";
import { ContainerGRID } from "@/components/containerGRID";
import Image from "next/image";
import userImg from "@/assets/photos/photoTwo.jpeg";

const btns = [
  {
    text: "Baixar Curriculo",
    href: "#",
  },
  {
    text: "Enviar email",
    href: "#",
  }
]
export function SectionHero(){
    return(
                 <section className="py-40">
                <ContainerGRID className="flex-col gap-6 laptop:flex-row flex items-center justify-between">
                    <div className="w-full text-center laptop:text-left laptop:max-w-text-hero">
                        <span className="text-lg font-medium">Olá, Me chamo Bernardo👋🏻</span>
                        <h1 className="text-4xl tablet:text-6xl font-bold my-5">Desenvolvedor FullStack</h1>
                        <p className="text-lg text-white/85 mb-6">Trabalhei em diversos projetos front-end, desde pequenos websites até grandes aplicações web. Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes.</p>
                        <div className="flex items-center gap-3.5 justify-center laptop:justify-start">
                            {
                                btns.map(({text,href}, index) => (
                                    <Button key={index} styleType="btnPrimary" isLink href={href}>{text}</Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full max-w-[498px] border border-white/15 h-image-hero rounded-2xl overflow-hidden">
                        <Image
                         src={userImg}
                         alt="Imagem de Bernardo"
                         title="Bernardo"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </ContainerGRID>
                 </section>
    )
}