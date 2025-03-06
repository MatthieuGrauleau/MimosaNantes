import About from "../components/About/about";
import Banner from "../components/Banner/banner";
import Header from "../components/Header/header";
import Info from "../components/Info/info";
import Valeurs from "../components/Valeurs/valeurs";
import InstagramFeed from "../components/InstagramFeed/instagramFeed";
import Avis from "../components/Avis/avis";

function Home(){
    return(
        <>
        <Header/>
        <Banner/>
        <Info/>
        <About/>
        <Valeurs/>
        <InstagramFeed/>
        <Avis/>
    </>
    );
}
export default Home;