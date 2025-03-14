import Im from '../../assets/me2.png';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import { Typewriter } from 'react-simple-typewriter'
const Homesection = () => {
        // Fungsi buat download CV
        const handleDownload = async () => {
            const response = await fetch('/cv-image.jpg'); // Path ke file CV 
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'cv-mrafin.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        useEffect(() => {
            AOS.init(); // Inisialisasi AOS
        }, []);
    return (
        <section className="home h-auto overflow-x-hidden right-0 bg-gradient-to-b from-backgroundG to-backgroundH pb-5 bg-fixed font-jomhuria text-shadow" id='home'>
        <div className="container mx-auto px-10">
            <div className="hero grid grid-cols-1 md:grid-cols-3 md:pt-28 lg:pt-20 sm:pt-20 pt-24 gap-20 items-center">
                <div className="box col-span-2" data-aos="zoom-out" data-aos-duration="1250" data-aos-once="false">
                    <h3 className="font-jomhuria text-4xl text-darkRed">
                    <Typewriter
                        words={['WELCOME!!🙌', 'SELAMAT DATANG!!✨', 'こんにちは、みんなさん！👋']}
                        loop={0} // 0 = infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                                </h3>
                    <h1 className="font-jeju sm:text-5xl text-white text-3xl">I Am <span className="text-darkRed">Web developer</span></h1>
                    <p className='sm:text-3xl text-2xl text-justify text-softGreen'>Saya seorang <span className='text-softMint'>Web Developer </span>pemula dengan minat besar dalam membangun website yang modern, responsif, dan user-friendly. Saya adalah lulusan dari [SMK RPL IT].</p>
                    <div className='social media flex gap-5 mt-2 mb-5'>
                        <a href="https://www.facebook.com/RAFFZZ.REAL" target='_blank'><i className="ri-facebook-fill hover:text-darkRed active:text-darkRed text-xl text-white transition-all hover:scale-105 transform duration-300"></i></a>
                        <a href="https://www.instagram.com/mrfnrm?igsh=N2JueDhwdGR6Zzlw" target='_blank'><i className="ri-instagram-fill hover:text-darkRed active:text-darkRed text-xl text-white transition-all hover:scale-105 transform duration-300"></i></a>
                        <a href="https://wa.me/6285723713968" target='_blank'><i className="ri-whatsapp-fill hover:text-darkRed active:text-darkRed text-xl text-white transition-all hover:scale-105 transform duration-300"></i></a>
                        <a href="https://www.linkedin.com/in/mochammad-rafi-nurrahman-934bb632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i className="ri-linkedin-fill hover:text-darkRed active:text-darkRed text-xl text-white transition-all hover:scale-105 transform duration-300"></i></a>
                    </div> 
                    <button onClick={handleDownload} className='transform duration-300 hover:scale-105 bg-darkRed hover:bg-redHover px-6 transition-all text-2xl pb-2 pt-3 text-white tracking-widest rounded-lg'>
                        DOWNLOAD CV <i className="ri-file-download-line ms-1 mt-72 text-white"></i>
                    </button>
                </div>
                <div className="box relative col-span-1" data-aos="fade-left" data-aos-duration="1250" data-aos-once="false">
                    <img src={Im} alt="" className="mx-auto top-[-100px] right-[-40px] sm:right-[0px] sm:top-[0px] relative z-10 lg:w-auto" />
                    <span className="absolute top-[-60px] right-[-80px] md:right-[-40px] md:top-[-25px] xl:right-[-35px] lg:right-[-60px] xl:top-[100px] lg:top-[50px] sm:right-[20px] sm:top-[100px] z-0">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow sm:w-[450px] md:h-[400px] md:w-[250px] lg:w-[350px] xl:w-[400px] sm:h-[450px] w-[300px] h-[350px]">
                            <defs>
                                <linearGradient id="gradientColors1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="50%" style={{ stopColor: "#8B0000", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path fill="url(#gradientColors1)" d="M38.5,-64.7C49.6,-59.6,57.5,-49.6,63,-38.7C68.5,-27.8,71.6,-15.9,73.1,-3.6C74.6,8.7,74.5,21.4,69.2,31.5C63.9,41.6,53.4,49.1,42.5,55.8C31.5,62.6,20.2,68.5,7.4,69.9C-5.5,71.2,-11.1,67.9,-21.5,65.3C-31.9,62.6,-47.1,60.7,-56.4,53.5C-65.7,46.4,-69,34,-70.4,22.8C-71.9,11.5,-71.5,1.4,-71.1,-10.2C-70.6,-21.7,-70.1,-34.5,-63.2,-41.7C-56.3,-48.8,-43.1,-50.4,-31.9,-54.9C-20.7,-59.5,-10.3,-66.9,2,-69.8C14.4,-72.7,28.8,-71.4,38.5,-64.7Z" transform="translate(100 100)" />
                        </svg>
                    </span>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Homesection