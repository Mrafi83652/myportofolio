import Homesection from "../Components/Section/Homesection"
import Navbar from "../Components/Navbar"
import Aboutsection from "../Components/Section/Aboutsection"
import Myprojectsection from "../Components/Section/Myprojectsection"
import Skillandtools from "../Components/Section/Skillandtools"
import Contact from "../Components/Section/Contact"
import Experience from "../Components/Section/Experience"
import Footer from "../Components/Footer"
import ScrollUpButton from "../ScrollUpButton"
const Home = () => {
    return (
        <div>
     <Navbar/>
     <Homesection/>
     <Aboutsection/>
     <Myprojectsection/>
     <Experience/>
     <Skillandtools/>
     <Contact/>
     <Footer/>
     <ScrollUpButton/>
     </div>
    )
}
export default Home