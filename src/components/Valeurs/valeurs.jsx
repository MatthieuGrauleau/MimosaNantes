import React from "react";

function Valeurs() {
  return (
    <section className="valeurs">
      <div className="valeurs-header">
        <h1>Nos <span className="highlight-title">Valeurs</span></h1>
      </div>
      <div className="valeurs-container">
        <div className="valeur-card">
          <div className="valeur-circle">F</div>
          <h2>Fraîcheur</h2>
          <p>On ne badine pas avec les ingrédients. On se fournit chez les voisins et on mise sur la fraîcheur. La carte change à chaque saison !</p>
        </div>
        <div className="valeur-card">
          <div className="valeur-circle">C</div>
          <h2>Créativité</h2>
          <p>On adore jouer avec les saveurs et les associations audacieuses et créer des plats uniques qui feront danser vos papilles !</p>
        </div>
        <div className="valeur-card">
          <div className="valeur-circle">N</div>
          <h2>Naturel</h2>
          <p>On dit non aux aliments transformés et aux produits chimiques. La simplicité est au cœur de notre cuisine.</p>
        </div>
        <div className="valeur-card">
          <div className="valeur-circle">M</div>
          <h2>Maison</h2>
          <p>Tout est fait par nos petites mains. Chaque plat est préparé avec passion et soin par nos cuisiniers passionnés, avec des techniques artisanales.</p>
        </div>
      </div>
    </section>
  );
}

export default Valeurs;