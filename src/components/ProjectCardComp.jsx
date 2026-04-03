export default function ProjectCardComp({ img, title, description, tools = [], type }) {
    return (
        <>
            {
                type == "code" ? (
                    <div className="mb-5">
                        <img src={img} className="object-cover" alt="" style={{width: "600px", height: "300px"}}/>
                        <p className="mt-3 text-2xl font-medium">{title}</p>
                        <p className="text-sm mt-1 text-gray-500">{description}</p>
                        <div className="flex flex-wrap! gap-1.5 mt-3">
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
                        <p className="text-sm mt-1 text-gray-500">{description}</p>
                        <div className="flex flex-wrap! gap-1.5 mt-3">
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