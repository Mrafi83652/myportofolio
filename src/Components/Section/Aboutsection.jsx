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
                        <path fill="url(#gradientColors2)"  d="M24,-33.5C36.5,-34.4,55.8,-38.9,67,-33.9C78.2,-28.9,81.2,-14.4,71.4,-5.7C61.6,3.1,39,6.3,28.5,12.5C18.1,18.8,19.9,28.1,17.1,37.4C14.4,46.7,7.2,55.8,-1.8,59C-10.9,62.2,-21.7,59.3,-31.3,54C-40.8,48.6,-48.9,40.8,-46.6,31.4C-44.3,22,-31.5,11,-35.6,-2.4C-39.7,-15.7,-60.8,-31.5,-65.4,-44.9C-70,-58.3,-58.3,-69.4,-44.6,-67.9C-31,-66.5,-15.5,-52.4,-4.9,-44C5.7,-35.6,11.5,-32.7,24,-33.5Z" transform="translate(100 100)" />
                        </svg>
                        </span>
                        </div>
                    
                    <div className="box order-1 md:order-2" data-aos="slide-left" data-aos-duration="1250" data-aos-once="false">
                        <div className='flex flex-col space-y-4 mb-4'>
                        <h1 className="font-jeju sm:text-5xl text-white text-3xl">Hey There Im <span className="text-darkRed">Rafi</span></h1>
                        <p className='sm:text-3xl text-2xl text-justify text-softGreen mb-3'>
                        Halo! Saya <span className='text-softMint'>Mochammad Rafi Nurrahman</span>, saat ini berusia 17 tahun, dan sedang menempuh pendidikan di SMK <span className='text-softMint'>Informatika Sumedang</span> jurusan Rekayasa Perangkat Lunak <span className='text-softMint'>(RPL)</span>. Saya tinggal di <span className='text-softMint'>Gg Haji Kosim NO.17 RT03 RW10</span>, dan memiliki ketertarikan besar di bidang teknologi, khususnya pengembangan website dan pemrograman. Untuk berkomunikasi lebih lanjut, anda dapat menghubungi saya melalui email <span className='text-softMint'>muhammadraffinurrahman@gmail.com</span> atau nomor telepon <span className='text-softMint'>+62-857-2371-3968</span>.
                        </p>
                        </div>
                        <button onClick={handleDownload} className='bg-darkRed hover:bg-redHover px-6 hover:scale-105 transform transition-all duration-300 text-2xl pb-2 pt-3 text-white tracking-widest rounded-lg'>
                            DOWNLOAD CV <i className="ri-file-download-line ms-1 text-white"></i>
                        </button>
                    </div>
                    

                 </div>
            </div>
        </section>
    )
}

export default Aboutsection