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
        'role' : 'Présidente',
        'avatar' : '/images/members/presidente.png',
        'name' : 'BLAIZOT',
        'firstname' : 'Eloïse',
        'email' : 'eloise.blaizot@estiam.com',
        'class' : '3° année',
        'message' : 'Coucou les loulou, c\'est Danielou !'
    },
    {
        'role' : 'Vice-présidente',
        'avatar' : '/images/members/vice-presidente.png',
        'name' : 'GALLAND',
        'firstname' : 'Jeanne',
        'email' : 'jeanne.galland@estiam.com',
        'class' : '5° année'
    },
    {
        'role' : 'Trésorier',
        'avatar' : '/images/members/tresorier.jpg',
        'name' : 'CROCHET',
        'firstname' : 'Mathias',
        'email' : 'mathias.crochet@estiam.com',
        'class' : '4° année'
    },
    {
        'role' : 'Secrétaire',
        'avatar' : '/images/members/secretaire.jpg',
        'name' : 'TELLIEZ',
        'firstname' : 'Audrey',
        'email' : 'audrey.telliez@estiam.com',
        'class' : '1° année'
    },
    {
        'role' : 'Vice-secrétaire',
        'avatar' : '/images/members/vice-secretaire.jpg',
        'name' : 'NSANGOUAKANDA',
        'firstname' : 'Johane Arlis',
        'email' : 'johane-arlis.nsangouakanda@estiam.com',
        'class' : '2° année'
    },
    {
        'role' : 'Membre de droit',
        'avatar' : '/images/members/membre-droit.jpg',
        'name' : 'GLAPA',
        'firstname' : 'Denis',
        'email' : 'denis.glapa@estiam.com',
        'class' : 'Formateur'
    },
]

export const footerLinks = [
    {
        title: "Pages",
        links: [
            { name: "Accueil", href: "#Home" },
            { name: "Missions du BDE", href: "#Missions" },
            { name: "Présentation du BDE", href: "#Pres" },
        ],
    },
    {
        title: "Pages",
        links: [
            { name: "Evénements du BDE", href: "#Event" },
            { name: "Contact", href: "#Contact" },
        ],
    },
    {
        title: "Légal",
        links: [
            { name: "Mentions légales", href: "#LegalMentions" },
            { name: "Politique de Confidentialité", href: "#ConfidentialPolitic" },
        ],
    },
    {
        title: "Informations de l'école",
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

//...