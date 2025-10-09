import { skillsData } from "../data/skills"

export function Skills () {

    return(
        <>
            <h2 className="nunito-sans-regular text-6xl my-24 text-cyan-300 text-center">Skills</h2>
            <div className="grid grid-cols-3 grid-rows-2 w-4/5 max-4-[400px] mx-auto mt-10 gap-y-12">
                {skillsData.map((item, index) => {
                    return(
                        <div key={index}>
                            <p className="text-3xl text-cyan-300 nunito-sans-regular text-center mb-8">{item.title}</p>
                            <div className="flex mt-4 gap-8 w-max mx-auto">
                                <img src={item.icon} className="h-[125px] w-[125px]"/>
                                <ul>
                                    {item.points.map((point, index) => {
                                        return(
                                            <li key={index}
                                            className="nunito-sans-italic text-gray-300 text-xl">- {point}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        
        
        </>
    )
}