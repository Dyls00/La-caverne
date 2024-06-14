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
        id: "Event",
        title: "Événements du BDE",
    },
    {
        id: "Presentation",
        title: "Membres du BDE",
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
        'message': "You know the rules, and so do I"
    },
    {
        'role': 'Vice-présidente',
        'avatar': '/images/members/vice-presidente.png',
        'name': 'GALLAND',
        'firstname': 'Jeanne',
        'email': 'jeanne.galland@estiam.com',
        'class': '5° année',
        'message' : ""
    },
    {
        'role': 'Trésorier',
        'avatar': '/images/members/tresorier.jpg',
        'name': 'CROCHET',
        'firstname': 'Mathias',
        'email': 'mathias.crochet@estiam.com',
        'class': '4° année',
        'message' : "Un grand pouvoir implique de grandes responsabilités"
    },
    {
        'role': 'Secrétaire',
        'avatar': '/images/members/secretaire.jpg',
        'name': 'TELLIEZ',
        'firstname': 'Audrey',
        'email': 'audrey.telliez@estiam.com',
        'class': '1° année',
        'message' : "Wingardium LeviOsa, et pas leviosA !"
    },
    {
        'role': 'Vice-secrétaire',
        'avatar': '/images/members/vice-secretaire.jpg',
        'name': 'NSANGOUAKANDA',
        'firstname': 'Johane Arlis',
        'email': 'johane-arlis.nsangouakanda@estiam.com',
        'class': '2° année',
        'message' : "Carpe diem"
    },
    {
        'role': 'Membre de droit',
        'avatar': '/images/members/membre-droit.jpg',
        'name': 'GLAPA',
        'firstname': 'Denis',
        'email': 'denis.glapa@estiam.com',
        'class': 'Formateur',
        'message' : "Never too much"
    },
]

export const events = [

    {
        lien: "https://www.estiam.education/",
        img: '/images/events/karting.jpg',
        title: "Remise de Diplôme: Karting",
        des: "Entre sensations fortes, rires partagés et compétition amicale, les participants ont vécu une expérience inoubliable.",
        btn: "Voir Plus",
    },
    {
        lien: "https://www.estiam.education/",
        img: "/images/events/Barbecue.jpg",
        title: "Soirée Barbecue",
        des: "La convivialité, la bonne humeur et les délicieux repas ont transformé cette soirée en un moment marquant.",
        btn: "Voir Plus",
    },

    {
        lien: "https://www.estiam.education/",
        img: "/images/events/jeuxsociete.jpg",
        title: "Journée Intégration: Jeux",
        des: "Camaraderie, stratégie et rires ont créé une ambiance chaleureuse et enrichissante lors de cette journée mémorable.",
        btn: "Voir Plus",
    }
]

export const footerLinks = [
    {
        title: "/ Pages",
        links: [
            { name: "Accueil", href: "/#Home" },
            { name: "Missions du BDE", href: "/#Missions" },
            { name: "Événements du BDE", href: "/#Event" },
        ],
    },
    {
        title: "/ Pages",
        links: [
            { name: "Membres du BDE", href: "/#Presentation" },
            { name: "Contact", href: "/#Contact" },
        ],
    },
    {
        title: "/ Légal",
        links: [
            { name: "Mentions légales", href: "/mentions-legales" },
        ],
    },
    {
        title: "/ Informations de l'école",
        links: [
            { name: "Campus Lahitolle, Salle d'Armes, 7 Rue Michel Marest, 18000 Bourges", href: "https://www.google.com/maps/search/?api=1&query=Campus+Lahitolle,+Salle+d'Armes,+7+Rue+Michel+Marest,+18000+Bourges" },
            { name: "bourges@estiam.com", href: "mailto:bourges@estiam.com" },
            { name: "+33 2 48 27 15 15", href: "tel:+33248271515" },
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
        href: "https://www.instagram.com/estiamofficiel/",
        icon: faInstagram,
        label: "Instagram page",
    },
];

export const TitleMissionsBDE = {
    title: "Notre BDE, notre mission",
    text: "Nous donnons notre âme pour ce BDE, alors rejoignez-nous !"
}

export const TitlePresBDE = {
    title: "Membres du BDE",
    text: "Voici le comité de direction de notre BDE, et voici leurs rôles !"
}

export const TitleEvent = {
    title: "Événements du BDE",
    text: "Le BDE organise des événements pour créer une cohésion entre les années, fêter les diplômes et bien plus !"
}

export const TitleContact = {
    title: "Contactez-nous",
    text: "Si vous avez des questions sur notre BDE ou notre école, n'hésitez pas !"
}

export const TitleMentionsLegales = {
    title: "Mentions Légales",
    text: "Voici les mentions légales de notre site"
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
        text: "Le BDE peut offrir divers services pour améliorer la vie quotidienne des étudiants, tels que la mise en place de partenariats avec des entreprises locales pour offrir des réductions, l'organisation de ventes de matériel scolaire à prix réduits, ou encore la mise en place de plateformes de covoiturage ou de logement."
    }
];

export const images = [
    "/images/accueil/Estiam_CD18_02.jpg",
    "/images/accueil/Estiam_CD18_05.jpg",
    "/images/accueil/Estiam_CD18_12.jpg",
    "/images/accueil/Estiam_CD18_15.jpg",
    "/images/accueil/Estiam_CD18_17.jpg"
];