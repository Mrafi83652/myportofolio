import { useForm, ValidationError } from '@formspree/react';
import Me1 from '../../assets/me1.png';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  const [state, handleSubmit] = useForm("xjkkqvqp");
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    await handleSubmit(e); // Kirim form ke Formspree
    
    if (state.succeeded) {
        e.target.reset(); // Reset form setelah berhasil submit
        window.location.href = "https://formspree.io/thanks?language=id"; // Redirect ke halaman sukses
    }
};

  return (
    <section className="about h-[600px] sm:h-[800px] overflow-x-hidden right-0 bg-gradient-to-b from-backgroundG to-backgroundH bg-fixed font-jomhuria" id='contact'>
      <div className="container mx-auto px-10">
        <div className="hero grid grid-cols-1 lg:grid-cols-2 items-center md:gap-20 gap-1">
          <div className="box hidden lg:block relative" data-aos="fade-left" data-aos-duration="1250" data-aos-once="false">
            {/* Gambar */}
            <img src={Me1} alt="Me" className="mx-auto ml relative z-10" />
            {/* SVG Background */}
            <span className="absolute top-[100px] right-[-10px] sm:right-[80px] md:top-[100px] md:right-[-40px] lg:top-[120px] lg:right-[20px] xl:top-[100px] xl:right-[90px] z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow sm:w-[450px] sm:h-[450px] md:h-[400px] md:w-[400px] w-[350px] h-[350px]">
              <defs>
                     <linearGradient id="gradientColors3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="50%" style={{ stopColor: "#8B0000", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                      </linearGradient>
                            </defs>
                <path fill="url(#gradientColors3)" d="M38.5,-64.7C49.6,-59.6,57.5,-49.6,63,-38.7C68.5,-27.8,71.6,-15.9,73.1,-3.6C74.6,8.7,74.5,21.4,69.2,31.5C63.9,41.6,53.4,49.1,42.5,55.8C31.5,62.6,20.2,68.5,7.4,69.9C-5.5,71.2,-11.1,67.9,-21.5,65.3C-31.9,62.6,-47.1,60.7,-56.4,53.5C-65.7,46.4,-69,34,-70.4,22.8C-71.9,11.5,-71.5,1.4,-71.1,-10.2C-70.6,-21.7,-70.1,-34.5,-63.2,-41.7C-56.3,-48.8,-43.1,-50.4,-31.9,-54.9C-20.7,-59.5,-10.3,-66.9,2,-69.8C14.4,-72.7,28.8,-71.4,38.5,-64.7Z" transform="translate(100 100)" />
              </svg>
            </span>
          </div>

          <div className="box" data-aos="zoom-in" data-aos-duration="1250" data-aos-once="false">
            <h1 className="font-jomhuria sm:text-6xl text-shadow text-white text-center lg:text-left text-5xl mb-5">CONTACT <span className="text-darkRed">ME</span></h1>
            <div className='bg-softGreen border border-slate-200 mx-auto rounded-xl shadow-lg p-5 font-jomhuria'>
              <form onSubmit={handleFormSubmit}
              method='POST'>
                <label htmlFor="name">
                  <span className='text-3xl'>Name</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Enter your name'
                    className='px-3 py-2 border shadow rounded w-full text-2xl block placeholder:text-grayish focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400'
                  />
                </label>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                <label htmlFor="email">
                  <span className='text-3xl'>Email</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Your email address'
                    className='px-3 py-2 border shadow rounded w-full text-2xl block placeholder:text-grayish focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400'
                  />
                </label>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <label htmlFor="message">
                  <span className='text-3xl'>Message</span>
                  <textarea
                    name="message"
                    id="message"
                    placeholder='What’s on your mind?'
                    className='h-32 px-3 py-2 border shadow rounded w-full text-2xl block placeholder:text-grayish focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400'
                  />
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type='submit'
                  className="mt-3 bg-black px-5 py-2 rounded-lg transition-all duration-300 text-grayish text-2xl hover:text-gray-400 hover:bg-redHover active:bg-slate-900"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
