import { useState } from "react"

export default function ProjectCardComp({ img, title, description, tools = [], type, repo }) {
    const [isHovered, setIsHovered] = useState(false);

    const imgStyle = {
        filterBlur: isHovered ? 'blur(8px)' : 'blur(0px)',
        width: '522px',
        height: '300px',
    }

    return (
        <>
            {
                type == "code" ? (
                    <div className="mb-5">
                        <div className="relative overflow-hidden cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <img src={img} className="object-cover img-code" alt={title} style={imgStyle} />
                            <div className={`absolute inset-0 flex items-center justify-center bg-black/80 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                <a href={repo} target="_blank" className="text-white font-bold text-xl px-4 text-center">
                                    Lihat Repositori
                                </a>
                            </div>
                        </div>
                        <p className="mt-3 text-2xl font-medium">{title}</p>
                        <p className="text-sm mt-1 opacity-75">{description}</p>
                        <div className="flex flex-wrap! gap-1.5 mt-3 cursor-pointer">
                            {
                                tools.map((tool, index) => (
                                    <span key={index} className="w-fit rounded-full bg-[#302f2c] text-[#f2f1ef] duration-300 hover:bg-[#f2f1ef] hover:text-[#302f2c] border text-xs px-3 py-1">{tool}</span>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="mb-5">
                        <img src={img} className="object-cover" alt=""  style={{width: "600px", height: "300px"}}/>
                        <p className="mt-3 text-2xl font-medium">{title}</p>
                        <p className="text-sm mt-1 opacity-75">{description}</p>
                        <div className="flex flex-wrap! gap-1.5 mt-3 cursor-pointer">
                            {
                                tools.map((tool, index) => (
                                    <span key={index} className="w-fit rounded-full bg-[#302f2c] text-[#f2f1ef] duration-300 hover:bg-[#f2f1ef] hover:text-[#302f2c] border text-xs px-3 py-1">{tool}</span>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}