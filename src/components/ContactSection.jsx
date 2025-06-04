import { Instagram, Linkedin, MailIcon, MapPin, PhoneIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from '../hooks/use-toast';
import { Description } from "@radix-ui/react-toast";
import { useState } from "react";

export function ContactSection(){
    const { toast } = useToast()
    const { isSubmitting, setIsSubmitting } = useState(false)

    const handleSubmit = () => {
        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your Message!"
            })
        }, 1500)
    }

    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em <span className="text-primary">Contato</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tem um projeto em mente ou gostaria de colaborar? Fique à vontade para me contatar. Estou sempre aberto a discutir novas ideias e oportunidades.    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Informações de contato</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-start">Email</h4>
                                    <a href="mailto:mateuscostagomes000@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mateuscostagomes000@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-start">Telefone</h4>
                                    <a href="tel:+5534999864372" className="text-muted-foreground hover:text-primary transition-colors">+55 (34) 99986-4372</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-start">Localização</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Uberlândia, MG, Brasil</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Conecte-se comigo</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank" className="hover:text-primary transition-colors duration-200"><Linkedin/></a>
                                <a href="#" target="_blank" className="hover:text-primary transition-colors duration-200"><Instagram/></a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs ">
                        <h3 className="text-3xl font-semibold mb-6">Mande uma Mensagem</h3>
                        <form onSubmit={handleSubmit} action="mailto:mateuscostagomes000@gmail.com" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Seu nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="Escreva seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Seu email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="Escreva seu email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Sua mensagem</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Escreva sua mensagem"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer")}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar mensagem"} <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>         
            </div>
        </section>
    )
}