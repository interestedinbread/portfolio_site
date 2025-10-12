import { useEffect, useState, useRef} from "react";

export function Nav() {

    const [scrolled, setScrolled] = useState(false);
    const [navHeight, setNavHeight] = useState(0)

    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if(navRef.current){
            setNavHeight(navRef.current.offsetHeight);
        }
    },[])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition - 20,
                behavior: 'smooth'
            });
        }

        
    };

    return(
        <>
            <nav className={`flex justify-end fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-6 ${
                scrolled 
                    ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
                }`}
                ref={navRef}
                >
                <ul className="flex gap-6 md:gap-4">
                    <li>
                        <button 
                            className="md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors source-code-pro-regular  text-sm md:text-xl"
                            onClick={() => scrollToSection('about')}
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button 
                            className="md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors source-code-pro-regular text-sm md:text-xl"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button 
                            className="md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors source-code-pro-regular text-sm md:text-xl"
                            onClick={() => scrollToSection('skills')}
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button 
                            className="md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors source-code-pro-regular text-sm md:text-xl"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
