import Me3 from '../../assets/me3.png'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
const Aboutsection = () => {
     // Fungsi buat download CV
     const handleDownload = async () => {
        const response = await fetch('/cv-image.jpg'); // Path ke file CV lo
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
        <section className="about h-auto overflow-x-hidden right-0 bg-gradient-to-b from-backgroundG to-backgroundH bg-fixed pb-10 font-jomhuria text-shadow" id='about'> 
            <div className="container mx-auto px-10">
                 <div className="hero grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 gap-1">
                 <div className="box relative order-2 md:order-1" data-aos="zoom-in" data-aos-duration="1250" data-aos-once="false">
                        {/* Gambar */}
                        <img src={Me3} alt="" className="mx-auto ml relative z-10" />

                        {/* SVG Background */}
                        <span className="absolute top-[100px] right-[-10px] sm:right-[80px] md:top-[100px] md:right-[-40px] lg:top-[120px] lg:right-[40px] xl:top-[100px] xl:right-[90px] z-0">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow sm:w-[450px] sm:h-[450px] md:h-[400px] md:w-[400px] w-[350px] h-[350px]">
                        <defs>
                                <linearGradient id="gradientColors2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="50%" style={{ stopColor: "#8B0000", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                        <path fill="url(#gradientColors2)"  d="M38.5,-64.7C49.6,-59.6,57.5,-49.6,63,-38.7C68.5,-27.8,71.6,-15.9,73.1,-3.6C74.6,8.7,74.5,21.4,69.2,31.5C63.9,41.6,53.4,49.1,42.5,55.8C31.5,62.6,20.2,68.5,7.4,69.9C-5.5,71.2,-11.1,67.9,-21.5,65.3C-31.9,62.6,-47.1,60.7,-56.4,53.5C-65.7,46.4,-69,34,-70.4,22.8C-71.9,11.5,-71.5,1.4,-71.1,-10.2C-70.6,-21.7,-70.1,-34.5,-63.2,-41.7C-56.3,-48.8,-43.1,-50.4,-31.9,-54.9C-20.7,-59.5,-10.3,-66.9,2,-69.8C14.4,-72.7,28.8,-71.4,38.5,-64.7Z" transform="translate(100 100)" />
                        </svg>
                        </span>
                        </div>
                    
                    <div className="box order-1 md:order-2" data-aos="slide-left" data-aos-duration="1250" data-aos-once="false">
                        <h1 className="font-jeju sm:text-5xl text-white text-3xl">Hey There Im <span className="text-darkRed">Rafi</span></h1>
                        <p className='sm:text-3xl text-2xl text-justify text-softGreen mb-3'>Halo! Saya <span className='text-softMint'>Mochammad Rafi Nurrahman</span>, saat ini berusia 17 tahun, dan sedang menempuh pendidikan di SMK <span className='text-softMint'>Informatika Sumedang</span> jurusan Rekayasa Perangkat Lunak <span className='text-softMint'>(RPL)</span>. Saya tinggal di <span className='text-softMint'>Gg Haji Kosim NO.17 RT03 RW10</span>, dan memiliki ketertarikan besar di bidang teknologi, khususnya pengembangan website dan pemrograman.</p>
                        <button onClick={handleDownload} className='bg-darkRed hover:bg-redHover px-6 transition-all duration-300 text-2xl pb-2 pt-3 text-white tracking-widest rounded-lg'>
                            DOWNLOAD CV <i className="ri-file-download-line ms-1 mt-72 text-white"></i>
                        </button>
                    </div>
                    

                 </div>
            </div>
        </section>
    )
}

export default Aboutsection