import { contactData } from "../data/contact"

export function ContactInfo() {

    return(
        <>
            <h2 className="nunito-sans-bold text-5xl my-24 text-cyan-300 text-center">Let's Connect</h2>
            <div className="flex justify-center gap-24 w-4/5 mx-auto">
                {contactData.map((item, index) => (
                    <div key={index}
                    className="flex gap-4">
                        <img src={item.imgPath}
                        className="h-[50px] w-50[px]" />
                        <div>
                            <p className="source-code-pro-regular text-gray-300">{item.title}</p>
                            <p className="source-code-pro-regular text-gray-300">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}