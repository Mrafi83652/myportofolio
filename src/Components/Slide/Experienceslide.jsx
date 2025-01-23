const Experienceslide = ({ img, slideIndex }) => {
  return (
    <section className="project h-auto font-jomhuria overflow-x-hidden">
        <div className="px-2 sm:px-10">
          <div className="items-center">
            <div className="box relative"> {/* Membuat div ini relative untuk positioning absolute */}
              <div className="imagg project my-10">
                <img
                  src={img}
                  className="rounded-2xl shadow-[0px_0px_15px_3px_rgba(0,0,0,1)] sm:shadow-[0px_0px_20px_8px_rgba(0,0,0,1)]"
                  
                />
              </div>
            
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experienceslide