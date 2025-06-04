import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { MenuIcon, X } from "lucide-react"
import { useScrollTracker } from "../hooks/useScrollTracker"

const navItems = [
    {
        name: "Home",
        href: "#hero"
    },
    {
        name: "Sobre",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Projetos",
        href: "#projects"
    },
    {
        name: "Contato",
        href: "#contact"
    },
]

export function NavBar(){
    const isScrolled = useScrollTracker()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if(isMenuOpen)
            document.body.classList.add("overflow-hidden")
        else
            document.body.classList.remove("overflow-hidden")

        return () => document.body.classList.remove("overflow-hidden")
    }, [isMenuOpen])
    
    return(
        <>
            <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-6")}>
                <div className="container flex items-center justify-between">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Mateus Gomes</span> Portfolio
                        </span>
                    </a>

                    <div className="hidden md:flex space-x-8 px-8">
                        {navItems.map((item, key) => (
                            <a href={item.href} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                        ))}
                    </div>
                        
                    <button 
                        onClick={() => setIsMenuOpen(prevState => !prevState)}
                        className="md:hidden p-2 text-foreground z-50 cursor-pointer"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24}/> : <MenuIcon size={24}/>}
                    </button>
                </div>
            </nav>
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none","z-30")}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            href={item.href} 
                            key={key} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}