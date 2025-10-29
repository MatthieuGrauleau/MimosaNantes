import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import './LegalPages.scss';

function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Mimosa Nantes</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles - Mimosa Nantes" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <main className="legal-page">
        <div className="legal-container">
          <h1>Politique de Confidentialité</h1>
          <p className="legal-intro">
            Mimosa accorde une grande importance à la protection de vos données personnelles. 
            Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
            utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <section className="legal-section">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données est :</p>
            <ul>
              <li><strong>Mimosa</strong></li>
              <li>7 rue Bon Secours, 44000 Nantes</li>
              <li>Téléphone : <a href="tel:+33749986884">07 49 98 68 84</a></li>
              <li>Email : [À COMPLÉTER]</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Données collectées</h2>
            
            <h3>2.1. Données de navigation</h3>
            <p>
              Lors de votre visite sur notre site, nous collectons automatiquement certaines informations techniques :
            </p>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Système d'exploitation</li>
              <li>Pages visitées et durée de consultation</li>
              <li>Date et heure de connexion</li>
            </ul>

            <h3>2.2. Réservations via Zenchef</h3>
            <p>
              Lorsque vous effectuez une réservation via notre widget Zenchef, les données suivantes peuvent être collectées :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email</li>
              <li>Nombre de personnes</li>
              <li>Date et heure de réservation</li>
              <li>Allergies ou demandes spéciales (optionnel)</li>
            </ul>
            <p>
              <strong>Note :</strong> Ces données sont collectées et traitées directement par Zenchef. 
              Consultez la <a href="https://www.zenchef.com/fr/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">politique de confidentialité de Zenchef</a>.
            </p>

            <h3>2.3. Google Maps</h3>
            <p>
              Notre site intègre Google Maps pour afficher notre localisation. Google peut collecter des données lors de l'utilisation de cette carte.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Finalités du traitement</h2>
            <p>Nous utilisons vos données pour :</p>
            <ul>
              <li><strong>Gestion des réservations :</strong> traiter et confirmer vos réservations</li>
              <li><strong>Communication :</strong> répondre à vos demandes de contact</li>
              <li><strong>Amélioration du service :</strong> analyser l'utilisation du site pour améliorer l'expérience utilisateur</li>
              <li><strong>Conformité légale :</strong> respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li><strong>Exécution du contrat :</strong> pour la gestion des réservations</li>
              <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services</li>
              <li><strong>Consentement :</strong> pour l'utilisation de cookies non essentiels (si applicable)</li>
              <li><strong>Obligation légale :</strong> pour la conservation de données comptables et fiscales</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Durée de conservation</h2>
            <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
            <ul>
              <li><strong>Données de réservation :</strong> 3 ans à compter de la dernière visite</li>
              <li><strong>Données de contact :</strong> jusqu'à suppression de votre demande ou retrait de consentement</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Destinataires des données</h2>
            <p>Vos données personnelles peuvent être transmises à :</p>
            <ul>
              <li><strong>Personnel autorisé :</strong> notre équipe interne pour la gestion des réservations</li>
              <li><strong>Prestataires :</strong> Zenchef (réservations), Netlify (hébergement)</li>
              <li><strong>Autorités :</strong> si requis par la loi</li>
            </ul>
            <p>
              Aucune donnée n'est vendue ou louée à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Transferts de données hors UE</h2>
            <p>
              Certains de nos prestataires (Netlify) peuvent être situés en dehors de l'Union Européenne. 
              Ces transferts sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types).
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données (« droit à l'oubli »)</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
            </ul>

            <h3>Comment exercer vos droits ?</h3>
            <p>Pour exercer vos droits, contactez-nous :</p>
            <ul>
              <li>Par email : [À COMPLÉTER]</li>
              <li>Par téléphone : <a href="tel:+33749986884">07 49 98 68 84</a></li>
              <li>Par courrier : Mimosa, 7 rue Bon Secours, 44000 Nantes</li>
            </ul>
            <p>
              Nous vous répondrons dans un délai d'<strong>un mois</strong> maximum. 
              Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Réclamation auprès de la CNIL</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <ul>
              <li><strong>CNIL</strong> - 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
              <li>Téléphone : 01 53 73 22 22</li>
              <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Cookies</h2>
            
            <h3>10.1. Qu'est-ce qu'un cookie ?</h3>
            <p>
              Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. 
              Il permet de mémoriser vos préférences et d'améliorer votre expérience de navigation.
            </p>

            <h3>10.2. Cookies utilisés</h3>
            <p>Notre site utilise :</p>
            <ul>
              <li><strong>Cookies strictement nécessaires :</strong> essentiels au fonctionnement du site (aucun consentement requis)</li>
              <li><strong>Cookies tiers :</strong> 
                <ul>
                  <li>Google Maps (fonctionnalité de carte)</li>
                  <li>Zenchef (widget de réservation)</li>
                  <li>Instagram (affichage du feed - via API, pas de cookies)</li>
                </ul>
              </li>
            </ul>

            <h3>10.3. Gestion des cookies</h3>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, 
              certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
            </p>
            <p>Instructions pour gérer les cookies :</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
            </p>
            <ul>
              <li>L'accès non autorisé</li>
              <li>La perte, la destruction ou l'altération</li>
              <li>La divulgation accidentelle</li>
            </ul>
            <p>
              Notre site utilise le protocole HTTPS (SSL/TLS) pour sécuriser les échanges de données.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
            </p>
            <ul>
              <li><strong>Email :</strong> [À COMPLÉTER]</li>
              <li><strong>Téléphone :</strong> <a href="tel:+33749986884">07 49 98 68 84</a></li>
              <li><strong>Adresse :</strong> Mimosa, 7 rue Bon Secours, 44000 Nantes</li>
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

export default PolitiqueConfidentialite;