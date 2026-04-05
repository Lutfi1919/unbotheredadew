import "./App.css";
import headerImage from './assets/bradpitt/siapa.jpeg';
import fotoBradpitt from './assets/bradpitt/silutpi.jpeg';
import MarqueeComp from "./components/MarqueeComp";
import SekolahComp from "./components/SekolahComp";
import logoSMK from './assets/education/wikrama-logo.png';
import logoSD from './assets/education/harjasari-logo.png';
import logoSMP from './assets/education/amaliah-logo.png';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import code1 from './assets/projects/portoke2.png';
import code2 from './assets/projects/portoke3.png';
import code3 from './assets/projects/webosis.png';
import code4 from './assets/projects/todoapp.png';
import code5 from './assets/projects/iqra.png';
import desain1 from './assets/projects/desain1.png';
import desain2 from './assets/projects/desain2.png';
import desain3 from './assets/projects/desain3.png';
import desain4 from './assets/projects/desain4.png';
import desain5 from './assets/projects/webosis.png';
import ProjectCardComp from "./components/ProjectCardComp";
import CircularGallery from './components/CircularGallery';
import { useState } from "react";
import ContactComp from "./components/ContactComp";
import MusicComp from "./components/MusicComp";
import { HiCursorClick } from "react-icons/hi";
import ClickSpark from "./components/ClickSpark";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const myProjects = [
    {
      img: code1,
      title: "Portfolio Web V2",
      description: "Project ini dibuat untuk kebutuhan personal branding.",
      tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
      type: "code",
      repo: "https://github.com/Lutfi1919/mypersonal-website"
    },
    {
      img: code2,
      title: "Portfolio Web V3",
      description: "Project ini dibuat untuk meng-upgrade web portfolio saya sebelumnya menggunakan bahasa pemrograman baru",
      tools: ["React", "Bootstrap", "React Bits", "Formspree", "HTML", "CSS", "Javascript"],
      type: "code",
      repo: "https://github.com/Lutfi1919/portfolioweb-v3"
    },
    {
      img: code3,
      title: "Website OSIS & MPR",
      description: "Project yang dibuat memenuhi kebutuhan penilaian. Untuk mempermudah para OSIS untuk menginput data",
      tools: ["Laravel", "Bootstrap", "MySQL", "PHP", "HTML", "CSS", "Javascript"],
      type: "code",
      repo: "https://github.com/Lutfi1919/organisasi-laravel"
    },
    {
      img: code4,
      title: "Todo App",
      description: "Website Todo app untuk meningkatkan level produktivitas. Membantu kamu memprioritaskan pekerjaan, menetapkan tenggat waktu, dan mengatur kategori proyek secara efisien.",
      tools: ["Laravel", "Bootstrap", "MySQL", "PHP", "HTML", "CSS", "Javascript"],
      type: "code",
      repo: "https://github.com/Lutfi1919/laratodo"
    },
    {
      img: code5,
      title: "Iqra",
      description: "Website untuk membaca Al-Quran secara online. Membantu kamu membaca quran dimana saja dengan praktis.",
      tools: ["React", "HTML", "CSS", "Tailwind", "CSS", "Javascript", "Postman"],
      type: "code",
      repo: "https://github.com/Lutfi1919/iqra"
    },
    {
      img: desain5,
      title: "Website OSIS & MPR",
      description: "Desain ini dibuat dengan tujuan kerangka dasar yang dibuat menggunakan platform Figma untuk merencanakan layout dan fitur website ini.",
      tools: ["Figma"],
      type: "design"
    },
    {
      img: desain1,
      title: "Desain Layering",
      description: "Desain ini dibuat dengan tujuan memperdalam pemahaman saya di Figma",
      tools: ["Figma"],
      type: "design"
    },
    {
      img: desain2,
      title: "Pinterest Dupe",
      description: "Desain ini dibuat dengan tujuan memperdalam pemahaman saya di Figma",
      tools: ["Figma"],
      type: "design"
    },
    {
      img: desain3,
      title: "Spotify Dupe",
      description: "Desain ini dibuat dengan tujuan memperdalam pemahaman saya di Figma",
      tools: ["Figma"],
      type: "design"
    },
    {
      img: desain4,
      title: "Vehicle E-commerce App",
      description: "Vehicle E-commerce App adalah hasil eksplorasi saya dalam menerapkan gaya desain UI yang konsisten, mulai dari sistem branding logo hingga tata letak kartu produk. Di sini, saya bereksperimen dengan penggunaan elemen visual yang unik dan navigasi yang berpusat pada kenyamanan pengguna",
      tools: ["Figma"],
      type: "design"
    },
  ];

  const tabs = [
    {id:"tab1", label:"All"},
    {id:"tab2", label:"Designing"},
    {id:"tab3", label:"Coding"},
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
    <MusicComp/>
    <ClickSpark
      sparkColor='#302f2c'
      sparkSize={10}
      sparkRadius={20}
      sparkCount={9}
      duration={400}
    >
      <header className="md:mt-16! mt-10! font-semibold md:flex md:justify-between" style={{fontFamily: "Stack Sans Headline"}}>
        <nav data-aos="fade-in-right">
          <p className="text-5xl mb-10 md:mb-9 md:text-[64px]"><span className="duration-150 hover:text-[#d27b2e]">HI,</span> <span className="duration-150 hover:text-[#d27b2e]">SAYA</span> <span className="duration-150 hover:text-[#d27b2e]">LUTHFI.</span></p>
          <p className="text-5xl mb-10 md:mb-9 md:text-[64px]" style={{marginTop: "-37px"}}><span className="duration-150 hover:text-[#d27b2e]">SISWA</span> <span className="duration-150 hover:text-[#d27b2e]">DI</span> <span className="duration-150 hover:text-[#d27b2e]">SMK</span></p>
          <p className="text-5xl md:text-[64px]" style={{marginTop: "-34px"}}><span className="duration-150 hover:text-[#d27b2e]">WIKRAMA</span> <span className="hover:no-underline duration-150 hover:text-[#d27b2e] line-through">BOGOR.</span></p>
          <div className="flex flex-wrap items-center mt-6 md:mt-5 italic" style={{fontFamily: "Cormorant Garamond"}}>
            <a href="https://www.linkedin.com/in/luthfi-ahmad-mauludi" target="_blank" className="text-2xl md:text-2xl m-3 hover:text-[#d27b2e] duration-150 hover:underline md:me-5">LinkedIn</a>
            <span className="text-2xl md:text-2xl">✦</span>
            <a href="https://www.instagram.com/lutfiamdm/#" target="_blank" className="text-2xl md:text-2xl m-3 hover:text-[#d27b2e] duration-150 hover:underline md:mx-5">Instagram</a>
            <span className="text-2xl md:text-2xl">✦</span>
            <a href="https://github.com/Lutfi1919" target="_blank" className="text-2xl md:text-2xl m-3 hover:text-[#d27b2e] duration-150 hover:underline md:mx-5">Github</a>
            <span className="text-2xl md:text-2xl">✦</span>
            <a href="https://www.instagram.com/lutfiworks/#" target="_blank" className="text-2xl md:text-2xl m-3 hover:text-[#d27b2e] duration-150 hover:underline md:ms-5">Portfolio</a>
          </div>
          <div className="flex items-center">
            <div className="mt-6 md:flex md:mt-20 md:justify-center w-full md:w-fit text-center border cursor-pointer">
              <p className="bg-[#302f2c] text-[#f2f1ef] py-4 md:px-5 md:py-3 text-center">Scroll</p>
              <div className="py-4 md:py-3">
                <a href="#about" className="md:px-5 md:py-3 md:border-l duration-250 hover:underline hover:text-[#d27b2e]">Letsgowwww</a>
              </div>
            </div>
            <HiCursorClick className="text-2xl mt-27 -ms-5"/>
          </div>
        </nav>
        <div className="flex justify-center items-center">
          <img data-aos="fade-in-left" className="img-header mt-10 w-80 h-80 md:w-100 md:h-100" src={headerImage} alt="" style={{ borderRadius: "100%", objectFit: "cover"}}/>
        </div>
      </header>
      <MarqueeComp />
      <div className="" id="about"></div>
      <section className="mt-30! mb-15! md:mb-30! md:grid md:grid-cols-2 md:gap-2" data-aos="fade-in" style={{fontFamily: "Stack Sans Headline"}}>
        <div className="mb-6 md:mb-0">
          <p className="text-3xl md:text-4xl font-extrabold italic">LUTHFI&ensp;&ensp;AHMAD&ensp;&ensp;MAULUDI.</p>
          <p className="leading-14 mt-6 md:mt-6 text-6xl">A student, gamer, do sports and music lover.</p>
          <a href="https://open.spotify.com/user/209b3ifkkusgp7nslaxuaklgy?si=228020036bf642ae" target="_blank" className="hover:text-[#1db954] text-6xl duration-200 spotify"><FaSpotify/></a>
        </div>
        <div className="">
          <p className="text-3xl [word-spacing:10px] md:text-end">Saya adalah seseorang yang senang menjelajahi desain dan menemukan ide-ide baru. Selalu ingin tahu, selalu belajar.</p>
          <div className="flex mt-8 justify-between">
            <div className="">
              <p className="text-2xl italic font-semibold">Soft Skill</p>
              <ul className="list-disc ms-5">
                <li>Manajemen waktu</li>
                <li>Networking</li>
                <li>Kolaborasi</li>
                <li>....</li>
              </ul>
            </div>
            <div className="">
              <p className="text-2xl italic font-semibold">Hard Skill</p>
              <ul className="list-disc ms-5">
                <li>UI/UX design</li>
                <li>Programming</li>
                <li>Automotive service</li>
                <li>....</li>
              </ul>
            </div>
          </div>
          <p className="text-xs">*hire me to unlock my full potential.😁</p>
          <div className="md:flex md:justify-between">
            <p className="mt-10 text-sm font-semibold text-[#d27b2e]">BORN IN <br /> <span className="text-3xl font-semibold text-[#302f2c]">Bogor</span></p>
            <p className="mt-10 text-sm font-semibold text-[#d27b2e]">DATE OF BIRTH <br /> <span className="text-3xl font-semibold text-[#302f2c]">6 March 2009</span></p>
            <p className="mt-10 text-sm font-semibold text-[#d27b2e]">SEX <br /> <span className="text-3xl font-semibold text-[#302f2c]">JALU</span></p>
          </div>
        </div>
      </section>
      <section className="" style={{fontFamily: "Stack Sans Headline"}}>
        <p className="text-2xl font-semibold" data-aos="fade-in">Riwayat Pendidikan</p>
        <div className="mt-5">
          <SekolahComp link={"https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/80C38105-2DF5-E011-B4EE-55755C678D10"} logo={logoSD} nama={"Sekolah Dasar Negeri Harjasari 1, Bogor"} jurusan={"Student"} awalMasuk={"2015"} lulus={"2021"}/>
          <p className="text-end text-3xl -mt-5 mb-1.5 border-r-2 me-3 opacity-60" data-aos="fade-in">&ensp;</p>
          <SekolahComp link={"https://www.smpamaliahciawi.sch.id/"} logo={logoSMP} nama={"Sekolah Menengah Pertama Amaliah, Bogor"} jurusan={"Student"} awalMasuk={"2021"} lulus={"2024"}/>
          <p className="text-end text-3xl -mt-5 mb-1.5 border-r-2 me-3 opacity-60" data-aos="fade-in">&ensp;</p>
          <SekolahComp link={"https://smkwikrama.sch.id/"} logo={logoSMK} nama={"Sekolah Menengah Kejuruan Wikrama, Bogor"} jurusan={"PPLG/RPL"} awalMasuk={"Juli 2024"} lulus={"Present"}/>
        </div>
      </section>
      <div id="projects"></div>
      <section className="mt-20! md:my-30!" style={{fontFamily: "Stack Sans Headline"}}>
        {/* <div className="text-center text-[13px]">
          <p className="font-semibold py-1 px-4 rounded-md bg-[#302f2c] text-[#f2f1ef]">Portfolio</p>
        </div>
        <p className="mt-4 text-5xl font-semibold">Project yang saya kerjakan</p>
        <p className="mt-4 mb-18 text-xl text-center opacity-75">Berikut beberapa proyek yang telah saya selesaikan, dan saya akan terus belajar untuk meningkatkan keterampilan saya di bidang ini.</p> */}
        <div className="md:grid md:grid-cols-2" data-aos="fade-in">
          <p className="text-6xl md:text-8xl tracking-tight mb-15 font-semibold text-start">Projects.</p>
          <p className="mb-6 -mt-11 md:mt-3 font-semibold text-start opacity-80 text-sm">Berikut beberapa proyek yang telah saya selesaikan, dan saya akan terus belajar untuk meningkatkan keterampilan saya di bidang ini.</p>
        </div>
        <div className="flex flex-wrap border-b w-full justify-start" data-aos="fade-in">
          {
            tabs.map((tab) => (
              <button key={tab.id} className={`px-2 text-xl md:px-4 md:text-3xl py-2 font-semibold ${activeTab === tab.id ? "border-[#302f2c] text-[#302f2c] mt-0.5" : "duration-350 opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-[#302f2c]"}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
            ))
          }
        </div>
        <div key={activeTab} data-aos="fade-in-up" data-aos-duration="600" className="mt-8">
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {
              myProjects.filter((project) => {
                if (activeTab === "tab1") return true;
                if (activeTab === "tab2") return project.type === "design";
                if (activeTab === "tab3") return project.type === "code";
                return true;
              }).map((project, index) => (
                <ProjectCardComp 
                  key={index}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  type={project.type}
                  repo={project.repo}
                />
              ))
            }
          </div>
        </div>
      </section>
      <div id="achievements"></div>
      <section className="" style={{fontFamily: "Stack Sans Headline"}}>
        <div className="">
          <p className="text-5xl mt-25 md:text-8xl tracking-tight mb-3 font-semibold text-start" data-aos="fade-in">Achievements.</p>
          <p className="opacity-80! font-semibold text-start text-sm" data-aos="fade-in">Berikut beberapa sertifikat yang telah saya peroleh, dan saya akan terus belajar untuk lebih meningkatkan keterampilan saya di bidang ini.</p>
          <div className="-mt-22" style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              bend={0}
              borderRadius={0}
              scrollSpeed={2}
              scrollEase={0.14}
            />
          </div>
        </div>
      </section>
      <section className="-mt-12! mb-20!" data-aos="fade-in" style={{fontFamily: "Stack Sans Headline"}}>
        <div className="">
          <p className="tracking-tighter text-[70px] font-medium md:text-[215px]">Contact Me</p>
          <div className="md:grid md:grid-cols-2 text-xl mt-8">
            <p className="">Bogor City, West java, Indonesia</p>
            <ContactComp />
            <p className="mt-13 text-3xl md:text-[44px]">luthfiamad19@gmail.com</p>
            <p className="md:mt-13 text-3xl md:text-[44px] md:text-end">(+62) 878-7522-1858</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#302f2c] flex justify-center text-[#f2f1ef]" style={{fontFamily: "Stack Sans Headline"}}>
        <div className="max-w-[1100px] pt-17 pb-8 md:grid md:grid-cols-2 justify-between ">
          <div className="text-center md:text-start">
            <div className="flex justify-center md:justify-start">
              <img src={fotoBradpitt} className="animate-spin [animation-duration:3000ms] w-20 mb-10 md:mb-25 h-20 object-cover rounded-full" alt="Bradpitt" />
            </div>
            <p className="mb-10 md:tracking-wider text-sm">© Made by Bradpitt (Luthfi). All rights reserved.</p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 text-center md:flex mb-10 md:mb-30 text-3xl md:justify-between">
              <a href="#about" className="duration-150 hover:-translate-y-1.5 hover:text-[#d27b2e] hover:underline">About Me</a>
              <a href="#projects" className="duration-150 hover:-translate-y-1.5 hover:text-[#d27b2e] hover:underline">Projects</a>
              <a href="#achievements" className="duration-150 hover:-translate-y-1.5 hover:text-[#d27b2e] hover:underline">Achievements</a>
            </div>
            <div className="flex justify-between gap-3 mx-27 md:ms-90 md:mx-0 text-xl">
              <a href="https://www.linkedin.com/in/luthfi-ahmad-mauludi" target="_blank" className="border rounded-full p-3 duration-150 hover:-translate-y-1.5 opacity-70 hover:text-[#d27b2e] hover:opacity-100"><FaLinkedin /></a>
              <a href="https://github.com/Lutfi1919" target="_blank" className="border rounded-full p-3 duration-150 hover:-translate-y-1.5 opacity-70 hover:text-[#d27b2e] hover:opacity-100"><FaGithub /></a>
              <a href="https://www.instagram.com/lutfiamdm/#" target="_blank" className="border rounded-full p-3 duration-150 hover:-translate-y-1.5 opacity-70 hover:text-[#d27b2e] hover:opacity-100"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </footer>
    </ClickSpark>
    </>
  )
}

export default App