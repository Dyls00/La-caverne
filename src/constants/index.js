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
        title: "Événements du BDE",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

export const footerLinks = [
    {
        title: "Page",
        links: [
            { name: "Accueil", href: "#Home" },
            { name: "Missions du BDE", href: "#Missions" },
            { name: "Présentation du BDE", href: "#Pres" },
        ],
    },
    {
        title: "Page",
        links: [
            { name: "Événement du BDE", href: "#Event" },
            { name: "Contact", href: "#Contact" },
        ],
    },
    {
        title: "Legal",
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