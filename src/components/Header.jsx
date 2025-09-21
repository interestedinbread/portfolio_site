
export function Header() {

    return(
        <>
        <div class="flex w-4/5 mx-auto">
            <div className="w-2/3">
                <h1 className="nunito-sans-regular text-7xl my-4 text-cyan-400">Eric Morrison</h1>
                <h3 className="nunito-sans-regular text-4xl my-4 text-cyan-400">Self Taught Full Stack Developer</h3>
                <h4 className="nunito-sans-regular text-2xl my-4 text-cyan-400">I make websites and apps using React, Tailwind, Node, Express, Postgres</h4>
                <p className="w-2/3 nunito-sans-regular text-xl my-4 text-gray-300 leading-relaxed">I have been teaching myself programming since March 2024, and in that time I have learned an enormous amount.
                    I take great satisfaction in building projects and watching them go to work. I am an excellent communicator 
                    and I shine when interacting with clients. I love setting upcomponents, front end API's, and backend endpoints
                    and seeing the whole thing come together.  </p>
            </div>
            <div>
                <img src="/img/Oaked Eric.jpg" className="rounded-lg max-h-[500px] shadow-md"></img>
            </div>
        </div>
        </>
    )
}