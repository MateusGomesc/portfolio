import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackground/>
            <NavBar/>
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
            </main>
        </div>
    )
}