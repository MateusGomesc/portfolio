import { Code, Server, User } from "lucide-react";
import Curriculo from '../../public/curriculo.pdf'

export function AboutSection(){
    return(
        <section id="about" className="py-24 px-4 md:px-32 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">mim</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Desenvolvedor Apaixonado por Tecnologia e Criação</h3>
                    <p className="text-muted-foreground">
                        Com mais de 2 anos de experiência em desenvolvimento web, sou especialista na criação de aplicações responsivas, acessíveis e de alta performance, utilizando as tecnologias mais modernas do mercado.
                    </p>
                    <p className="text-muted-foreground">
                        Sou movido pelo desafio de encontrar soluções elegantes para problemas complexos e estou sempre aprendendo para me manter na vanguarda de um cenário web em constante evolução.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Entre em contato</a>
                        <a href="./public/curriculo.pdf" download={Curriculo} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                                <p className="text-muted-foreground">Criação de sites e aplicações web responsivas com frameworks modernos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Desenho de interfaces de usuário intuitivas e experiências de uso fluidas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Server className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">API e Backend</h4>
                                <p className="text-muted-foreground">Desenvolvimento de APIs RESTful robustas e escaláveis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}