import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import LatestPosts from "../components/LatestPosts";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";

export default function Home(){
    return(
        <>
            <Navbar/>
            <About/>
            <Projects />
            <LatestPosts />
            <Achievements /> 
            <Skills />
            <Footer />
        </>
    )
}
