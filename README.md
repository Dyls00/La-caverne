# Bien démarrer avec Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm install`

Installe toutes les dépendances nécessaires pour le projet.

### `npm run start`

Lance l'application en mode développement.\
Ouvrir [http://localhost:3000](http://localhost:3000) pour voir l'application dans votre navigateur.

La page se rechargera automatiquement si vous apportez des modifications au code.\
Vous pouvez également voir les erreurs de linting dans la console.

### `npm run build`

Construit l'application pour la production dans le dossier build.\
Il regroupe correctement React en mode production et optimise la construction pour de meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Consultez la section sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Note : il s'agit d'une opération à sens unique. Une fois que vous avez "eject", vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait des outils de construction et des choix de configuration, vous pouvez "eject" à tout moment. Cette commande supprimera la dépendance unique de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur ceux-ci. Toutes les commandes sauf eject fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'avez jamais besoin d'utiliser eject. Le jeu de fonctionnalités géré est adapté aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

## En savoir plus

Vous pouvez en savoir plus dans la [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [React documentation](https://reactjs.org/).

## Documentation technique du site :

### Le site est créé en utilisant React et Tailwind :

Les fonctionnalités du site web du BDE Estiam Bourges sont :

- Pages Accueil, Missions du BDE, Evénements, Présentation et Contact

- EmailJS a été ajouté pour les envoient de mails du contact

- Les modifications de textes se font en grande majorité dans un seul fichier : `/constants/index.js` :

    - Ce fichier est appelé dans les différent composant qui map les informations des constantes.