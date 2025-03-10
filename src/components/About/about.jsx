import React from "react";
import audrey from "../../assets/img/audrey.jpg";
import creation from "../../assets/img/creation.JPG";
import { useIntersectionObserver } from "../../utils/animationUtils";

function About() {
    const [leftContainerRef, isLeftVisible] = useIntersectionObserver();
    const [centerContainerRef, isCenterVisible] = useIntersectionObserver();
    const [rightContainerRef, isRightVisible] = useIntersectionObserver();

    return (
        <section className="about" id="about">
            <div 
                ref={leftContainerRef}
                className={`left-container ${isLeftVisible ? 'animate-fadeInLeft' : 'invisible'}`}
            >
                <img src={audrey} alt="Audrey la patronne de l'établissement" />
            </div>
            <div 
                ref={centerContainerRef}
                className={`center-container ${isCenterVisible ? 'animate-fadeInUp' : 'invisible'}`}
            >
                <div>
                    <h1>Notre <span className="highlight_title">Histoire</span></h1>
                    <p>
                        Je m'appelle Audrey, j'ai bientôt 30 ans et je travaille dans la restauration depuis plus de 10 ans !
                    </p>
                    <p className="highlight_text">
                        Totalement autodidacte, formée au fil du temps par les chefs qui ont su m'épauler et me guider, je me suis spécialisée au fil du temps dans la pâtisserie de restauration tout en consolidant mes compétences en cuisine!
                    </p>
                </div>
            </div>
            <div 
                ref={rightContainerRef}
                className={`right-container ${isRightVisible ? 'animate-fadeInRight' : 'invisible'}`}
            >
                <img src={creation} alt="Audrey la patronne de l'établissement" />
            </div>
        </section>
    );
}

export default About;