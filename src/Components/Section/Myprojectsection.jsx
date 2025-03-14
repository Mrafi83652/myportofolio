import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Im from '../../assets/im.png'
// import Pro5 from '../../assets/projek/5.png'
import Pro4 from '../../assets/projek/1a.jpg'
import Pro3 from '../../assets/projek/2a.jpg'
import Pro5 from '../../assets/projek/a5.jpg'
// import Pro1 from '../../assets/projek/1.png'
import Projectslide from '../Slide/Projectslide';
const Myprojectsection = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
                    AOS.init(); // Inisialisasi AOS
                }, []);
  return (
    <section className="project h-auto font-jomhuria overflow-x-hidden bg-gradient-to-b from-backgroundG to-backgroundH bg-fixed" id='project'> 
        <div className='container mx-auto px-10 pt-12 pb-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='box' data-aos="zoom-out" data-aos-duration="1250" data-aos-once="false">
                    <h1 className='text-white text-5xl text-center text-shadow tracking-wide'>PROJECT</h1>
                    <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    ref={swiperRef}
                    autoplay={{
                        delay: 2000, // Durasi slide per 4 detik
                        disableOnInteraction: false, // Agar autoplay tetap aktif meski pengguna berinteraksi
                      }}
                      loop={true}
                    >
                        <SwiperSlide>
                        <a href={Pro3}>
                        <Projectslide
                        img={Pro3}
                        title="Landing page Web IKN"
                        deskripsi="Landing page ini memperkenalkan konsep, visi, dan potensi Ibu Kota Nusantara (IKN) secara informatif. Dibangun dengan React.js dan Tailwind CSS, desainnya modern, responsif, dan fokus pada pengalaman pengguna."
                        slideIndex={0}
                        />
                        </a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href={Pro4}>
                        <Projectslide
                        img={Pro4}
                        title="Website Perpustakaan With Team"
                        deskripsi="Website perpustakaan ini dibangun dengan HTML, CSS, dan PHP native tanpa fitur responsif, hanya optimal untuk desktop. Meskipun sederhana, website ini menyediakan fungsionalitas dasar untuk mengelola koleksi buku dan data pengguna."
                        slideIndex={1}
                        />
                        </a>
                        </SwiperSlide>
                     
                        <SwiperSlide>
                        <a href={Pro5}>
                        <Projectslide
                        img={Pro5}
                        title="Manabu-F (LMS)"
                        deskripsi="Manabu-F adalah proyek aplikasi web untuk pengalaman belajar yang interaktif dan terstruktur. Menggunakan Next.js untuk frontend, Tailwind CSS untuk styling, dan Firebase sebagai backend, Manabu-F menghadirkan tampilan modern serta sistem yang efisien."
                        slideIndex={1}
                        />
                        </a>
                        </SwiperSlide>
                     
                    </Swiper>
                    {/* TOMBOL COSTUM */}
                 {/* TOMBOL CUSTOM */}
                        <div className="left-0 right-0 flex justify-center items-center gap-5">
                        <div onClick={() => swiperRef.current.swiper.slidePrev()}
                            className='transition-all duration-300 active:bg-softGreen text-black bg-softGreen hover:bg-greenHover rounded-lg text-3xl md:text-4xl h-10 w-20 pt-1 md:w-32 md:h-12 md:pt-2 text-center cursor-pointer'>
                            <i className="ri-arrow-left-wide-line text-black font-bold text-lg md:text-xl"></i> BACK
                        </div>
                        <div onClick={() => swiperRef.current.swiper.slideNext()}
                            className='transition-all duration-300 active:bg-softGreen text-black bg-softGreen hover:bg-greenHover  rounded-lg text-3xl md:text-4xl h-10 w-20 pt-1 md:w-32 md:h-12 md:pt-2 text-center cursor-pointer'>
                            NEXT <i className="ri-arrow-right-wide-line font-bold text-black text-lg md:text-xl"></i>
                        </div>
                        </div>

                </div>
                <div className='box hidden lg:block'>
                       <img src={Im} alt="" className="mx-auto ml relative z-10" />
                            {/* SVG Background */}
                        <span className="absolute top-[2200px] sm:top-[2250px] right-[20px] sm:right-[80px] md:top-[1250px] md:right-[80px] lg:top-[1350px] lg:right-[160px] xl:top-[1550px] xl:right-[150px] z-0">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow sm:w-[450px] sm:h-[450px] md:h-[400px] md:w-[400px] w-[350px] h-[350px]">
                            <defs>
                                <linearGradient id="gradientColors" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="10%" style={{ stopColor: "#8B0000", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#4ADE80", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                <path fill="url(#gradientColors)"  d="M38.5,-64.7C49.6,-59.6,57.5,-49.6,63,-38.7C68.5,-27.8,71.6,-15.9,73.1,-3.6C74.6,8.7,74.5,21.4,69.2,31.5C63.9,41.6,53.4,49.1,42.5,55.8C31.5,62.6,20.2,68.5,7.4,69.9C-5.5,71.2,-11.1,67.9,-21.5,65.3C-31.9,62.6,-47.1,60.7,-56.4,53.5C-65.7,46.4,-69,34,-70.4,22.8C-71.9,11.5,-71.5,1.4,-71.1,-10.2C-70.6,-21.7,-70.1,-34.5,-63.2,-41.7C-56.3,-48.8,-43.1,-50.4,-31.9,-54.9C-20.7,-59.5,-10.3,-66.9,2,-69.8C14.4,-72.7,28.8,-71.4,38.5,-64.7Z" transform="translate(100 100)" />
            </svg>
        </span>
        </div>
                </div>
            </div>
    </section>
  )
}

export default Myprojectsection