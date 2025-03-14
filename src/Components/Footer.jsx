const Footer = () => {
    return (
      <section className="home h-auto overflow-x-hidden bg-softGreen pb-5 font-jomhuria text-shadow" id="">
        <div className="container mx-auto">
          <p className="text-center opacity-60 mt-10 text-2xl sm:text-4xl">
            Created By
           <span className="text-darkRed"> Moch Rafi Nurrahman.</span> &copy; 2025 
          </p>
  
          {/* Flexbox untuk tombol */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-5 mt-6">
            <a href="#home">
            <button className="transition-all hover:scale-105 transform duration-300 bg-black px-5 py-2 rounded-lg text-grayish text-2xl hover:bg-gray-900 active:bg-slate-900 sm:order-1">
              Social Media 
            </button>
            </a>
          </div>
        </div>   
      </section>
    );
  }
  
  export default Footer;
  