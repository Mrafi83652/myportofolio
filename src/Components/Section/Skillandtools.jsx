import { BiLogoVisualStudio } from "react-icons/bi";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
const Skillandtools = () => {
    useEffect(() => {
                    AOS.init(); // Inisialisasi AOS
                }, []);
    return (
        <section className="skillandtools overflow-x-hidden h-auto pb-20 bg-gradient-to-b from-backgroundG to-backgroundH bg-fixed font-jomhuria">
            <div className="container mx-auto pt-20 px-10">
                <div className="box">
                    <h1 className="text-white text-5xl text-shadow text-center">TOOLS AND SKILLS</h1>
                    <div className="toolandskil pt-16">
                        <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 animate-bounce-slow">
                            {/* Black */}
                            <div className="flex flex-col lg:flex-row gap-10 cursor-pointer" data-aos="fade-down" data-aos-duration="1250" data-aos-once="false">
                                <li className="bg-black w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="ri-github-fill text-white text-7xl hover:animate-spin-once"></i>
                                </li>
                                <li className="hover:animate-spin-once bg-black w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="ri-figma-line text-white text-7xl"></i>
                                </li>
                                <li className="hover:animate-spin-once bg-black w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="text-white text-7xl"><BiLogoVisualStudio/></i>
                                </li>
                            </div>

                            {/* White */}
                            <div className="flex flex-col lg:flex-row gap-10 cursor-pointer" data-aos="fade-up" data-aos-duration="1250" data-aos-once="false">
                                <li className="hover:animate-spin-once bg-white w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="ri-reactjs-line text-black text-7xl"></i>
                                </li>
                                <li className="hover:animate-spin-once bg-white w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="ri-html5-fill text-black text-7xl"></i>
                                </li>
                                <li className="hover:animate-spin-once bg-white w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0px_0px_40px_2px_rgba(34,197,94,1)]">
                                    <i className="ri-tailwind-css-fill text-black text-7xl"></i>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skillandtools;
