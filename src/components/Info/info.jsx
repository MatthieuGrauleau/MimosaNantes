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
            <h2> 0622323872</h2>
            <p>N'hésitez pas à me contacter pour réserver</p>
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
            <h2>horaires</h2>
            <p>Du Mardi au Dimanche
            De 10h à 19h
            </p>
        </div>
    </section>
  );
}

export default Info;