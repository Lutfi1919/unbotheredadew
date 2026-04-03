import { FaLink } from "react-icons/fa";

export default function SekolahComp({logo, nama, jurusan, awalMasuk, lulus, link}) {
    return (
        <>
            <div className="flex justify-between" data-aos="fade-in">
                <div className="flex items-center">
                    <img src={logo} width={50} height={50} className="rounded-full shadow" alt="Sekolah"/>
                    <div className="ms-4 md:ms-4">
                        <a href={link} target="_blank" className="leading-5 flex items-center cursor-pointer hover:underline md:hover:opacity-100">{nama}<FaLink className="md:ms-1.5 md:mt-1.5 text-xs md:opacity-80 hover:opacity-100"/></a>
                        <p className="text-sm font-semibold opacity-60">{jurusan}</p>
                    </div>
                </div>
                <p className="">{awalMasuk} — <span className="text-[#d27b2e]">{lulus}</span></p>
            </div>
        </>
    )
}