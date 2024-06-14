import React from 'react';
import { TitleMentionsLegales } from '../constants';

const MentionsLegales = () => {
  return (
    <section id="MentionsLegales" className="container mx-auto w-full max-w-screen-2xl bg-white py-8 rounded-lg h-auto lg:min-h-screen">
      <div id="Missions" className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
        <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-orange md:text-2xl lg:text-4xl">{TitleMentionsLegales.title}</h2>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-dark-purple">{TitleMentionsLegales.text}</p>
      </div>
      <div className='text-dark-purple px-4'>
        <h3 className="text-2xl font-bold mb-4">Informations Générales</h3>
        <p>ESTIAM</p>
        <p>Raison sociale : OGEC LTP Saint Jean Baptiste de la Salle</p>
        <p>Type : Association loi 1901</p>
        <p>SIRET : 775 020 175 00011</p>
        <p>Siège social : 52 Avenue de la Libération, 18000 Bourges</p>
        <p>Numéro de téléphone : 02 48 27 15 15</p>
        <p>Adresse email : bourges@estiam.com</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Données Personnelles</h3>
        <p>Ce site ne collecte aucune donnée personnelle.</p>
        <p>Aucun cookie n'est déposé par le site.</p>
        <p>Ce site est exempté de toute déclaration à la CNIL de par son absence de collecte de données personnelles, conformément à l'article 22 de la loi "Informatique et Libertés".</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Éditeur du Site</h3>
        <p>Le présent site est édité par les étudiants de l'ESTIAM.</p>
        <p>Responsable de la publication : ESTIAM</p>
        <p>Adresse de contact : 52 Avenue de la Libération, 18000 Bourges</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Hébergement</h3>
        <p>Le présent site est hébergé par : PLANETHOSTER inc.</p>
        <p>Adresse : 4416 Louis B. Mayer, Laval (Québec), H7P 0G1, Canada</p>
        <p>Numéro de téléphone : 0 805 080 426 (Numéro Vert FR)</p>
        <p>Site web : <a href="https://www.planethoster.com" className="text-blue-600 hover:underline">www.planethoster.com</a></p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Propriété Intellectuelle</h3>
        <p>Tous les éléments du présent site, notamment les textes, images, sons, vidéos, etc. sont la propriété de l'Association Nom de l'Association.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Loi Applicable</h3>
        <p>Le présent site est soumis au droit français.</p>
      </div>
    </section>
  );
};

export default MentionsLegales;
