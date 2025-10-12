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
            <h2 className="nunito-sans-bold text-4xl md:text-5xl my-18 md:my-24 text-cyan-300 text-center">Skills</h2>
            <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 w-4/5 max-4-[400px] mx-auto mt-10 gap-12">
                {skillsData.map((item, index) => {
                    return(
                        <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="bg-slate-900/50 p-6 rounded-xl backdrop-blur-sm"
                        >
                            <p className="text-xl md:text-3xl nunito-sans-bold text-center mb-8 bg-gradient-to-br from-slate-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {item.title}
                            </p>
                            <div className="flex mt-4 gap-8 w-max mx-auto">
                                <img src={item.icon} className="h-[75px] w-[75px] md:h-[125px] md:w-[125px]"/>
                                <ul>
                                    {item.points.map((point, index) => {
                                        return(
                                            <li 
                                            key={index}
                                            className="nunito-sans-italic text-gray-300 text-base md:text-xl">
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