import audrey from "../../assets/img/audrey.jpg";

function About(){
    return(
    <section className="about">
        <div className="left-container">
            <img src={audrey} alt="Audrey la patronne de l'établissement" />
        </div>
        <div className="right-container">
            <div>
                <h1>Notre <blank>Histoire</blank></h1>
                <p>Je m'appelle Audrey, j'ai bientôt 30 ans et je travaille dans la restauration depuis plus de 10 ans! <blank>Totalement autodidacte, formée au fil du temps par les chefs qui ont su m'épauler et me guider, je me suis spécialisée au fil du temps dans la pâtisserie de restauration tout en consolidant mes compétences en cuisine!</blank></p>
            </div>
        </div>
    </section>
    );
}

export default About;