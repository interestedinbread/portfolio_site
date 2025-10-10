import { useEffect, useState } from "react";

export function Nav() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if(element) {
            const navbarHeight = 80; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return(
        <>
            <nav className={`flex justify-end fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-6 ${
            scrolled 
                ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
                <ul className="flex gap-4">
                    <li>
                        <button className="mx-2 text-gray-300 source-code-pro-regular text-xl"
                        onClick={() => scrollToSection('about')}>
                            About Me
                        </button>
                    </li>
                        <button className="mx-2 text-gray-300 source-code-pro-regular text-xl"
                        onClick={() => scrollToSection("projects")}>
                            Projects
                        </button>
                    <li>
                        <button className="mx-2 text-gray-300 source-code-pro-regular text-xl"
                        onClick={() => scrollToSection("skills")}>
                            Skills
                        </button>
                    </li>
                    <li>
                    <button className="mx-2 text-gray-300 source-code-pro-regular text-xl"
                        onClick={() => scrollToSection("contact")}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        
        </>
    )
}