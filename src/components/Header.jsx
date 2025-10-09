
export function Header() {

    return(
        <>
        <div class="flex w-4/5 mx-auto">
            <div className="w-2/3">
                <h1 className="nunito-sans-regular text-8xl mb-4 text-cyan-400">Eric Morrison</h1>
                <h3 className="nunito-sans-regular text-4xl my-4 text-gray-300 mb-12">Full Stack Web Developer</h3>
                <h4 className="nunito-sans-italic text-xl my-4 w-3/4 text-cyan-400">I’m a self-taught developer who builds responsive, data-driven web apps using React, Tailwind, Node, Express, and PostgreSQL.</h4>
                <p className="w-2/3 nunito-sans-regular text-xl my-4 text-gray-300 leading-relaxed">Since starting my journey in February 2024, I’ve built several full-stack projects and worked with real clients — experiences that allowed me to not only build projects but to leverage my communication skills to deliver tailored, usable results.</p>
                <p className="w-2/3 nunito-sans-regular text-xl my-4 text-gray-300 leading-relaxed">I’m highly self-motivated, love solving technical challenges, and take pride in watching an idea grow from component setup to fully functional deployment.</p>
            </div>
            <div>
                <img src="/img/Oaked Eric.jpg" className="rounded-lg max-h-[500px] shadow-md"></img>
            </div>
        </div>
        </>
    )
}