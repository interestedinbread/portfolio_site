import { techLogos } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
                <div className="w-1/2 h-[400px]">
                    <Swiper 
                    spaceBetween={project.mobile? 5 : 20} 
                    slidesPerView={project.mobile ? 2 : 1}
                    modules={[Navigation]}
                    navigation={true}
                    slidesOffsetBefore={project.mobile ? 75 : 0}
                    >
                        {project.imgs.map((img, index) => (
                            <SwiperSlide key={index}
                            className="mx-auto">
                                <img src={img} 
                                className="rounded-md h-[400px]"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        ) : (
            <div className="flex h-[400px]">
                <div className="w-1/2 h-[400px]">
                    <Swiper 
                    spaceBetween={project.mobile? 5 : 20} 
                    slidesPerView={project.mobile ? 2 : 1}
                    modules={[Navigation]}
                    navigation={true}
                    slidesOffsetBefore={project.mobile ? 70 : 0}
                    >
                        {project.imgs.map((img, index) => (
                            <SwiperSlide key={index}
                            className="mx-auto">
                                <img src={img} 
                                className={project.mobile ? "rounded-lg h-[400px] border-2 border-cyan-300" : "rounded-lg h-[400px] border-2"}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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