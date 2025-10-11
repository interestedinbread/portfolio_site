import { ReactTyped } from "react-typed"
import { techLogos } from "../data/projects"

export function Header() {

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 w-4/5 mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-12 rounded-[2rem]">
                <div className="md:col-span-2">
                    <h1 className="nunito-sans-bold text-8xl mb-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                        Eric Morrison
                    </h1>
                    <h3 className="source-code-pro-regular text-4xl my-8 text-gray-300">
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
                </div>
                <div className="md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-3">
                    <img src="/img/Oaked Eric.jpg" className="rounded-lg shadow-md"></img>
                </div>
                <div className="md:col-span-2 mt-4">
                    <h4 className="source-code-pro-italic text-lg mb-4 w-3/4 text-gray-300">I’m a self-taught developer who builds responsive, data-driven web apps using React, Tailwind, Node, Express, and PostgreSQL.</h4>
                    <h4 className="source-code-pro-italic text-lg mt-4 w-3/4 text-gray-300">I am constantly learning and absolutely LOVE a challenge. Let's build something!</h4>
                </div>
                <div className="flex gap-6 md:col-span-2 md:mt-8">
                    {Object.values(techLogos).map((path, index) => (
                            <img key={index} 
                            className="h-[50px] w-[50px] rounded-lg" 
                            src={path}
                            alt="tech logo"
                            />
                    ))}
                </div>
        </div>
        </>
    )
}