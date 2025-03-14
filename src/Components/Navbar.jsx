import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Menambahkan state untuk section aktif
  const menuRef = useRef(null);
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
  const handleClick = () => {
    setShow(!show);
  };

  // Menutup menu jika klik di luar navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false); // Menutup menu jika klik di luar
      }
    };

    // Menambahkan event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Menambahkan efek scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  // Menggunakan IntersectionObserver untuk mendeteksi bagian aktif
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Mengatur section aktif
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Membersihkan observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  let menuActive = show ? "left-0" : "-left-full";
  let scrollActive = scroll ? "py-5 bg-black-opacity shadow-xl" : "py-5";

  return (
    <div className={`navbar fixed w-full transition-all bg-transparent font-jomhuria ${scrollActive} z-50`}>
      <div className="container mx-auto px-10">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="md:text-5xl text-4xl text-shadow text-white">
              MOCH <span className="text-brightRed">RAFI NR</span>
            </h1>
          </div>

          {/* Icon Menu */}
          <i
            className="ri-menu-3-line md:hidden block text-3xl text-white cursor-pointer"
            onClick={handleClick}
          ></i>

          {/* Navbar Items */}
          <ul
            ref={menuRef}
            className={`flex lg:gap-24 md:static md:transition-none md:flex-row md:w-auto md:bg-transparent py-3 md:py-0 md:p-0 md:m-0 md:h-full md:shadow-none md:translate-y-0 md:justify-end fixed sm:gap-12 gap-4 transition-all text-white text-4xl ${menuActive} flex-col top-1/2 -translate-y-1/2 px-6 py-6 shadow-md shadow-softGreen bg-softGreen rounded-lg md:text-center`}
          >
            <li className={`flex items-center gap-3 ${activeSection === "home" ? "text-darkRed" : ""}`}>
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="#home" className="pt-2 relative block after:block after:bottom-[5px] after:absolute after:h-[3px] after:rounded-full after:bg-darkRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">HOME</a>
            </li>
            <li className={`flex items-center gap-3 ${activeSection === "about" ? "text-darkRed" : ""}`}>
              <i className="ri-information-2-line text-3xl md:hidden block"></i>
              <a href="#about" className="pt-2 relative block after:block after:bottom-[5px] after:absolute after:h-[3px] after:rounded-full after:bg-darkRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">ABOUT</a>
            </li>
            <li className={`flex items-center gap-3 ${activeSection === "project" ? "text-darkRed" : ""}`}>
              <i className="ri-information-2-line text-3xl md:hidden block"></i>
              <a href="#project" className="pt-2 relative block after:block after:bottom-[5px] after:absolute after:h-[3px] after:rounded-full after:bg-darkRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">PROJECT</a>
            </li>
            <li className={`flex items-center gap-3 ${activeSection === "contact" ? "text-darkRed" : ""}`}>
              <i className="ri-message-line text-3xl md:hidden block"></i>
              <a href="#contact" className="pt-2 relative block after:block after:bottom-[5px] after:absolute after:h-[3px] after:rounded-full after:bg-darkRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">CONTACT</a>
            </li>
            <div className="button downloadcv md:hidden">
            <button onClick={handleDownload} className='bg-darkRed hover:bg-redHover px-6 transition-all text-2xl pb-2 pt-3 text-white tracking-widest rounded-lg'>
                            DOWNLOAD CV <i className="ri-file-download-line ms-1 mt-72 text-white"></i>
                        </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
