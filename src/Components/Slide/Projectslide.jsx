const Projectslide = ({ img, title, deskripsi, slideIndex }) => {
  return (
    <section className="project h-auto text-shadow font-jomhuria overflow-x-hidden" id="project">
      <div className="px-2 sm:px-10">
        <div className="grid grid-cols-1 items-center">
          <div className="box relative"> {/* Membuat div ini relative untuk positioning absolute */}
            <div className="imagg project my-10" >
              <img
                src={img}
                className="rounded-2xl shadow-[0px_0px_7px_5px_rgba(34,197,94,1)] sm:shadow-[0px_0px_15px_8px_rgba(34,197,94,1)]"
                alt={title}
              />
            </div>
            {/* Teks ditempatkan di dalam gambar menggunakan absolute */}
            <div className="absolute bottom-10 left-0 right-0 bg-black/60 p-1 md:p-4 rounded-b-xl">
              <h1 className="text-white text-justify text-lg md:text-3xl lg:text-4xl sm:text-2xl ">{title}</h1>
              <p className="text-softMint text-justify text-sm md:text-3xl lg:text-xl sm:text-lg">{deskripsi}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectslide;