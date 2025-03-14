import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Ex1 from '../../assets/expe/ex1.jpg'
import Ex2 from '../../assets/expe/ex2.jpg'
import Ex3 from '../../assets/expe/ex3.jpg'
import Ex4 from '../../assets/expe/ex4.jpg'
import Ex5 from '../../assets/expe/ex5.jpg'
import Ex6 from '../../assets/expe/ex6.jpg'
import Ex7 from '../../assets/expe/ex7.jpg' 
import DESIGN1 from '../../assets/expe/DESIGN1.png'
import DESIGN2 from '../../assets/expe/DESIGN2.png'
import DESIGN3 from '../../assets/expe/DESIGN3.png'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import Experienceslide from '../Slide/Experienceslide';
const Experience = () => {
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);
    const swiperRef3 = useRef(null);
    useEffect(() => {
                    AOS.init(); // Inisialisasi AOS
                }, []);
    return (
        <section className="project h-auto font-jomhuria overflow-x-hidden bg-gradient-to-b from-backgroundG to-backgroundH bg-fixed" id='experience'> 
        <div className='container mx-auto px-10 pt-12 pb-12'>
        <h1 className='text-white text-5xl text-center mb-10 text-shadow tracking-wide'>EXPERIENCE AND DESAIN</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='box' data-aos="fade-right" data-aos-duration="1250" data-aos-once="false">
                    {/* TOMBOL CUSTOM */}
                    <div className="left-0 right-0 flex justify-center items-center gap-5 ">
                        <div onClick={() => swiperRef1.current.swiper.slidePrev()}
                            className='text-black bg-softGreen hover:bg-greenHover transition-all duration-300 active:bg-softGreen rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            <i className="ri-arrow-left-wide-line text-black font-bold text-sm"></i> BACK
                        </div>
                        <div onClick={() => swiperRef1.current.swiper.slideNext()}
                            className='text-black bg-softGreen hover:bg-greenHover transition-all duration-300 active:bg-softGreen rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            NEXT <i className="ri-arrow-right-wide-line font-bold text-black text-sm"></i>
                        </div>
                        </div>
                    {/* 1 SLIDER */}
                    <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    ref={swiperRef1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,  // Pastikan autoplay tidak berhenti setelah slide terakhir
                      }}
                      loop={true}
                    >
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex1}
                        slideIndex={0}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex2}
                        slideIndex={1}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex3}
                        slideIndex={2}
                        />
                        </SwiperSlide>
                    
                    </Swiper>
                    {/* Teks Tetap */}
                    <div className='px-2 sm:px-10 pb-7 text-shadow'>
                    <h1 className="text-white text-3xl">PKL/MAGANG DI PT.SAWALA TECH</h1>
                        <p className="text-softGreen text-justify text-2xl">Saya memiliki pengalaman magang selama 4 bulan di PT Sawala Tech, Selama 4 bulan magang di PT Sawala Tech, saya mengerjakan landing page IKN, portofolio web interaktif, dan LMS untuk anak-anak, sekaligus memperdalam keterampilan frontend dengan Next.js.</p>
                        </div>
                     
                    </div>
                     {/* 2 slider */}
                    <div className='box2' data-aos="fade-up" data-aos-duration="1250" data-aos-once="false">
                        {/* TOMBOL CUSTOM */}
                    <div className="left-0 right-0 flex justify-center items-center gap-5 ">
                        <div onClick={() => swiperRef2.current.swiper.slidePrev()}
                            className='transition-all duration-300 active:bg-softGreen text-black bg-softGreen hover:bg-greenHover rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            <i className="ri-arrow-left-wide-line text-black font-bold text-sm"></i> BACK
                        </div>
                        <div onClick={() => swiperRef2.current.swiper.slideNext()}
                            className='transition-all duration-300 active:bg-softGreentext-black bg-softGreen hover:bg-greenHover rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            NEXT <i className="ri-arrow-right-wide-line font-bold text-black text-sm"></i>
                        </div>
                        </div>
                    <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    ref={swiperRef2}
                    autoplay={{
                        delay: 1000, // Durasi slide per 4 detik
                        disableOnInteraction: false, // Agar autoplay tetap aktif meski pengguna berinteraksi
                      }}
                      loop={true}
                    >
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex4}
                        slideIndex={0}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex5}
                        slideIndex={1}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex6}
                        slideIndex={2}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={Ex7}
                        slideIndex={3}
                        />
                        </SwiperSlide>
                    </Swiper>
                      {/* Teks Tetap */}
                      <div className='sm:px-10 pb-7 text-shadow'>
                    <h1 className="text-white text-3xl">JUARA 1 CLASMEET</h1>
                        <p className="text-softGreen text-justify text-2xl">    Saya pernah meraih juara 1 Clasmeet Game Mobile Legend bersama tim. Keberhasilan ini berkat kerja sama, strategi, dan komunikasi yang solid, serta pentingnya koordinasi dalam mencapai tujuan bersama.</p>
                        </div>
                    </div>
                     {/* 3 slider */}
                     <div className='box3' data-aos="fade-left" data-aos-duration="1250" data-aos-once="false">
                        {/* TOMBOL CUSTOM */}
                        <div className="left-0 right-0 flex justify-center items-center gap-5 ">
                        <div onClick={() => swiperRef3.current.swiper.slidePrev()}
                            className='transition-all duration-300 active:bg-softGreen text-black bg-softGreen hover:bg-greenHover rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            <i className="ri-arrow-left-wide-line text-black font-bold text-sm"></i> BACK
                        </div>
                        <div onClick={() => swiperRef3.current.swiper.slideNext()}
                            className='transition-all duration-300 active:bg-softGreen text-black bg-softGreen hover:bg-greenHover rounded-lg text-2xl h-10 w-20 pt-1 md:pt-2 text-center cursor-pointer'>
                            NEXT <i className="ri-arrow-right-wide-line font-bold text-black text-sm"></i>
                        </div>
                        </div>
                     <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    ref={swiperRef3}
                    autoplay={{
                        delay: 1000, // Durasi slide per 4 detik
                        disableOnInteraction: false, // Agar autoplay tetap aktif meski pengguna berinteraksi
                      }}
                      loop={true}
                    >
                        <SwiperSlide>
                        <Experienceslide className="w-[500px]"
                        img={DESIGN1}
                        slideIndex={0}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={DESIGN2}
                        slideIndex={1}
                        />
                        </SwiperSlide>
                        <SwiperSlide>
                        <Experienceslide
                        img={DESIGN3}
                        slideIndex={2}
                        />
                        </SwiperSlide>
                        </Swiper>
                         {/* Teks Tetap */}
                      <div className='sm:px-10 pb-7 text-shadow'>
                        <h1 className="text-white text-3xl">DESAIN GABUT, FIGMA</h1>
                        <p className="text-softGreen text-justify text-2xl">
                        Gambar-gambar yang kalian lihat ini dibuat dengan Figma.
                                </p>
                        </div>
                        
                        </div>
               
                  
                </div>
            </div>
    </section>
    )
}


export default Experience