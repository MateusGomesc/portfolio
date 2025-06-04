import { ArrowUp } from "lucide-react";

export function Footer(){
    return(
        <footer className="pb-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Mateus Gomes Costa. Todos os direitos reservados.</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp size={20}/></a>
        </footer>
    )
}