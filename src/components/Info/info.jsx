import React from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";

function Info() {
  const [info1Ref, isInfo1Visible] = useIntersectionObserver();
  const [info2Ref, isInfo2Visible] = useIntersectionObserver();
  const [info3Ref, isInfo3Visible] = useIntersectionObserver();

  return (
    <section className='info'>
        <div 
          ref={info1Ref}
          className={isInfo1Visible ? 'animate-fadeInUp' : 'invisible'}
        >
            <h2>07 49 98 68 84</h2>
            <p>N'hésitez pas à me contacter pour plus d'informations</p>
        </div>
        <div 
          ref={info2Ref}
          className={isInfo2Visible ? 'animate-fadeInUp delay-200' : 'invisible'}
        >
            <h2>Adresse</h2>
            <p>7 rue Bon Secours
            44000 Nantes
            Arrêt de tram: Bouffay
            </p>
        </div>
        <div 
          ref={info3Ref}
          className={isInfo3Visible ? 'animate-fadeInUp delay-400' : 'invisible'}
        >
            <h2>Horaires</h2>
            <p>Du Lundi au Dimanche
            De 11h30 à 15h
            </p>
        </div>
    </section>
  );
}

export default Info;