
export function AboutMe() {
    return(
        <>
            <h2 className="nunito-sans-bold text-5xl my-24 text-cyan-300 text-center">About Me</h2>
            <div className="flex gap-18 w-4/5 mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-12 rounded-[2rem]">
                <img src="/img/Oaked Eric.jpg"
                className="rounded-lg max-h-[500px] shadow-md"/>
                <div>
                    <p className="nunito-sans-regular text-lg my-4 leading-relaxed text-gray-300">I’ve always been a communicator first. Writing, research, and reasoning have been my strongest skills throughout my academic and professional life. On the way to earning my BA in Literature and History, I explored many subjects from Psychology and Law to Philosophy and Film Studies — disciplines that all rely on one core skillset: the ability to learn, interpret, and articulate clearly.</p>
                    <p className="nunito-sans-regular text-lg my-4 leading-relaxed text-gray-300">Programming entered my life much later, almost by accident. For years, I assumed it wouldn't suit me— until I tried it and discovered how naturally it aligned with what I already loved: learning, problem-solving, and assembling ideas elegantly. The logical structure and creative potential of programming hooked me.</p>
                    <p className="nunito-sans-regular text-lg my-4 leading-relaxed text-gray-300">From 2013 to 2023, I lived in Shanghai, teaching English, History, and Literature to students of all ages. That experience taught me a profound lesson: people thrive when given ownership of their learning process. I’ve applied that same principle to my programming journey — by building real projects, exploring new tools, and teaching myself through practice.</p>
                    <p className="nunito-sans-regular text-lg my-4 leading-relaxed text-gray-300">My goals now are the same as when I started: to learn more, build more, and be a part of this exciting industry and community.</p>
                </div>
            </div>
        </>
    )
}