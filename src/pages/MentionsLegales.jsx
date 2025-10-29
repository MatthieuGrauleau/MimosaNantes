import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import './LegalPages.scss';

function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Mimosa Nantes</title>
        <meta name="description" content="Mentions légales du restaurant Mimosa à Nantes" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <main className="legal-page">
        <div className="legal-container">
          <h1>Mentions Légales</h1>
          <p className="legal-intro">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
            il est précisé aux utilisateurs du site Mimosa l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <section className="legal-section">
            <h2>1. Édition du site</h2>
            <p>
              Le site <strong>mimosanantes.netlify.app</strong> (ou mimosa-nantes.fr) est édité par :
            </p>
            <ul>
              <li><strong>Nom de l'établissement :</strong> Mimosa</li>
              <li><strong>Forme juridique :</strong> [À COMPLÉTER - Ex: SARL, SAS, Auto-entrepreneur]</li>
              <li><strong>Capital social :</strong> [À COMPLÉTER si société - Ex: 5 000 €]</li>
              <li><strong>Adresse du siège social :</strong> 7 rue Bon Secours, 44000 Nantes, France</li>
              <li><strong>Numéro SIRET :</strong> [À COMPLÉTER - Ex: 123 456 789 00010]</li>
              <li><strong>Numéro de TVA intracommunautaire :</strong> [À COMPLÉTER si applicable - Ex: FR 12 345678901]</li>
              <li><strong>Téléphone :</strong> <a href="tel:+33749986884">07 49 98 68 84</a></li>
              <li><strong>Email :</strong> [À COMPLÉTER - Ex: contact@mimosa-nantes.fr]</li>
            </ul>
            <p>
              <strong>Directeur de la publication :</strong> [À COMPLÉTER - Nom du gérant/propriétaire]
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Netlify, Inc.</strong></li>
              <li>2325 3rd Street, Suite 296, San Francisco, California 94107, USA</li>
              <li>Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Développement et conception</h2>
            <p>Le site a été développé par :</p>
            <ul>
              <li><strong>Matthieu Grauleau</strong> - Développeur web</li>
              <li>Site web : <a href="https://grauleau-matthieu-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de Mimosa, 
              sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou 
              publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Mimosa.
            </p>
            <p>
              Les photos Instagram affichées sur ce site sont la propriété de Mimosa (@mimosanantes).
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Responsabilité</h2>
            <p>
              Mimosa s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
              Toutefois, Mimosa ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises 
              à disposition sur ce site.
            </p>
            <p>
              Mimosa décline toute responsabilité :
            </p>
            <ul>
              <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
              <li>Pour tous dommages résultant de l'utilisation du site ou de l'impossibilité d'y accéder</li>
              <li>Pour tous dommages résultant de l'intrusion d'un tiers ayant entraîné une modification des informations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites (Instagram, Facebook, Zenchef). 
              Mimosa n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, 
              consultez notre <a href="/politique-confidentialite">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, 
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li><strong>Par téléphone :</strong> <a href="tel:+33749986884">07 49 98 68 84</a></li>
              <li><strong>Par email :</strong> [À COMPLÉTER]</li>
              <li><strong>Par courrier :</strong> Mimosa, 7 rue Bon Secours, 44000 Nantes</li>
            </ul>
          </section>

          <p className="legal-update">
            <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</em>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MentionsLegales;