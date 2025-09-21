import { techLogos } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function ProjectCard(props) {
    // needs title, description, img, tech stack, links
    const { project, index } = props

    return(
        <>
        {index % 2 === 0 ? (
            <div className="flex h-[400px]">
                <div className="w-1/2 p-8">
                    <h3 className="text-cyan-400 nunito-sans-regular text-2xl">{project.title}</h3>
                    <p className="text-gray-300 nunito-sans-regular text-lg my-6">{project.description}</p>
                    <ul className="flex gap-4 mb-8">
                        {project.stack.map((item, index) => (
                            <li key={index}><img className="h-[50px] w-[50px] rounded-md" 
                            src={techLogos[item]}/></li>
                        ))}
                    </ul>
                    <p className="text-cyan-400">{project.links}</p>
                </div>
                <div className="w-1/2">
                    <img className="shadow-md rounded-lg"
                    src={project.img} />
                </div>
            </div>
        ) : (
            <div className="flex h-[400px]">
                <div className="w-1/2">
                    <img className="shadow-md rounded-lg"
                    src={project.img} />
                </div>
                <div className="w-1/2 p-8">
                    <h3 className="text-cyan-400 nunito-sans-regular text-2xl">{project.title}</h3>
                    <p className="text-gray-300 nunito-sans-regular text-lg my-6">{project.description}</p>
                    <ul className="flex gap-4 mb-8">
                        {project.stack.map((item, index) => (
                            <li key={index}><img className="h-[50px] w-[50px] rounded-md" 
                            src={techLogos[item]}/></li>
                        ))}
                    </ul>
                    <p className="text-cyan-400">{project.links}</p>
                </div>
            </div>
        )}
        </>
    )
}