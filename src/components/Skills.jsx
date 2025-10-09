import { skillsData } from "../data/skills"
import { motion } from 'framer-motion'

export function Skills () {

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    }

    return(
        <>
            <h2 className="nunito-sans-regular text-6xl my-24 text-cyan-300 text-center">Skills</h2>
            <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-3 grid-rows-2 w-4/5 max-4-[400px] mx-auto mt-10 gap-y-12">
                {skillsData.map((item, index) => {
                    return(
                        <motion.div 
                        key={index}
                        variants={itemVariants}
                        >
                            <p className="text-3xl text-cyan-300 nunito-sans-regular text-center mb-8">{item.title}</p>
                            <div className="flex mt-4 gap-8 w-max mx-auto">
                                <img src={item.icon} className="h-[125px] w-[125px]"/>
                                <ul>
                                    {item.points.map((point, index) => {
                                        return(
                                            <li 
                                            key={index}
                                            className="nunito-sans-italic text-gray-300 text-xl">
                                                - {point}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        
        
        </>
    )
}