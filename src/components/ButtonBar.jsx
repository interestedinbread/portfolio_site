// Add button links to download resume or visit linkedIn profile

export function ButtonBar() {

    return(
        <div className="flex gap-8 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 w-max p-4 mx-auto mt-16">
            <a className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm md:text-xl source-code-pro-regular p-2 md:px-6 md:py-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg"
                href={`${import.meta.env.BASE_URL}Eric_Morrison_Resume.pdf`}
                download="Eric_Morrison_Resume.pdf">
                Download my CV</a>
            <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm md:text-xl source-code-pro-regular p-2 md:px-6 md:py-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg">View my LinkedIn</button>
        </div>
    )
}