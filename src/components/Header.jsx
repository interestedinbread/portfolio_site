import { ReactTyped } from "react-typed"
import { techLogos } from "../data/projects"

export function Header() {

    return(
        <>
        <div className="flex w-4/5 mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-12 rounded-[2rem]">
            <div className="w-2/3">
                <h1 className="nunito-sans-bold text-8xl mb-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    Eric Morrison
                </h1>
                <h3 className="source-code-pro-regular text-4xl my-12 text-gray-300">
                    <ReactTyped
                        strings={[
                            "Full Stack Web Developer",
                            "Self-Taught Problem Solver",
                            "Building Modern Web Apps"
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        backDelay={2000}
                        showCursor={true}
                        cursorChar="|"
                    />
                </h3>
                <h4 className="source-code-pro-italic text-lg my-4 w-3/4 text-gray-300">I’m a self-taught developer who builds responsive, data-driven web apps using React, Tailwind, Node, Express, and PostgreSQL.</h4>
                <h4 className="source-code-pro-italic text-lg my-4 w-3/4 text-gray-300">I am constantly learning and absolutely LOVE a challenge. Let's build something!</h4>
                <div className="flex gap-6 mt-12">
                    {Object.values(techLogos).map((path, index) => (
                            <img key={index} 
                            className="h-[50px] w-[50px] rounded-lg" 
                            src={path}
                            alt="tech logo"
                            />
                    ))}
                </div>
            </div>
            <div>
                <img src="/img/Oaked Eric.jpg" className="rounded-lg max-h-[500px] shadow-md"></img>
            </div>
        </div>
        </>
    )
}