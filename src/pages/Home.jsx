import SEOHead from "../components/SEO/SEOHead";
import About from "../components/About/about";
import Banner from "../components/Banner/banner";
import Header from "../components/Header/header";
import Info from "../components/Info/info";
import Valeurs from "../components/Valeurs/valeurs";
import InstagramFeed from "../components/InstagramFeed/instagramFeed";
import Avis from "../components/Avis/avis";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";

function Home(){
    return(
        <>
        <SEOHead />
        <Header/>
        <Banner/>
        <Info/>
        <About/>
        <Valeurs/>
        <InstagramFeed/>
        <Avis/>
        <Contact/>
        <Footer/>
    </>
    );
}
export default Home;