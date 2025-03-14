import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Menambahkan event listener untuk scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setIsVisible(true); // Menampilkan tombol saat scroll >= 250px
      } else {
        setIsVisible(false); // Menyembunyikan tombol jika scroll < 250px
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener saat komponen dihapus
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      id="scroll-up"
      className={`fixed bottom-4 right-4 p-3 bg-black hover:scale-105 transform duration-300 rounded-xl shadow-[0px_0px_7px_5px_#87A08E] text-white transition-all ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ transition: 'opacity 0.3s ease' }}
    >
      <i className="ri-arrow-up-line text-3xl"></i>
    </button>
  );
};

export default ScrollUpButton;
