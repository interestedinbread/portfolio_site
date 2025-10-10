import { projects } from "../data/projects"
import { ProjectCard } from "./ProjectCard"


export function ProjectList() {
    return(
        <>
        <div>
            <h2 className="nunito-sans-bold text-5xl my-24 text-cyan-300 text-center">Projects</h2>
            <div className="w-3/4 mx-auto grid grid-cols-1 gap-24 mt-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index}/>
                ))}
            </div>
        </div>
        </>
    )
}