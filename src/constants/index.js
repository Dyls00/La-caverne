import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const navLinks = [
    {
        id: "Home",
        title: "Accueil",
    },
    {
        id: "Missions",
        title: "Missions du BDE",
    },
    {
        id: "Presentation",
        title: "Présentation du BDE",
    },
    {
        id: "Event",
        title: "Evénements du BDE",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

export const bdeMembers = [
    {
        'role': 'Présidente',
        'avatar': '/images/members/presidente.png',
        'name': 'BLAIZOT',
        'firstname': 'Eloïse',
        'email': 'eloise.blaizot@estiam.com',
        'class': '3° année',
        'message': 'Coucou les loulou, c\'est Danielou !'
    },
    {
        'role': 'Vice-présidente',
        'avatar': '/images/members/vice-presidente.png',
        'name': 'GALLAND',
        'firstname': 'Jeanne',
        'email': 'jeanne.galland@estiam.com',
        'class': '5° année'
    },
    {
        'role': 'Trésorier',
        'avatar': '/images/members/tresorier.jpg',
        'name': 'CROCHET',
        'firstname': 'Mathias',
        'email': 'mathias.crochet@estiam.com',
        'class': '4° année'
    },
    {
        'role': 'Secrétaire',
        'avatar': '/images/members/secretaire.jpg',
        'name': 'TELLIEZ',
        'firstname': 'Audrey',
        'email': 'audrey.telliez@estiam.com',
        'class': '1° année'
    },
    {
        'role': 'Vice-secrétaire',
        'avatar': '/images/members/vice-secretaire.jpg',
        'name': 'NSANGOUAKANDA',
        'firstname': 'Johane Arlis',
        'email': 'johane-arlis.nsangouakanda@estiam.com',
        'class': '2° année'
    },
    {
        'role': 'Membre de droit',
        'avatar': '/images/members/membre-droit.jpg',
        'name': 'GLAPA',
        'firstname': 'Denis',
        'email': 'denis.glapa@estiam.com',
        'class': 'Formateur'
    },
]



export const events = [

    {
        lien: "https://www.estiam.education/",
        img: '/images/events/karting.jpg',
        title: "Soirée Karting",
        des: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        btn: "Voir Plus",
    },
    {
        lien: "https://www.estiam.education/",
        img: "/images/events/lasergame.png",
        title: "Après-Midi Laser-Game",
        des: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        btn: "Voir Plus",
    },

    {
        lien: "https://www.estiam.education/",
        img: "/images/events/bowling.png",
        title: "Soirée Bowling",
        des: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        btn: "Voir Plus",
    }
]

export const footerLinks = [
    {
        title: "/ Pages",
        links: [
            { name: "Accueil", href: "#Home" },
            { name: "Missions du BDE", href: "#Missions" },
            { name: "Présentation du BDE", href: "#Pres" },
        ],
    },
    {
        title: "/ Pages",
        links: [
            { name: "Evénements du BDE", href: "#Event" },
            { name: "Contact", href: "#Contact" },
        ],
    },
    {
        title: "/ Légal",
        links: [
            { name: "Mentions légales", href: "#LegalMentions" },
            { name: "Politique de Confidentialité", href: "#ConfidentialPolitic" },
        ],
    },
    {
        title: "/ Informations de l'école",
        links: [
            { name: "2 Rue Michel Marest, Bourges", href: "#" },
            { name: "bourges@estiam.com", href: "mailto:bourges@estiam.com" },
            { name: "+33 1 82 83 75 00", href: "#" },
        ],
    },
];

export const socialLinks = [
    {
        href: "https://www.facebook.com/EstiamBourges/",
        icon: faFacebook,
        label: "Facebook page",
    },
    {
        href: "https://www.linkedin.com/company/%C3%A9stiam-bourges/",
        icon: faLinkedin,
        label: "Discord community",
    },
    {
        href: "https://twitter.com/estiambourges",
        icon: faTwitter,
        label: "Twitter page",
    },
    {
        href: "https://www.youtube.com/@estiamlecoledesmetiersdeli2645",
        icon: faYoutube,
        label: "YouTube channel",
    },
    {
        href: "#",
        icon: faInstagram,
        label: "Instagram page",
    },
];

export const TitleMissionsBDE = {
    title: "Notre BDE, notre mission",
    text: "Nous donnons notre âme pour ce BDE, alors souscrivez pour le barbuc"
}

export const TitleEvent = {
    title: "Evénements du BDE",
}

export const missionData = [
    {
        title: "Organisation d'événements",
        text: "Le BDE organise divers événements sociaux, culturels, et sportifs pour les étudiants, tels que des soirées, des concerts, des voyages, des compétitions sportives, et des conférences. Ces activités visent à enrichir la vie étudiante et à favoriser la cohésion entre les étudiants."
    },
    {
        title: "Représentation des étudiants",
        text: "Le BDE agit en tant qu'intermédiaire entre les étudiants et l'administration de l'établissement. Il recueille les opinions et les préoccupations des étudiants et les communique à la direction. Cela inclut également la défense des intérêts des étudiants dans divers comités et conseils de l'institution."
    },
    {
        title: "Gestion des clubs et associations",
        text: "Le BDE supervise et coordonne les activités des différents clubs et associations étudiantes. Il aide à la création de nouvelles associations, fournit des ressources et des conseils, et peut également allouer des fonds pour soutenir leurs activités."
    },
    {
        title: "Services aux étudiants",
        text: "YLe BDE peut offrir divers services pour améliorer la vie quotidienne des étudiants, tels que la mise en place de partenariats avec des entreprises locales pour offrir des réductions, l'organisation de ventes de matériel scolaire à prix réduits, ou encore la mise en place de plateformes de covoiturage ou de logement."
    }
];